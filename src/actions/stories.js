import * as types from '../constants/ActionTypes';
import { fetchStoriesAPI } from '../helpers/ClientAPI';

export function fetchStories(options) {
  return {
    type: types.FETCH_STORIES,
    payload: {
      promise: fetchStoriesAPI()
    }
  }
};
