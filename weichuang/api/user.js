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

export function finishApply(data) {
	return request({
		url: '/consumer/finishApply',
		method: 'post',
		data: data,
	})
}