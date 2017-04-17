/**
 * Created by yhon on 2017/4/10.
 */
import * as UserType from './userType'
import {createGetter} from '../utils/index'

export const getUserName = "get_"+UserType.USER_NAME;

const getters = {
  [getUserName]:createGetter(UserType.USER_NAME)
}

export default getters
