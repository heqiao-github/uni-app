<template>
	<view class="inputs">
		<label class="title" style="width: 140px;">{{config.label}}</label>
		<input v-model="data[config.type]" class="uni-input" name="input" :placeholder="config.placeholder" />
		
	</view>
</template>

<script>
	export default {
		
		props: {
			config: {
				type: Object,
				default: function() {
					return {}
				}
			},
			data: {
				type: Object,
				default: function() {
					return {}
				}
			},
		},
		methods: {
			async getCode() {
				let that = this;
				that.code.status = true;
				let countdown = 60;
				that.$api('sms.send', {
					mobile: that.mobile,
					event: 'register'
				}).then(res => {
					if (res.code === 1) {
						that.code.text = countdown + '秒';
						that.code.status = true;
						let timer = setInterval(() => {
							if (countdown > 0) {
								that.code.text = countdown - 1 + '秒';
								countdown--;
							} else {
								clearInterval(timer);
								that.code.text = '获取验证码';
								that.code.status = false;
							}
						}, 1000);
					} else {
						that.code.status = false;
					}
				});
			},

		}
	}
</script>

<style lang="scss">
	.inputs {
		display: flex;
		align-items: center;
		height: 50px;
		border-bottom: 1px solid #e1e1e1;

		.title {
			padding-left: 10px;
		}

		button {
			color: green;
			background: none;
			font-size: 14px;
			color: #845708;
			
			border-radius: 0;
			
			width: 101px;
			padding: 0;
			&::after {
				width: 0;
				height: 0;
			}
		}
	}
</style>
