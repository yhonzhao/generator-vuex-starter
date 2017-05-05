/**
 * Created by yhon on 2017/4/10.
 */
import {createActions} from '../../utils/index'
import * as stateType from '../stateType'

function userNameGet() {
  return {
    type: stateType.USER_NAME,
    payload: {
      endpoint: '/v1/isConnect',
      options: {
        method: 'GET'
      }
    }
  }
}

export const user_name = createActions(userNameGet);


