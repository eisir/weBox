// pages/verify/verify.js
Page({
  data:{
    contList:[{
      egSrc:'../../images/backcard.jpg',
      egBig:'../../images/bigcard_2.jpg',
      text:"身份证头像照",
      img:"",
      layerText:[
        "身份证头像照拍摄示例图",
        "温馨提示：",
        "1.拍摄时将身份证正面置于拍摄界面正中。",
        "2.必须为本人身份证照片，真实有效，且内容清晰可辨。"
      ]
    },
    {
      egSrc:'../../images/facecard.jpg',
      egBig:'../../images/bigcard_1.jpg',
      text:"身份证国徽照",
      img:"",
      layerText:[
        "身份证国徽照拍摄示例图",
        "温馨提示：",
        "1.拍摄时将身份证正面置于拍摄界面正中。",
        "2.必须为本人身份证照片，真实有效，且内容清晰可辨。"
      ]
    },
    {
      egSrc:'../../images/catchcard.jpg',
      egBig:'../../images/bigcard_3.jpg',
      text:"手持身份证照",
      img:"",
      layerText:[
        "申请人手持身份证合影拍摄示例图",
        "温馨提示：",
        "1.拍摄时保证环境光线充足，背景色为纯色。",
        "2.被拍摄者五官清晰，无遮拦。",
        "3.身份证资料清晰可辨"
      ]
    }],
    layerOptions:{
      show:false,
      imgSrc:"",
      id:"",
      texts:[]
    }
  },
  takePhoto:function(e){
    var index=e.currentTarget.dataset.index;
    var _this=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.data.contList[index].img=tempFilePaths[0]
        console.log(_this.data.contList)
        _this.setData({
          contList : _this.data.contList
        })
      }
    })
  },
  showEg:function(e){
    this.data.layerOptions.show=true
    this.data.layerOptions.id=(new Date()).getTime()
    this.data.layerOptions.imgSrc=e.currentTarget.dataset.egbig
    this.data.layerOptions.texts=this.data.contList[e.currentTarget.dataset.index].layerText
    this.setData({
      layerOptions : this.data.layerOptions
    })
  },
  layerEvent:function(e){
    if(e.target.dataset.id==this.data.layerOptions.id){
      this.data.layerOptions.show=false;
    }
    this.setData({
      layerOptions : this.data.layerOptions
    })
    console.log(e);
  },
  next: function(){
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})