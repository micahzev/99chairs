import * as types from '../constants/ActionTypes';

export default(state = [], action) => {
  switch (action.type) {
    case types.FETCH_STORIES_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};
