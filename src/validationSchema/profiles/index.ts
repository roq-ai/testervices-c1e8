import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  first_name: yup.string(),
  last_name: yup.string(),
  address: yup.string(),
  user_id: yup.string().nullable(),
});
