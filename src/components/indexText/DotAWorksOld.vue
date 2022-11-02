<script>
const workStyle = ref('all'),
			works = reactive({data:{}}),
      // props = defineProps({
      //   indexData:{
      //     type:Object,
      //     default:() => ({})
      //   }
      // }),
			workStyleHandle = (val) => workStyle.value = val;
onUpdated(() => {
	// works.data = props.indexData;
	// console.log(works.data);
});
</script>

<template>
<div class="DAworks DAbox">
	<h2 class="DAbox__title">代表作選輯</h2>
	<!-- s-1 -->
	<!-- <input type="radio" name="DAworksCtrl" id="DAworks_all" class="DAworks_input" checked="yes">
	<input type="radio" name="DAworksCtrl" id="DAworks_ofclWeb" class="DAworks_input">
	<input type="radio" name="DAworksCtrl" id="DAworks_actWeb" class="DAworks_input">
	<input type="radio" name="DAworksCtrl" id="DAworks_spaWeb" class="DAworks_input">
	<input type="radio" name="DAworksCtrl" id="DAworks_oldWorks" class="DAworks_input">
	<div class="DAworks_nav">
		<label for="DAworks_all" class="DAworks_nav_item all">全部</label>
		<label for="DAworks_ofclWeb" class="DAworks_nav_item ofclWeb">官網專案</label>
		<label for="DAworks_actWeb" class="DAworks_nav_item actWeb">活動網頁</label>
		<label for="DAworks_spaWeb" class="DAworks_nav_item spaWeb">一頁式商務網站</label>
		<label for="DAworks_oldWorks" class="DAworks_nav_item oldWorks">早期作品</label>
	</div>
	<ul class="DAworks_list">
		<li v-for="item in workArr" :key="item.title" :class="['DAworks__item '+item.style]">
			<figure>
				<img :src="item.src" :alt="item.alt">
				<figcaption>
					<div class="DAworks__item___content">
						<h3>{{item.title}}</h3><p>專案製作由</p><p>{{item.made}}</p>
					</div>
					<div class="DAworks__item___btn">
						<a :href="item.href"><em>快來瞧瞧</em><em>快來瞧瞧</em></a>
					</div>
				</figcaption>
			</figure>
		</li>
	</ul> -->
	<!-- s-3 -->
	<ul class="DAworks_nav">
		<li
			v-for="item in navArr" 
			:key="item.style"
			:class="['DAworks_nav_item',{selected:workStyle === item.style}]"
			@click="workStyleHandle(item.style)"
		>
			{{item.title}}
		</li>
	</ul>
	<ul class="DAworks_list">
		<!-- s-2 -->
		<!-- <transition-group name="scale">
			<li v-for="item in workArr" :key="item.title" class="DAworks__item"  v-show="workStyle === item.style || workStyle === 'all'"> -->
			<li v-for="item in workArr" :key="item.title" :class="['DAworks__item',{selected: workStyle === item.style || workStyle === 'all'}]">
				<figure v-mouseChasing>
					<img :src="item.src" :alt="item.alt">
					<figcaption>
						<div class="DAworks__item___content">
							<h3>{{item.title}}</h3><p>專案製作由</p><p>{{item.made}}</p>
						</div>
						<div class="DAworks__item___btn">
							<a :href="item.href"><em>快來瞧瞧</em><em>快來瞧瞧</em></a>
						</div>
					</figcaption>
				</figure>
			</li>
		<!-- </transition-group> -->
	</ul>
</div>
</template>

<style lang="scss">
	$worksBtnW:160px;
	$worksBtnH:36px;
	// @keyframes scaleShow1024 {
  //   0% { width: 0; max-height: 0; padding: 0; margin-bottom:0; transform:scale3d(0,0,1); }
  //   100% { width: 33.3333%; max-height: 450px; margin-bottom:20px; transform:scale3d(1,1,1); }
  // }
	.DAworks{
		padding: 15px 20px 40px; // 15+25=40
		position:relative;
		// &_input{ position:absolute; top:165px; left:-20px; }
		&_nav{
			display:flex;
			flex-wrap: wrap;
			justify-content:center;
			padding-bottom:30px;
			&_item{
				color:$GrayColor;
				font-weight:bold;
				line-height:34px;
				background-color:#fff;
				border: 2px solid $GrayColor;
				padding:0 10px;
				margin: 10px;
				transition:.4s;
				&.selected{
					color:#fff;
					text-shadow:1px 1px 1px rgba($dBGcolor,.6);
					background-color:$BGcolor;
					border-color:#fff;
					box-shadow:0 2px 4px 2px rgba($dBGcolor,.6);
				}
			}
		}
		&__item{
			// s-1, s-3
			width: 0;
			max-height: 0;
			margin:0 auto;
			transform:scale3d(0,0,1);
			transition:width .4s, max-height .4s, padding .4s, margin .4s, transform .4s;
			// s-2 s-t + #DAworks_all:checked
			// s-3
			&.selected{
				width: 100%;
				max-height: 450px;
				margin-bottom:20px;
				transform:scale3d(1,1,1);
			}
			> figure{
				max-width:400px;
				background-color:rgba($GrayColor,.8);
				padding: 20px 15px;
				margin:0 auto;
				overflow:hidden;
				position:relative;
			}
			img{
				width:100%;
				display:block;
				padding: 80px 0 50px;
			}
			figcaption{
				text-align: center;
				width:100%;
				height:100%;
				display: flex;
				flex-direction:column;
				justify-content:space-between;
				padding:15px 0;
				position:absolute;
				top:0;
				left:0;
			}
			&___content{
				text-shadow:0 1px 2px $GrayColor;
				> h3 {
					color:#fff;
					font-size:18px;
					font-weight:normal;
					margin:0;
				}
				p{
					color:$BGcolor;
					margin: 0.5em 0;
				}
			}
			&___btn{
				width:$worksBtnW;
				height:$worksBtnH;
				background-color:rgba(#000,.2);
				box-shadow:0 1px 4px rgba(#000,.6);
				margin:0 auto;
				perspective:$worksBtnW*2;
				&:hover > a{transform: translate3d(0,0,$worksBtnH*-0.5) rotateX(-90deg);}
				> a{
					color:#fff;
					line-height:$worksBtnH;
					display: block;
					width:100%;
					height:100%;
					position: relative;
					transition:transform .2s;
					transform:translate3d(0,0,$worksBtnH*-0.5);
					transform-style:preserve-3d;
				}
				em{
					font-style:normal;
					width:100%;
					height:100%;
					position:absolute;
					top:0;
					left:0;
					&:first-of-type{
						text-shadow:0 1px 1px rgba($dBGcolor,.75);
						background-color:$BGcolor;
						transform:rotateX(0deg) translate3d(0,0,$worksBtnH*0.5);
					}
					&:last-of-type{
						text-shadow:0 1px 1px rgba($dPcolor,.75);
						background-color:$Pcolor;
						transform:rotateX(90deg) translate3d(0,0,$worksBtnH*0.5);
					}
				}
			}
		}
	}
	// s-1
	// %DActrlChecked{ color:#fff; text-shadow:1px 1px 1px rgba($dBGcolor,.6); background-color:$BGcolor; border-color:#fff; box-shadow:0 2px 4px 2px rgba($dBGcolor,.6); }
	// #DAworks{
	// 	&_all:checked ~ .DAworks_nav > .all, &_ofclWeb:checked ~ .DAworks_nav > .ofclWeb,
	// 	&_actWeb:checked ~ .DAworks_nav > .actWeb, &_spaWeb:checked ~ .DAworks_nav > .spaWeb,
	// 	&_oldWorks:checked ~ .DAworks_nav > .oldWorks{@extend %DActrlChecked;}
	// 	&_all:checked ~ .DAworks_list > li, &_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
	// 	&_actWeb:checked ~ .DAworks_list > .actWeb, &_spaWeb:checked ~ .DAworks_list > .spaWeb,
	// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{ width: 100%; max-height: 450px; margin-bottom:20px; transform:scale3d(1,1,1); }
	// }
	// s-2
	// .scale{
	// 	&-enter, &-leave {
  //     &-active{transition:width .4s, max-height .4s, margin .4s, transform .4s;}
  //   }
  //   &-enter-from, &-leave-to { width: 0; max-height: 0; margin-bottom:0; transform:scale3d(0,0,1); }
  //   &-enter-to, &-leave-from { width: 100%; max-height: 450px; margin-bottom:20px; transform:scale3d(1,1,1); }
	// }
	@media screen and (min-width: 640px) {
		.DAworks{
			&_list:after{
				content:"";
				display:block;
				clear:both;
			}
			&__item{
				// width: 50%; // s-2
				float:left;
				&.selected{
					width: 50%;
					padding:0 10px;
				}
			}
		}
		// s-1
		// #DAworks{
		// 	&_all:checked ~ .DAworks_list > li, &_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
		// 	&_actWeb:checked ~ .DAworks_list > .actWeb, &_spaWeb:checked ~ .DAworks_list > .spaWeb,
		// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{width: 50%;}
		// }
		// s-2
		// .scale{
		// 	&-enter-from, &-leave-to {padding:0;}
		// 	&-enter-to, &-leave-from { width:50%; padding:0 10px; }
		// }
	}
	@media screen and (min-width: 640px) and (max-width: 1279px) {
    .DAworks{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
	@media screen and (min-width: 1024px) {
		.DAworks__item{
			// width: 33.3333%; // s-2
			&.selected{
				width: 33.3333%;
				max-height: 300px;
			}
			> figure, img{padding:0;}
			figcaption{
				background-color:rgba($GrayColor,.9);
				justify-content:center;
				left:100%;
			}
			&___content{
				text-shadow:0 1px 2px rgba(#000,.6);
				margin-bottom: 20px;
				> h3 {
					font-size: 21px;
					margin-bottom: 20px;
				}
			}
		}
		// s-1
		// #DAworks{
		// 	&_all:checked ~ .DAworks_list > li,
		// 	&_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
		// 	&_actWeb:checked ~ .DAworks_list > .actWeb,
		// 	&_spaWeb:checked ~ .DAworks_list > .spaWeb,
		// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{ width: 33.3333%; max-height: 300px; }
		// }
		// s-2
		// .scale{
		// 	&-enter-to, &-leave-from { width: 33.3333%; max-height: 300px; }
		// 	// s-2.5
		// 	&-enter, &-leave{
		// 		&-active{animation: scaleShow1024 5s;}
		// 	}
		// 	&-leave-active {animation-direction: reverse;}
		// }
	}
	@media screen and (min-width: 1280px) {
		// s-3
		.DAworks{
			padding: 15px 20px 40px;
			&__item.selected{
				padding:0 20px;
				margin-bottom:40px;
			}
		}
		// s-1
		// #DAworks{
		// 	&_all:checked ~ .DAworks_list > li, &_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
		// 	&_actWeb:checked ~ .DAworks_list > .actWeb, &_spaWeb:checked ~ .DAworks_list > .spaWeb,
		// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{margin-bottom:40px;}
		// }
		// s-2
		// .scale{
		// 	&-enter-to, &-leave-from {margin-bottom:40px;}
		// }
	}
	@media screen and (min-width: 1440px) {
		// s-3
		.DAworks__item.selected{margin-bottom:60px;}
		// s-1
		// #DAworks{
		// 	&_all:checked ~ .DAworks_list > li, &_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
		// 	&_actWeb:checked ~ .DAworks_list > .actWeb, &_spaWeb:checked ~ .DAworks_list > .spaWeb,
		// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{margin-bottom:60px;}
		// }	
		// s-2
		// .scale{
		// 	&-enter-to, &-leave-from {margin-bottom:60px;}
		// }
	}
	@media screen and (min-width: 1600px) {
		// s-3
		.DAworks__item.selected{width: 25%;}
		// s-1
		// #DAworks{
		// 	&_all:checked ~ .DAworks_list > li, &_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
		// 	&_actWeb:checked ~ .DAworks_list > .actWeb, &_spaWeb:checked ~ .DAworks_list > .spaWeb,
		// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{width: 25%;}
		// }
		// s-2
		// .scale{
		// 	&-enter-to, &-leave-from {width: 25%;}
		// }
	}
	@media screen and (min-width: 2560px) {
		.DAworks{
			&_list{
				max-width:$deskMaxWidth;
				margin:0 auto;
			}
			// s-3
			&__item.selected{width:16.666666%;}
		}
		// s-1
		// #DAworks{
		// 	&_all:checked ~ .DAworks_list > li, &_ofclWeb:checked ~ .DAworks_list > .ofclWeb,
		// 	&_actWeb:checked ~ .DAworks_list > .actWeb, &_spaWeb:checked ~ .DAworks_list > .spaWeb,
		// 	&_oldWorks:checked ~ .DAworks_list > .oldWorks{width: 16.666666%;}
		// }
		// s-2
		// .scale{
		// 	&-enter-to, &-leave-from {width:16.666666%;}
		// }
	}
</style>