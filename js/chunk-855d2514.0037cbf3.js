(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-855d2514"],{"0588":function(t,a,e){},"221a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"upIcons"},[s("div",{staticClass:"iconMain"},[s("van-row",{staticClass:"iconAll",attrs:{gutter:"20"}},[s("van-col",{attrs:{span:"12"}},[s("img",{attrs:{src:e("f365"),alt:""}})]),s("van-col",{attrs:{span:"12"}},[s("img",{attrs:{src:e("adc0"),alt:""}})]),s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"info"},[t._v(" 该头像将用于工地考勤，请确保上传的是您自己的照片，且人脸大小占整张照片1/3以上 ")])])],1)],1),s("div",{staticClass:"upBtns"},[s("van-uploader",{staticStyle:{width:"100%"},attrs:{"before-read":t.beforeRead,"after-read":t.afterRead}},[s("van-button",{attrs:{type:"primary",color:"#48BED0",block:"",round:""}},[t._v("点击上传照片")])],1)],1)])},n=[],i={data:function(){return{uploadImage:{imgByte:"",imgType:""}}},methods:{beforeRead:function(t){return"image/jpeg"!=t.type&&"image/png"!=t.type&&"image/jpg"!=t.type?(this.$toast("请上传 jpg,png 格式图片"),!1):(this.uploadImage.imgType=t.type,!0)},afterRead:function(t){var a=this;this.uploadImage.imgByte=t.content,this.$toast.loading({message:"上传中...",duration:0}),this.$http.jsb.uploadImage(this.uploadImage).then((function(t){200==t.code&&(a.$toast.clear(),a.$toast.success("上传成功\n等待系统审核"))}))}}},o=i,c=(e("424b"),e("2877")),r=Object(c["a"])(o,s,n,!1,null,"1f5d546e",null);a["default"]=r.exports},"424b":function(t,a,e){"use strict";e("0588")},adc0:function(t,a,e){t.exports=e.p+"img/icon2.b59df27e.png"},f365:function(t,a,e){t.exports=e.p+"img/icon1.423cba3e.png"}}]);
//# sourceMappingURL=chunk-855d2514.0037cbf3.js.map