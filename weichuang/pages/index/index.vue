<template>
	<view class="container">
		<!-- 头部轮播 -->
		<view class="background">

		</view>
		<view class="header" style="height: 300px; position: relative;">
			<view class="mianxi">
				免息
			</view>
			<view class="" style="padding: 10px 0 20px 0;">
				提倡理性消费，合理使用贷款
			</view>
			<view class="" style="padding: 10px 0 20px 0;">
				最高免息额度（元）
			</view>
			<view class="money">
				6000
			</view>
			<view class="6">
				免息额度，最终以实际授信额度为准
			</view>
			<button type="primary" style="margin-top: 20px;
					border-radius: 20px;margin-top: 20px;
					border-radius: 20px;width:206px;" @tap="activeMoney">{{status.message || "激活免息额度"}}
			</button>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>极速审核</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>0期分期</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>手术保障</text>
			</view>

		</view>
		<view class="process" style="margin:10px">
			贷款流程
		</view>
		<view class="process-box">
			<view class="apply" style="display: flex;flex-direction: column;">
				<view :class="{back:true, check:true}" style="width: 25px;height: 25px;background-color: #10aeff;">
					<text class="iconfont icon-shenqing"></text>
				</view>

				<view :class="{check:checkIfShow(-1)}" style="display: flex;flex-direction: column;">
					<text>额度</text>
					<text>测算</text>
				</view>

			</view>
			<view class="arrow iconfont icon-jiantou">
			</view>
			<view class="active">

				<view class="back">
					<text class="iconfont icon-activate"></text>
				</view>
				<view :class="{check:checkIfShow(0)}" style="display: flex;flex-direction: column;">
					<text>额度</text>
					<text>激活</text>
				</view>

			</view>
			<view class="arrow iconfont icon-jiantou">
			</view>
			<view class="cure">
				<view class="back">
					<text class="iconfont icon-zhiliao"></text>
				</view>
				<view :class="{check:checkIfShow(1)}" style="display: flex;flex-direction: column;">
					<text>手术</text>
					<text>治疗</text>
				</view>
			</view>
			<view class="arrow iconfont icon-jiantou">
			</view>
			<view class="draw-money">
				<view class="back">
					<text class="iconfont icon-tikuan"></text>
				</view>
				<view :class="{check:checkIfShow(2)}" style="display: flex;flex-direction: column;">
					<text>提款</text>
					<text>申请</text>
				</view>
			</view>
			<view class="arrow iconfont icon-jiantou">
			</view>
			<view class="repay">
				<view class="back">
					<text class="iconfont icon-huankuan"></text>
				</view>
				<view :class="{check:checkIfShow(3)}" style="display: flex;flex-direction: column;">
					<text>按期</text>
					<text>还款</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import "../../static/font/iconfont.css"


	import {
		mapGetters
	} from 'vuex';

	export default {

		data() {
			return {

			};
		},
		onLoad() {

			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			console.log('refresh');
			this.$store.dispatch("user/getHomeInfo");
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow() {

		},
		computed: {
			...mapGetters(['hasLogin', "status"]),

		},
		methods: {
			checkIfShow(index) {
				console.log(index, 444444, this.status.code)
				return index < this.status.code ? true : false;
			},
			activeMoney() {
				if (this.hasLogin) {
					debugger
					switch (this.status.code) {
						case -1: // // 预授信
							uni.navigateTo({
								url: "/pages/activeMoney/index"
							});
							break;
						case 0: // 费用核查激活
							uni.navigateTo({
								url: "/pages/moneyCheck/moneyCheck"
							})
							break;
						case 1: // 上次知情同意书
							uni.navigateTo({
								url: "/pages/agree/agree"
							})
							break;
						case 4:
							uni.switchTab({
								url: "/pages/center/center"
							})
							break;
						default:
							break;
					}

				} else {
					uni.navigateTo({
						url: "/pages/public/login?path=" + encodeURIComponent("/pages/activeMoney/index")
					})
				}

			}

		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			this.$api.msg('点击了搜索框');
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
	.container {
		height: 100%;

		.background {
			background-color: #007aff;
			height: 200px;
		}

		.header {
			height: 300px;
			background-color: #FFFFFF;
			margin: -200px 15px 0 15px;

			text-align: center;
			font-size: 12px;
		}

		.process::before {
			content: "";
			border: 3px solid #007aff;

		}

		.process-box {
			display: flex;
			justify-content: space-around;
			margin: 10px;
			background: #fff;
			height: 90px;
			box-shadow: 0 2px 16px #aaaaaa, 0 0 1px #aaaaaa, 0 0 1px #aaaaaa;

			.back {
				width: 25px;
				height: 25px;
				background-color: rgb(16, 174, 255);
				border-radius: 25px;
				text-align: center;
				vertical-align: middle;

				.iconfont {
					color: #fff;
				}
			}

			.check {
				color: green;
			}

			.arrow.iconfont {
				color: #7c7c7c;
			}

			>view {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
			}
		}

		.money {
			font-size: 39px;
			font-weight: 600;
			margin-bottom: 10px;
		}

		.mianxi {
			position: absolute;
			left: 0;
			top: 30px;
			width: 60px;
			background: #007aff;
			color: #fff;
			height: 26px;
			line-height: 26px;
			border-radius: 13px;
			border-radius: 0 13px 13px 0;
		}
	}

	/* #ifdef MP */

	.mp-search-box {
		position: absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;

		.ser-input {
			flex: 1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color: $font-color-base;
			border-radius: 20px;
			background: rgba(255, 255, 255, .6);
		}
	}

	page {
		.cate-section {
			position: relative;
			z-index: 5;
			border-radius: 16upx 16upx 0 0;
			margin-top: -20upx;
		}

		.carousel-section {
			padding: 0;

			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}

			.carousel {
				.carousel-item {
					padding: 0;
				}
			}

			.swiper-dots {
				left: 45upx;
				bottom: 40upx;
			}
		}
	}

	/* #endif */


	page {
		background: #f5f5f5;
	}

	.m-t {
		margin-top: 16upx;
	}

	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}

	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}


	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		padding: 30upx 22upx;
		background: #fff;
		margin: 0 15px;

		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}

		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}

	.ad-1 {
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;

		image {
			width: 100%;
			height: 100%;
		}
	}


	.f-header {
		display: flex;
		align-items: center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;

		image {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}

		.tit-box {
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.tit {
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}

		.tit2 {
			font-size: $font-sm;
			color: $font-color-light;
		}

		.icon-you {
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
</style>
