<template>
	<view class="uni-form-item uni-column" style="">
		<titles title="手机信息"></titles>
		<view class="">
			<inputs :config="telConfig" :data="phone"></inputs>
			<inputs :config="yzm" :data="phone"></inputs>
		</view>
		<view class="tip-box" >
				<radio class="tcp-radio brown" :class="{ checked: phone.isTcp }" :checked="phone.isTcp" @tap="onTcp"></radio>
				<view class="" style="display: inline-block;height: 50px;white-space: nowrap;">
					<text>我已知晓并确认</text>
					<text class="tcp" @tap="jump('/pages/platform/platform', { id: 1 })">《平台服务协议》、</text>
					<text class="tcp" @tap="jump('/pages/platform/platform', { id: 2 })">《个人承诺书》</text>
				</view>
		</view>

	</view>
</template>

<script>
	import titles from '../title/index.vue'
	import inputs from '@/components/input/index.vue'
	export default {
		components: {
			inputs,
			titles
		},
		props:{
			phone: {
				type: Object
			}
		},
		data() {
			return {
				telConfig: {
					placeholder: "请输入手机号码",
					label: "手机号码",
					type: 'tel'
				},
				yzm: {
					label: "验证码",
					placeholder: "请输入验证码",
					text: "获取验证码",
					status: false,
					type:'yzm'
				},
			}
		},
		methods: {
			onTcp() {
				this.phone.isTcp = !this.phone.isTcp;
			}
		}
	}
</script>

<style lang="scss">
	.tip-box {
		width: 630rpx;
		line-height: 108rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: rgba(200, 150, 61, 1);

		.x-f {
			display: flex;
		}

		.tcp-radio {
			transform: scale(0.5);
		}

		.tcp {
			text-decoration: underline;
		}
	}
</style>
