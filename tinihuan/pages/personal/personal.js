// pages/personal/personal.js
var cityData={"citys":[{"citycn":"东城区","cityid":"110101"},{"citycn":"西城区","cityid":"110102"},{"citycn":"崇文区","cityid":"110103"},{"citycn":"宣武区","cityid":"110104"},{"citycn":"朝阳区","cityid":"110105"},{"citycn":"丰台区","cityid":"110106"},{"citycn":"石景山区","cityid":"110107"},{"citycn":"海淀区","cityid":"110108"},{"citycn":"门头沟区","cityid":"110109"},{"citycn":"房山区","cityid":"110111"},{"citycn":"通州区","cityid":"110112"},{"citycn":"顺义区","cityid":"110113"},{"citycn":"昌平区","cityid":"110114"},{"citycn":"大兴区","cityid":"110115"},{"citycn":"怀柔区","cityid":"110116"},{"citycn":"平谷区","cityid":"110117"},{"citycn":"密云县","cityid":"110228"},{"citycn":"延庆县","cityid":"110229"}]}
var city=cityData.citys.map((n)=> n.citycn);
Page({
  data:{
    citys:city,
    pickerIndex: -1,
    relatives:{
      index: -1,
      arr:[
        "父母",
        "夫妻",
        "子女",
        "兄弟姐妹",
        "其他"
      ]
    }
  },
  bindPickerChange: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pickerIndex: e.detail.value
    })
  },
  next: function(){
    wx.navigateTo({
      url: '../bank/bank'
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