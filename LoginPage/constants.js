/*
 * LoginConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'M83/Login/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'M83/Login/CHANGE_PASSWORD';
export const LOGGED_SUCCESSFULLY = 'M83/Login/LOGGED_SUCCESSFULLY';
export const LOGIN_FAILED = 'M83/Login/LOGIN_FAILED';
export const LOGIN_INITIATED = 'M83/Login/LOGIN_INITIATED';
