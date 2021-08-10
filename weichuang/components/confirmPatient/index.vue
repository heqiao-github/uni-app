<template>
	<view class="uni-form-item uni-column" style="">
		<titles title="患者证件信息"></titles>
		<view class="takePhoto" @tap="takePhoto">
			<view class="photo">
				<image class="img" style="background-size: 50% 50%;" src="../../static/photo.png" mode=""></image>
				<view style="text-align: center;">身份证正面照</view>
			</view>
			<view class="photo">
				<image class="img" src="../../static/photo.png" mode=""></image>
				<view style="text-align: center;">身份证反面照</view>
			</view>
		</view>
		<titles title="患者身份证信息"></titles>
		<view class="">
			<inputs :config="name" :data="patient"></inputs>
			<inputs :config="idcard" :data="patient"></inputs>
			<inputs :config="phone" :data="patient"></inputs>
		</view>
		<titles title="患者就医信息"></titles>
		
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
			patient: Object
		},
		data() {
			return {
				name: {
					placeholder: "请输入姓名",
					label: "姓名",
					type:"name"
				},
				idcard: {
					label: "身份证号",
					placeholder: "请输入身份证号码",
					type:"idcard"
				},
				
				phone: {
					label:"患者手机",
					placeholder: "请输入患者手机",
					type:"tel"
				}
			}
		},
		methods: {
			takePhoto() {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['camera','album'], //这要注意，camera掉拍照，album是打开手机相册
					success: (res) => {
						console.log(res);
						
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.takePhoto {
		display: flex;
		justify-content: space-evenly;
		margin: 10px;

		.photo {
			.img {
				width: 120px;
				height: 80px;
				 div {
					background-size: 50% 50%;
				}
			}
		}
	}

	uni-image>img {
		width: 30%;
	}
</style>
