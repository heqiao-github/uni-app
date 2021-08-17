<template>
	<view class="container">
		<!-- 空白页 -->
		<view v-if="!hasLogin || empty === true" class="empty">
			<image src="/static/user-bg.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				暂无数据
			</view>
			<view v-else class="empty-tips">
				<view class="navigator" @click="navToLogin">去登陆></view>
			</view>
		</view>
		<view v-if="hasLogin && status.code == 5" class="">
			<view class="top">
				<view class="" style="display: flex;justify-content: space-between;margin-bottom: 10px;">
					<text>提款金额（元）</text>
					<text>放款金额：2020-08-15 09:42:52</text>
				</view>
				<view class="" style="font-size: 80rpx;">
					6,000
				</view>
				<view class="" style="display: flex;justify-content: space-between;margin-bottom: 10px;">
					<text>年化利率： 0%</text>
					<text>时长：12个月</text>
				</view>
			</view>
			<view class="" style="background-color: #9198e5;">
				<view class="wenzi">
					<view class="" style="display: flex;justify-content: space-between;margin-bottom: 10px;">
						<text>权益编号：</text>
						<text>SX20215488888881011</text>
					</view>
					<view class="" style="display: flex;justify-content: space-between;margin-bottom: 10px;">
						<text>已还本金：</text>
						<text>0</text>
					</view>
					<view class="" style="display: flex;justify-content: space-between;margin-bottom: 10px;">
						<text>下次应还时间：</text>
						<text>2020-09-15 09:42:52</text>
					</view>
					<view class="" style="display: flex;justify-content: space-between;margin-bottom: 10px;">
						<text>下次应还金额：</text>
						<text>5000.00元</text>
					</view>
				</view>
			</view>
			<view class="" style="background-color: #fff;padding: 5px 10px;border-bottom: 1px solid #F0F0F0;">
				协议列表
				<text class="iconfont icon-youbianjiantou "></text>
			</view>
			<view class="" style="background-color: #fff;padding: 5px 10px;border-bottom: 1px solid #F0F0F0;">
				还款计划表
				<text class="iconfont icon-youbianjiantou "></text>
			</view>
			<view class="" style="background-color: #fff;padding: 5px 10px;border-bottom: 1px solid #F0F0F0;">
				权益申请详情
				<text class="iconfont icon-youbianjiantou "></text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		mapGetters
	} from 'vuex';

	import uniNumberBox from '@/components/uni-number-box.vue';
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {

				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false


			};
		},
		// onLoad(options) {
		onShow: function(options) {

			console.log('========>> 详情页面, 路径:', this.$mp.page.route, '参数', options);

		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000)
		},
		watch: {
			//显示空白页
			cartItems(e) {
				let empty = e.length === 0 ? true : false;
				if (this.empty !== empty) {
					this.empty = empty;
				}
			}
		},

		computed: {
			...mapGetters(['hasLogin', 'status'])
		},
		methods: {
			// 跳转到登录页
			navToLogin() {
				uni.navigateTo({
					url: '/pages/public/login'
				});
			}
		}
	};
</script>

<style lang="scss">
	.container {

		height: 100%;
		background: #f5f5f5;

		.icon-youbianjiantou {
			float: right;
			padding-right: 10px;
			
		}

		/* 空白页 */
		.empty {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			padding-bottom: 100upx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			background: #fff;

			image {
				width: 240upx;
				height: 160upx;
				margin-bottom: 30upx;
			}

			.empty-tips {
				display: flex;
				font-size: $font-sm + 2upx;
				color: $font-color-disabled;

				.navigator {
					color: $uni-color-primary;
					margin-left: 16upx;
				}
			}
		}
	}

	.wenzi {
		padding: 10px;
		border-radius: 10px 10px 0 0;
		border-top: 1px solid #fff;
		background: #fff;
		margin-bottom: 10px;
	}

	.top {
		padding: 10px 10px;
		background: linear-gradient(#0055ff, #9198e5);
		;
	}

	/* 购物车列表项 */
	.cart-item {
		display: flex;
		position: relative;
		padding: 30upx 40upx;

		.image-wrapper {
			width: 230upx;
			height: 230upx;
			flex-shrink: 0;
			position: relative;

			image {
				border-radius: 8upx;
			}
		}

		.checkbox {
			position: absolute;
			left: -16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background: #fff;
			border-radius: 50px;
		}

		.item-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position: relative;
			padding-left: 30upx;

			.title,
			.price {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
			}

			.attr {
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				height: 50upx;
				line-height: 50upx;
			}

			.price {
				height: 50upx;
				line-height: 50upx;
			}
		}

		.del-btn {
			padding: 4upx 10upx;
			font-size: 34upx;
			height: 50upx;
			color: $font-color-light;
		}
	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 100upx;
		/* #endif */
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, 0.5);
		border-radius: 16upx;

		.checkbox {
			height: 52upx;
			position: relative;

			image {
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.clear-btn {
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: $font-base;
			color: #fff;
			background: $font-color-disabled;
			border-radius: 0 50px 50px 0;
			opacity: 0;
			transition: 0.2s;

			&.show {
				opacity: 1;
				width: 120upx;
			}
		}

		.total-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: right;
			padding-right: 40upx;

			.price {
				font-size: $font-lg;
				color: $font-color-dark;
			}

			.coupon {
				font-size: $font-sm;
				color: $font-color-light;

				text {
					color: $font-color-dark;
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72);
		}
	}

	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked {
		color: $uni-color-primary;
	}
</style>
