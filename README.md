# generator-vuex-starter [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> a vuex starter

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vuex-starter using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vuex-starter
```

Then generate your new project:

```bash
yo vuex-starter
```

## Use step
1: create type and state
```bash
cd $prodir/src/store
```
```javascript
export const USER_NAME = "user_name";

const commonState = {
  status:{failure:true},
  res:{}
}

const state = {
  [USER_NAME]:commonState,
}

export default state
```
2: add actions
```javascript
import {createActions} from '../utils/index'
import * as stateType from './stateType'

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
```
3: add mutation
```javascript
import * as stateType from './stateType'
import {createMutations} from '../utils/index'

const mutations = {
  [stateType.USER_NAME]:createMutations(stateType.USER_NAME)
}

export default mutations
```
4: use in vue-file
```javascript
import {user_name} from '../store/actions/actions'
import {USER_NAME} from '../store/stateType'

export default {
  name: 'hello',
  data() {
      return{
        status:this.$store.state[USER_NAME],
      }
    },
    computed:{
      if(this.$store.state[USER_NAME].status.success)
        return this.$store.state[USER_NAME].res;
      else 
        return {};
    },
    methods: {
      handleSelect() {
        user_name(this.$store); //dispatch actions
      }
    }
}
```

## Bug submit
https://github.com/yhonzhao/generator-vuex-starter/issues


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Yhon]()


[npm-image]: https://badge.fury.io/js/generator-vuex-starter.svg
[npm-url]: https://npmjs.org/package/generator-vuex-starter
[travis-image]: https://travis-ci.org/yhonzhao/generator-vuex-starter.svg?branch=master
[travis-url]: https://travis-ci.org/yhonzhao/generator-vuex-starter
[daviddm-image]: https://david-dm.org/yhonzhao/generator-vuex-starter.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/yhonzhao/generator-vuex-starter
[coveralls-image]: https://coveralls.io/repos/yhonzhao/generator-vuex-starter/badge.svg
[coveralls-url]: https://coveralls.io/r/yhonzhao/generator-vuex-starter
