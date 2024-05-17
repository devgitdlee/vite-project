// actions.js

export const SELECT_MENU = 'SELECT_MENU';

export const selectMenu = (menuIndex) => ({
  type: SELECT_MENU,
  payload: 1+menuIndex*10,
});
