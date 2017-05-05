/**
 * Created by yhon on 2017/4/10.
 */
import * as stateType from './stateType'
import {createMutations} from '../utils/index'

const mutations = {
  [stateType.USER_NAME]:createMutations(stateType.USER_NAME)
}

export default mutations

