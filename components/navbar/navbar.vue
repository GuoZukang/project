<template>
	<view class="nav">
		<view></view>
		<view class="navbar"></view>
	</view>
</template>

<script setup>
	import {
		onBeforeMount
	} from 'vue'
	const setNavSize = () => {
		const {
			statusBarHeight,
			system
		} = uni.getSystemInfoSync()
	}
	onBeforeMount(() => {
		setNavSize()
	})
</script>

<style>
	.nav {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 2;
	}
</style>