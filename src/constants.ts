export const VERSION = '0.0.3';
export const STORAGE_PREFIX = 'dev_';
export const OWNER_USERNAME = 'nebalus';

export const APP_BACKEND_TOP_LEVEL_DOMAIN = import.meta.env.APP_BACKEND_TOP_LEVEL_DOMAIN;

export const APP_BACKEND_API_DOMAIN = import.meta.env.APP_BACKEND_API_DOMAIN;
export const APP_BACKEND_API_PROTOCOL = import.meta.env.APP_BACKEND_API_PROTOCOL;
export const APP_BACKEND_API_PORT = import.meta.env.APP_BACKEND_API_PORT;

export const APP_FRONTEND_DOMAIN = import.meta.env.APP_FRONTEND_DOMAIN;
export const APP_FRONTEND_PROTOCOL = import.meta.env.APP_FRONTEND_PROTOCOL;
export const APP_FRONTEND_PORT = import.meta.env.APP_FRONTEND_PORT;
export const APP_FRONTEND_FULL_PATH = APP_BACKEND_API_PROTOCOL + "://" + APP_BACKEND_API_DOMAIN;
export const APP_FRONTEND_FULL_PATH_WITH_PORT = APP_FRONTEND_FULL_PATH + ":" + APP_BACKEND_API_PORT;



export const APP_DASHBOARD_PATH = "/-/";