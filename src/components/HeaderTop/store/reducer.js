import * as constants from './constants'

import { fromJS } from 'immutable'

const defaultState = fromJS({
  fullScreen: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_FULLSCREEN:
      console.log(state)
      return state.set('fullScreen', !state.get('fullScreen'))
    default:
      return state;
  }
}