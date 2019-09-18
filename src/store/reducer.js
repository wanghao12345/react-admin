import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '@/components/HeaderTop/store'

const reducer = combineReducers({
  header: headerReducer
});

export default reducer
