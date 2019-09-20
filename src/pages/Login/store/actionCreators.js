import * as constants from './constants'

export const saveUserInfo = (data) => ({
  type: constants.SAVE_USERINFO,
  data: data
})