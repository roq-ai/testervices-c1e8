import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date(),
  score: yup.number().integer(),
  user_id: yup.string().nullable(),
});
