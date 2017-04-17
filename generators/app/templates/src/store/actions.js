/**
 * Created by yhon on 2017/4/10.
 */
import {createActions} from '../utils/index'
import * as UserType from './userType'

function userNameGet() {
  return {
    type: UserType.USER_NAME,
    payload: {
      endpoint: '/v1/isConnect',
      options: {
        method: 'GET'
      }
    }
  }
}

export const user_name = createActions(userNameGet);


