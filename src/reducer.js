//合并所有的reducer;并且返回
import {combineReducers} from 'redux'
import {counter} from './index.redux'
import {Auth} from './Auth.redux'

export default combineReducers({counter,Auth})