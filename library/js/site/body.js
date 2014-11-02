/**
 * @class Site.features.Accordion
 * @singleton
 *
 * @requires FCV
 */

define('body', ['jquery'], function ($) {

  window.cat = function (url) {
    alert('sad')
  };

  return {
    test: function () {
      alert('test');
      var w = $('.element-item').width();
      $('.front, .back').width(w);

      $('.back').click(function () {
        $(this).parents('.flipper').removeClass('flip-r');
      });
      $('.flipper .front').click(function () {
        $(this).parents('.flipper').addClass('flip-r');
      });
      return true

    }



    //        alert('sdfs');
    //        $('p').hide();


    /**
     * Gets executed automatically, because this is a singleton.
     */

  };

});
