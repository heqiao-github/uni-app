import request from '@/utils/request'

// 订单列表
export function orderList(params) {
	return request({
		url: '/mall-oms/api.app/v1/orders',
		method: 'get',
		params: params,
		headers: {
			'auth': true // 需要认证
		}
	})
}

// 订单确认
export function confirm(data) {
	return request({
		url: '/mall-oms/api.app/v1/orders/_confirm',
		method: 'post',
		data: data,
		headers: {
			'auth': true // 需要认证
		}
	})
}

// 订单提交
export function submit(data) {
	return request({
		url: '/mall-oms/api.app/v1/orders/_submit',
		method: 'post',
		data: data,
		headers: {
			'auth': true // 需要认证
		}
	})
}

// 订单支付
export function pay(orderId, payType) {
	return request({
		url: '/mall-oms/api.app/v1/orders/' + orderId + '/_pay',
		method: 'post',
		params: {
			payType: payType
		},
		headers: {
			'auth': true // 需要认证
		}
	})
}

// 取消订单
export function cancelOrder(orderId) {
	return request({
		url: '/mall-oms/api.app/v1/orders/cancel',
		method: 'put',
		params: {
			id: orderId
		},
		headers: {
			'auth': true // 需要认证
		}
	})
}

// 删除订单
export function deleteOrder(orderId) {
	return request({
		url: '/mall-oms/api.app/v1/orders/'+orderId,
		method: 'delete',
		headers: {
			'auth': true // 需要认证
		}
	})
}