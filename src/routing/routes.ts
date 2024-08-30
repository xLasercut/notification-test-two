const BASE_ROUTE = '/notification-test-two';

const ROUTES = {
  LOGIN: `${BASE_ROUTE}/`,
  HOME: `${BASE_ROUTE}/home`,
  NOTIFICATION_SETTINGS: `${BASE_ROUTE}/notification-settings`,
} as const;

export {ROUTES};
