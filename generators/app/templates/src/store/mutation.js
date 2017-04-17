/**
 * Created by yhon on 2017/4/10.
 */
import * as UserType from './userType'
import {createMutations} from '../utils/index'

const mutations = {
  [UserType.USER_NAME]:createMutations(UserType.USER_NAME)
}

export default mutations

