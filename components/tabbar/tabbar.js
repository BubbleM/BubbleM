// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checkIndex: { // 默认选中Tab标签页
      type: Number,
      value: 2,
      observer: function(newVal, oldVal, changedPath){

      }
    },
    tabList: Object // Tab底部导航初始化渲染数据
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckTab: function(e){
      let self = this,
        checkIndex = e.currentTarget.dataset.index; // 需要在页面上使用data-index对数据进行显示绑定
      self.setData({
        checkIndex: checkIndex
      });
      self.triggerEvent("onCheckTap", { 'wrapIndex': checkIndex}); 
      /**
       * 注意： triggerEvent的第一个参数 为onCheckTap 则父组件传递需写成 bindonCheckTap='onCheckTab'
       * triggerEvent的第一个参数 为bindonCheckTap 则父组件传递需写成 bind:bindonCheckTap='onCheckTab'
      */
    }
  }
})
