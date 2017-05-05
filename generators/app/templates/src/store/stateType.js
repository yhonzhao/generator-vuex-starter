/**
 * Created by yhon on 2017/4/14.
 */
export const USER_NAME = "user_name";

const commonState = {
  status:{failure:true},
  res:{}
}

const state = {
  [USER_NAME]:commonState,
}

export default state
