'use strict';
var americaTrip = angular.module('americaTrip', [])
  .filter('htmlToPlaintext', function () {
    return function (text) {
      return String(text).replace(/<[^>]+>/gm, '');
    };


  });
americaTrip.service('cookies', function () {
  console.log('services');
  //    $.cookie.json = true;
  //    var blogVisit = $.cookie('blogVisits'),
  //        found = false;

  this.checkCookies = function () {
    if ($('body').hasClass('home')) {
      $.cookie.json = true;
      var blogVisit = $.cookie('blogVisits');

      // var last = $.cookie('blogVisits').length -1;
      if (blogVisit === undefined) {
        //blogVisit = new Array();
        blogVisit = [];
        alert('Welcome to your first visit to Amy and Darryns blog');
      }
      else {
        var last = blogVisit.length - 1,
          i = 0;

        //console.log($.cookie('blogVisits')[i].title);
        //alert('hello again, the last post you saw was ' + blogVisit[last].title);
        $('.last-post').html('hello again, the last post you saw was ' + blogVisit[last].title);

        for (i = blogVisit.length - 1; i >= 0; i--) {
          console.log($.cookie('blogVisits')[i].title);
          $("." + $.cookie('blogVisits')[i].id + ".seen").removeClass('seen');
        }
        //          $('.item').each(function (index) {
        //            if ($(this).hasClass(blogVisit[last].id)) {
        //              $(this).addClass('seen');
        //            }
        //          });



      }
      //console.log($.cookie('blogVisits')[last].title);
      return blogVisit;
    }


  };

  this.cookieClick = function (titles, ids) {
    $.cookie.json = true;
    var blogVisit = $.cookie('blogVisits'),
      found = false;
    if (blogVisit === undefined) {
      blogVisit = [];

    }

    for (var i = blogVisit.length - 1; i >= 0; i--) {
      console.log($.cookie('blogVisits')[i].title);
      if (blogVisit[i].title === titles && blogVisit[i].id === ids) {
        blogVisit.splice(i, 1);
        found = true;
        break;
      }

    }
    //alert(blogVisit);
    if (!found) {
      blogVisit.push({
        title: titles,
        id: ids
      });
    }
    $.cookie('blogVisits', blogVisit, {
      expires: 111,
      path: '/'
    });
  };
});
