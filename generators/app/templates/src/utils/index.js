/**
 * Created by yhon on 2017/4/10.
 */
import fetch from 'isomorphic-fetch';
import {encode} from 'querystring';

const dispatchAction = (commit, {type, payload}) => {
  let {endpoint, params, options} = payload;
  let headers;
  if (options.headers != undefined)
    headers = new Headers(options.headers);
  else
    headers = new Headers();
  // const token = localStorage.getItem('_token' || 'token');
  // if (!token) {
  //   return Promise.reject({status: 401, message:'Unauthorized'});
  // }
  // headers.set("x-auth-token", token);
  fetch(`${endpoint}?${encode(params)}`, Object.assign({}, options, {headers}))
    .then(res => {
      if (res.ok) {
        res.json().then(json => {
          commit(type, {
            status: {success: true},
            res: json
          })
        });
      } else {
        res.json().then(json => {
          switch (res.status) {
            case 401:
              commit(type, {
                status: {unAuth: true},
                res: json
              })
              break;
            case 403:
              commit(type, {
                status: {forbidden: true},
                res: json
              })
              break;
            default:
              commit(type, {
                status: {failure: true},
                res: json
              });
          }
        });
      }
    }).catch(error => {
    commit(type, {
      status: {error: true},
      res: error
    })
  })
}

export function createActions(payloadCreate) {
  return ({dispatch, commit}, ...args) => {
    let {type, payload} = payloadCreate(...args);
    commit = commit || dispatch;
    dispatchAction(commit, {type, payload});
  }
}

export function createMutations(type) {
  return (state, result)=> {
      state[type] = result;
    }
}

export function createGetter(type) {
  return (state)=> {
    return state[type];
  }
}
