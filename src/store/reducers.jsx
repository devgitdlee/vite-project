// reducers.js

import { SELECT_MENU } from './actions';

const initialState = {
  selectedMenu: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
