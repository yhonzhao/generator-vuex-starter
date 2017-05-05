/**
 * Created by yhon on 2017/4/10.
 */
import * as stateType from './stateType'
import {createGetter} from '../utils/index'

export const getUserName = "get_"+stateType.USER_NAME;

const getters = {
  [getUserName]:createGetter(stateType.USER_NAME)
}

export default getters
