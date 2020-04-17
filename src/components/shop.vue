<template>
  <div class="tabbar">
    <div class="tabbar-item" :class="{'active': type == 'home'}">
      <a :url="type == 'home' ? '': '/pages/index/index'">
        <span class="iconfont" :class="type == 'home'? 'icon-homefill' : 'icon-home'"></span>
        <span class="text">首页</span>
      </a>
    </div>
    <div class="tabbar-item" :class="{'active': type == 'shop'}">
      <a :url="type == 'shop' ? '': '/pages/shop/index'">
        <span class="iconfont" :class="type == 'shop'? 'icon-appsfill' : 'icon-apps'"></span>
        <span class="text">百铺</span>
      </a>
    </div>
    <div class="tabbar-item" :class="{'active': type == 'myself'}">
      <a :url="type == 'myself' ? '': '/pages/myself/index'">
        <span class="iconfont" :class="type == 'myself'? 'icon-myfill' : 'icon-my'"></span>
        <span class="text">个人</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
@baseColor: #3a3d40;
@activeColor: #EF375A;

.tabbar {
  z-index: 2000;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 0 0.125rem 0 rgba(0,0,0,.15);
  display: flex;
  font-size: 12px;
  color: @baseColor;

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
      color: @activeColor;
    }
  }
}
</style>
