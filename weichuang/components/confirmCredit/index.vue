<template>
	<view class="uni-form-item uni-column" style="">
		<titles title="贷款人证件信息"></titles>
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
		<titles title="贷款人身份证信息"></titles>
		<view class="">
			<inputs :config="name"></inputs>
			<inputs :config="idcard"></inputs>
		</view>
		<titles title="贷款人本人银行卡信息"></titles>
		<view class="">
			<inputs :config="bankId"></inputs>
			<inputs :config="bankName"></inputs>
			<inputs :config="phone"></inputs>
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
		data() {
			return {
				name: {
					placeholder: "请输入姓名",
					label: "姓名"
				},
				idcard: {
					label: "身份证号",
					placeholder: "请输入身份证号码",
				},
				bankId: {
					label:"银行卡号",
					placeholder: "请输入银行卡"
				},
				bankName: {
					label:"银行卡名称",
					placeholder: "请输入银行卡名称"
				},
				phone: {
					label:"银行预留手机",
					placeholder: "请输入银行卡名称"
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
