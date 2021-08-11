<template>
	<view class="container">
		<view class="photo">
			<image class="img" style="background-size: 50% 50%;" src="../../static/photo.png" mode=""></image>
			<view style="text-align: center;">请上次知情同意书</view>
		</view>
		<view class="uni-btn-v">
			<button @tap="finish">提交审核</button>
		</view>
	</view>
</template>

<script>
	import {agree} from '@/api/user.js'
	export default {
		methods:{
			finish() {
				agree().then(res=>{
					uni.switchTab({
						url: "/pages/index/index"
					})
				})
			}
		}
	}
</script>

<style>
</style>
