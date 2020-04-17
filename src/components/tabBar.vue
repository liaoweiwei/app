<template>
  <view class="tabbar">
    <view class="tabbar-item" :class="{'active': type == 'home'}">
      <navigator :url="type == 'home' ? '': '/pages/index/index'">
        <span class="iconfont" :class="type == 'home'? 'icon-homefill' : 'icon-home'"></span>
        <span class="text">首页</span>
      </navigator>
    </view>
    <view class="tabbar-item" :class="{'active': type == 'shop'}">
      <navigator :url="type == 'shop' ? '': '/pages/shop/index'">
        <span class="iconfont" :class="type == 'shop'? 'icon-appsfill' : 'icon-apps'"></span>
        <span class="text">百铺</span>
      </navigator>
    </view>
    <view class="tabbar-item" :class="{'active': type == 'my'}">
      <navigator :url="type == 'my' ? '': '/pages/my/index'">
        <span class="iconfont" :class="type == 'my'? 'icon-myfill' : 'icon-my'"></span>
        <span class="text">个人</span>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    type: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
$baseColor: #3a3d40 !default;
$activeColor: #EF375A !default;

.tabbar {
  z-index: 2000;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 0 0.125rem 0 rgba(0,0,0,.15);
  display: flex;
  font-size: 12px;
  color: $baseColor;

  &-item {
    flex: 1;
    text-align: center;
    a {
      display: block;
      padding: 8px 10px;
    }
    .iconfont {
      font-size: 18px;
    }
    .text {
      display: block;
    }
    &.active {
      color: $activeColor;
    }
  }
}
</style>
