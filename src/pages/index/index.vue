<template>
    <view class="app">
        <scroll-view style="height: 300px;" scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"
            :refresher-threshold="100" refresher-background="lightgreen" @refresherpulling="onPulling"
            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort">
                <view class="uni-flex uni-column">
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
                    <view class="flex-item flex-item-V uni-bg-red">A</view>
                    <view class="flex-item flex-item-V uni-bg-green">B</view>
                    <view class="flex-item flex-item-V uni-bg-blue">C</view>
            </view>
            </scroll-view>
        <tab-bar type="home" />
    </view>
</template>

<script>
import tabBar from '@/components/tabBar';

export default {
  components: {
    'tab-bar': tabBar,
  },
  data() {
            return {
                triggered: false
            }
        },
        onLoad() {
            this._freshing = false;
            setTimeout(() => {
                this.triggered = true;
            }, 1000)
        },
        methods: {
            onPulling(e) {
                console.log("onpulling", e);
            },
            onRefresh() {
                if (this._freshing) return;
                this._freshing = true;
                setTimeout(() => {
                    this.triggered = false;
                    this._freshing = false;
                }, 3000)
            },
            onRestore() {
                this.triggered = 'restore'; // 需要重置
                console.log("onRestore");
            },
            onAbort() {
                console.log("onAbort");
            }
        }
};
</script>

<style></style>
