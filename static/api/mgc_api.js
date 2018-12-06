import axios from 'axios'

import {base} from './zxy_api'

export const getBusRoute = (params) => { return axios.get(`${base}/app/bus-route/query`, {params}) }
export const busLineListByStop = (params) => { return axios.get(`${base}/app/bus-route/query-by-stop`, {params}) }
export const busRouteDetail = params => { return axios.get(`${base}/app/bus-stop/find-by-route/` + params) }
export const getStopDetail = params => { return axios.get(`${base}/app/bus-stop/detail/` + params) }
export const busLineByTwoId = (startStopId, endStopId) => { return axios.get(`${base}/app/bus-line/`+ startStopId  +`/` + endStopId) }
