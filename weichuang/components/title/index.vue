<template>
	<view class="title">
		{{title}}
	</view>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style>
	.title {
		height: 35px;
		line-height: 35px;
		background: rgb(245 245 249);
		padding-left: 10px;
	}
</style>
