<template>
    <view class="login flex-item">
        <view class="title">登 录</view>
        <form action="">
            <view class="form-item flex-box">
                <text class="label">用户名</text>
                <input class="input flex-item" type="text" placeholder="请输入用户名" />
            </view>
            <view class="form-item flex-box">
                <text class="label">密 码</text>
                <input class="input flex-item" type="password" placeholder="请输入密码" />
            </view>
            <button type="submit">登录</button>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },

    created() {
        this.$nextTick(() => {
            this.getTest();
        });
    },

    methods: {
        getTest() {
            // this.$http
            //     .fetch({
            //         url: 'test',
            //         param: {}
            //     })
            //     .then(res => {
            //         console.log(res);
            //     });
        }
    }
};
</script>

<style lang="scss">
.login {
    .title {
        font-size: 36rpx;
        font-weight: bold;
        text-align: center;
        line-height: 60rpx;
    }
    .form-item {
        .label {
            width: 200rpx;
            text-align: right;
        }
        .input {
            padding: 0 30rpx;
        }
    }
}
</style>
