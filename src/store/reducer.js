import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '@/components/HeaderTop/store'
import { reducer as userReducer } from '@/pages/Login/store'

const reducer = combineReducers({
  header: headerReducer,
  user: userReducer
});

export default reducer
