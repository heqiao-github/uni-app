/**
 * 用户相关api
 */
import request from '@/utils/request'

export  function login(data) {
	return request({
		url: '/consumer/login',
		method: 'POST',
		data: data,
	})
}

export function logout() {
	return request({
		url: '/consumer/logout',
		method: 'get',
		headers: {
			'auth': true // 需要认证
		}
	})
}


export function getUserInfo() {
	return request({
		url: '/consumer/getUserInfo',
		method: 'GET',
	})
}

export function getIndexInfo() {
	return request({
		url: '/consumer/getIndexInfo',
		method: 'GET',
	})
}


export function finishApply(data) {
	return request({
		url: '/consumer/finishApply',
		method: 'post',
		data: data,
	})
}

export function activeApply(data) {
	return request({
		url: '/consumer/activeApply',
		method: 'get',
	})
}

export function agree(data) {
	return request({
		url: '/consumer/agree',
		method: 'get',
	})
}

export function quit() {
	return request({
		url: '/consumer/quit',
		method: 'get',
	})
}

