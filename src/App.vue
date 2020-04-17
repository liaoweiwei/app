<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
/*每个页面公共css */
@font-face {font-family: "iconfont";
  src: url('/font/iconfont.eot?t=1586942985993'); /* IE9 */
  src: url('/font/iconfont.eot?t=1586942985993#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('/font/iconfont.woff?t=1586942985993') format('woff'),
  url('/font/iconfont.ttf?t=1586942985993') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('/font/iconfont.svg?t=1586942985993#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-appsfill:before {
  content: "\e600";
}

.icon-camerafill:before {
  content: "\e605";
}

.icon-commentfill:before {
  content: "\e607";
}

.icon-comment:before {
  content: "\e608";
}

.icon-edit:before {
  content: "\e60a";
}

.icon-favorfill:before {
  content: "\e60d";
}

.icon-favor:before {
  content: "\e60f";
}

.icon-goods:before {
  content: "\e612";
}

.icon-goodsfill:before {
  content: "\e613";
}

.icon-home:before {
  content: "\e614";
}

.icon-homefill:before {
  content: "\e615";
}

.icon-likefill:before {
  content: "\e616";
}

.icon-like:before {
  content: "\e618";
}

.icon-locationfill:before {
  content: "\e619";
}

.icon-location:before {
  content: "\e61a";
}

.icon-more:before {
  content: "\e61b";
}

.icon-myfill:before {
  content: "\e61c";
}

.icon-my:before {
  content: "\e61d";
}

.icon-newshotfill:before {
  content: "\e61e";
}

.icon-newshot:before {
  content: "\e61f";
}

.icon-search:before {
  content: "\e62b";
}

.icon-shop:before {
  content: "\e62e";
}

.icon-shopfill:before {
  content: "\e62f";
}

.icon-tag:before {
  content: "\e630";
}

.icon-upstagefill:before {
  content: "\e633";
}

.icon-upstage:before {
  content: "\e635";
}

.icon-tagfill:before {
  content: "\e636";
}

.icon-appreciate:before {
  content: "\e638";
}

.icon-apps:before {
  content: "\e639";
}

.icon-appreciatefill:before {
  content: "\e63c";
}

.app {
  width: 100%;
  background-color: #f3f6fa;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'PingFang SC';
  font-size: 14px;
  color: #3A3D40;
  overflow: hidden;
}
</style>
