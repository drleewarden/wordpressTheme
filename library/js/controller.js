'use strict';
americaTrip.controller('mainBodyControl', function ($scope, $http, cookies) {
  ////////////////////////////
  // initialise
  ////////////////////////////
  $scope.init = function () {
    console.log('controller');
    //cookies.checkCookies();
    //$scope.testData();
    $scope.custom = true;
    showMenu();
    //dragTarget();
    $scope.mainBodyControl();
    mouseDown();
    slider();
    $scope.flip();



  };
  /* $http ajax calls really belongs in a service,
     but I'll be using them inside the controller for this demo */


  /*$http.get('path/to/json').then(function(data) {
         $scope.languages = data;
         });*/
  //inputting json directly for this example
  $scope.languages = [{
    name: "English",
    value: 0
  }, {
    name: "Spanish",
    value: 1
  }, {
    name: "German",
    value: 3
  }, {
    name: "Russian",
    value: 2
  }, {
    name: "Korean",
    value: 1
  }];
  //   $scope.delete = function(){
  //        deleteItem($scope.this);
  //        console.log(this);
  //    }
  function showWebsites(data) {
    //        if (data.posts.tags[0].title){
    //
    //        }

    angular.forEach(data.posts, function (value, index) {
      //console.log("V" + value.posts.tags[0]);


    });
    // console.log(data.posts)
  }
  $scope.deleteItem = function (index) {
    $scope.posts.splice(index, 1);

  };
  $scope.save = function () {
    //  $http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
    //             $scope.msg = 'Data saved';
    //             });
    $scope.msg = 'Data sent: ' + JSON.stringify($scope.languages);

  };

  $scope.testData = function () {
    var testData = [{
      "firstName": "John",
      "lastName": "Doe"
    }, {
      "firstName": "Anna",
      "lastName": "Smith"
    }, {
      "firstName": "Peter",
      "lastName": "Jones"
    }]
    $scope.testData = testData;
  }

  $scope.toggleCustom = function () {

    $scope.custom = $scope.custom === false ? true : false;
  };

  function showMenu() {
    $('#secondary').hide();

    //    $('.navbar-collapse').paperfold({
    //          'toggle': $('#site-description'),
    //          'folds': 1
    //      });


  }
  // ************ Functions after repeater ************* //
  $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    console.log('done repeating');
    var w = $('.element-item').width();
    //$('.front, .back').width(w);
    $('.front, .back').each(function (index, item) {
      console.log(item);
    });
  });
  // ************ Random number generator ************* //
  $scope.getRandomSpan = function () {
    return Math.floor((Math.random() * 6) + 1);
  };
  // ************ HERO slider ************* //

  $scope.heroImg = function (post) {

    $('.back').click(function () {
      $(this).parents('.flipper').removeClass('flip-r');
    });
    $('.flipper .front').click(function () {
      $(this).parents('.flipper').addClass('flip-r');
    });
    //console.log($scope.posts[0].thumbnail_images.full.url);
    //$('img.header-img').attr('src', $scope.posts[0].thumbnail_images.full.url);

    $('#posts').click(function (event) {

      event.preventDefault();
      $('html, body').animate({
        scrollTop: ($(window).height() + $('.jumbotron').height() + 15)
      }, 'slow', 'swing');
    });
  };
  // get data

  $scope.mainBodyControl = function () {

    $http({
      method: 'GET',
      url: '?json=get_posts'
    }).
    success(function (data) {

      $scope.posts = data.posts;
      console.log(data.posts);
      $scope.heroImg(data.posts);

      setTimeout(function () {
        $scope.isotope();
        filter();
        showWebsites(data);

      }, 500);

    }).error(function () {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.isotope = function () {
    console.log('isotope');
    var $container = $('#isotope');

    //$(window).bind('load', function () {

    $container.isotope({
      // options

      itemSelector: '.element-item',
      masonry: {
        columnWidth: 100
      }

    });


    //});


  };

  function filter() {

    $('#posts-filter a').click(function (e) {
      //e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      // use filter function if value matches
      //filterValue = filterFns[filterValue] || filterValue;
      $('#isotope').isotope({
        filter: filterValue
      });

    });
    $('#isotopeSearch').bind('keyup', function () {
      isotopeSearch($scope, $http, $(this).val().toLowerCase());
    });
  }

  function filterValue() {
    $(this).attr('data-filter');
    return true;
  }

  function isotopeSearch($scope, $http, kwd) {
    // $('.idea').removeClass('match miss'); // get rid of any existing classes
    // $('#noMatches').hide(); // ensure this is always hidden when we start a new query

    if ((kwd != '') && (kwd.length >= 3)) { // min 2 chars to execute query:
      var xxx = '.' + kwd;

      $('#isotopeContainer').isotope('destroy');
      // searchTripIdeas($scope, $http, kwd);
      $('#isotope').isotope({
        filter: xxx
      });
    }
    else if (kwd === '') {
      var item = '.item';
      $('#isotopeContainer').isotope('destroy');
      $('#isotope').isotope({
        filter: item
      });
    }
  }

  $scope.blogClicked = function (title, id) {
    //cookies.checkCookies();
    cookies.cookieClick(title, id);

  };

  function dragTarget() {
    var length = $('.entry-content .gall'),
      img = $('.entry-content img'),
      total = 0;
    if ($(window).width() > 700) {
      $('.entry-content img').each(function () {
        var $width = $(this).width();
        $(this).parent().prepend('<div class="template">enlarge<div class="enlargeBtn"></div></div>');
        total += parseInt($(this).width(), 10);

      });
    }

    // change width of slider
    $(length).width(total + (img.length * 15));

    $('.entry-content a.image-anchor').click(function (e) {
      e.preventDefault();
    });
    // template slider hover
    $('.template').hover(function () {
      hoveElem($(this), 1);
      $(this).siblings('img').css({
        opacity: 0.4
      });

    }, function () {
      rempveElem($(this), 0.4);
      $(this).siblings('img').css({
        opacity: 1
      });

    }).click(function () {
      $('#mainpopup').remove();
      $('body').prepend('<div id="mainpopup"><img src="' + $(this).siblings('img').attr('src') + '"/></div>');
      $('#mainpopup').click(function () {
        $(this).remove();
      });

    });

    // image slider hover
    $(img).hover(function () {
      hoveElem($(this), 0.4);
      var wid = $(this).width();

      $(this).siblings('.template').css({
        opacity: 1,
        width: wid
      });
    }, function () {
      rempveElem($(this), '1');
      $(this).siblings('.template').css({
        opacity: 0
      });
    });

  }


  // hover img
  function hoveElem(elem, num) {
    $(elem).css({
      opacity: num
    });
  }

  function rempveElem(elem, num) {
    $(elem).css({
      opacity: num
    });
  }

  function slider() {
    var $imgGal = $('.entry-content .gall');
    $($imgGal).carouFredSel({
      responsive: true,

      scroll: {
        items: 1,
        duration: 9900,
        easing: 'swing'

      },
      pagination: '#gallery_list_controls',
      swipe: {
        onMouse: true,
        onTouch: true
      },
      items: {
        start: -1,
        visible: {
          min: 3,
          max: 3
        }
      }
    });
  }

  function mouseDown() {
    var innerX = 0;
    $('.entry-content .gall').swipe({

      swipeLeft: function () {
        //alert('next');
        $('.entry-content .gall').trigger('next');

      },

      swipeRight: function () {
        //alert('pre');
        $('.entry-content .gall').trigger('prev');

      },
      excludedElements: []
    });

  }

  $scope.flip = function () {

  }

  // end angular


});
