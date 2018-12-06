import axios from 'axios'

import {base} from './zxy_api'

export const getBusStop = (params) => { return axios.get(`${base}/app/bus-stop/query`, {params}) }
//这是一个动态的接口
export const searchLineByStop = (params) => { return axios.get(`${base}/app/bus-line`, {params}) }

