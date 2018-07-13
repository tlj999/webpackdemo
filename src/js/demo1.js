var obj = require('./tool.js');
var demo1 = {
  ischange: false,
  init: function() {
    this.bindEvent();
  },
  bindEvent: function() {
    var demo1 = obj.getDom('demo1')
    demo1.onclick = this.changeStyle;
  },
  changeStyle: function() {
    obj.toggleClass(this, 'bg-p')
  }
}
module.exports = demo1;