<template>
    <view class="app">
        <uni-list>
            <uni-list-item title="标题文字" :show-arrow="false"></uni-list-item>
            <uni-list-item title="标题文字"></uni-list-item>
            <uni-list-item title="标题文字" :show-badge="true" badge-text="12"></uni-list-item>
            <uni-list-item title="禁用状态" :disabled="true" :show-badge="true" badge-text="12"></uni-list-item>
        </uni-list>
        <tab-bar type="my" />
    </view>
</template>

<script>
import tabBar from '@/components/tabBar';

export default {
  components: {
    'tab-bar': tabBar,
  },
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
            console.log(1)
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

<style></style>