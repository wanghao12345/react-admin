import * as constants from './constants'

import { fromJS } from 'immutable'

const defaultState = fromJS({
  userInfo: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SAVE_USERINFO:
      return state.set('userInfo', action.data)
    default:
      return state;
  }
}