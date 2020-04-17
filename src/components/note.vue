<template>
  <div class="note">
    <div v-if="note.dynamic_type == 1" class="note-hd">
      <img class="image" :src="note.main_img.url" mode="widthFix">
    </div>
    <div v-if="note.dynamic_type == 2" class="note-hd">
      <img class="image" :src="note.video.video_frontcover" mode="widthFix">
    </div>
    <div class="note-bd">
      <div v-if="note.title" class="title">{{ note.title }}</div>
      <div class="user">
        <img :src="note.user_head_portrait" class="avatar" mode="widthFix">
        <div class="user-bd">
          <div class="name">{{ note.user_nick_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    note: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
@baseColor: #3a3d40;
@activeColor: #EF375A;
@light: '#889199';

.note {
  background: #fff;
  overflow: hidden;
  border-radius: 3px;
  margin-bottom: 4px;
  &-hd {
    width: 100%;
    .image {
      width: 100%;
      height: auto;
    }
  }
  &-bd {
    padding: 8px 10px;
    .title {
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 10px;
    }
    .user {
      display: flex;
      .avatar {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        border-radius: 100%;
        overflow: hidden;
      }
      &-bd {
        flex: 1;
        min-width: 0;
        .name {
          width: 100%;
          color: @light;
          font-size: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
