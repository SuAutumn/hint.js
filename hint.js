var Hint = {
  template: '<div class=\'msg-box\'><div class=\'msg-box-container\'></div></div>',

  hide: function (box) {
    box.animate({
      'top': 0,
      'opacity': 0
    }, 300, function () {
      box.remove()
    })
  },

  warning: function (msg, time) {
    var box = window.$(this.template)
    var self = this
    box.find('.msg-box-container').append(msg)
    box.css('left', function () {
      return (window.$(window).width() - 200) * 0.5
    })
    window.$('body').append(box)
    box.animate({
      'top': '20px',
      'opacity': 1
    }, 300)

    setTimeout(function () {
      self.hide(box)
    }, time * 1000 || 3000)
  }
}
module.exports = Hint
