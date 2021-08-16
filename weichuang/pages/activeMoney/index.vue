<template>
	<view class="container">
		<uni-steps class="step" :options="options" :active="index"></uni-steps>
		<view class="">
			<form>
				<view class="" v-if="index===0">
					<confirm-tel :phone="phone"></confirm-tel>
				</view>
				<view class="" v-else-if="index===1">
					<confirm-credit :apply="apply"></confirm-credit>
				</view>
				<view class="" v-else-if="index===2">
					<confirm-patient :patient="patient"></confirm-patient>
				</view>
				<view class="uni-btn-v" v-if="(index ===0 ) || (index ===1)  ">
					<button @tap="next">下一步</button>
				</view>
				<view class="uni-btn-v" v-if="index ===2 ">
					<button @tap="finish">提交审核</button>
				</view>
				<view class="uni-btn-v" v-if="index ===3 ">
					申请完成！！！
				</view>
			</form>
		</view>
	</view>

</template>

<script>
	import uniSteps from "@/components/uni-steps/components/uni-steps/uni-steps";
	import confirmTel from '@/components/confirmTel/index.vue'
	import confirmCredit from '@/components/confirmCredit/index.vue'
	import confirmPatient from '@/components/confirmPatient/index.vue'
	import {finishApply} from '@/api/user.js'
	export default {
		components: {
			uniSteps,
			confirmTel,
			confirmCredit,
			confirmPatient
		},
		data() {
			return {
				options: [{
					title: '确认手机号码'
				}, {
					title: '授信信息'
				}, {
					title: '患者信息'
				}, {
					title: '提交审核'
				}],
				index: 0,
				phone:{
					tel:"",
					yzm:"",
					isTcp: false
				},
				apply: {
					name: '',
					idcard:'',
					bankcard: '',
					bankname: '',
					bankphone:"",
					tel:''
				},
				patient: {
					name:"",
					idcard:"",
					tel:""
				}
			}
		},
		
		methods: {
			next() {
				if(this.checkPhone()) {
					this.index++;
					console.log(this.index, 11111)
				} 
				
			},
			finish() {
				finishApply({
					phone:this.phone,
					apply:this.apply,
					patient:this.patient
				}).then(res => {
					
					this.index++;
					this.$store.commit("user/SET_STATUS",res.data)
					let tiemr = setTimeout(()=>{
						uni.switchTab({
							url:"/pages/index/index"
						})
					},3000)
				})
				
			},
			checkPhone() {
				console.log(this.phone,2222)
				return true;
				if(this.phone.tel !=="" && this.phone.tel.length === 11 && this.phone.yzm !== "" && this.phone.isTcp) {
					
					return true;
				}
				return false
			}
		},
		onBackPress() {
			if (this.index === 0) {
				console.log(this.index)
				return false
			}
			console.log(this.index)
			if (--this.index < 0) this.index = 0;
			return true;
		}
	}
</script>

<style lang="scss">
	.container {
		.uni-steps {
			background-color: rgb(0, 122, 255);

			::v-deep .uni-steps__row-title {
				color: #fff !important;
			}
		}
	}
</style>
