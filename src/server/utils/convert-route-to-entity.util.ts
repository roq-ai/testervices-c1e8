const mapping: Record<string, string> = {
  companies: 'company',
  'performance-evaluations': 'performance_evaluation',
  profiles: 'profile',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
