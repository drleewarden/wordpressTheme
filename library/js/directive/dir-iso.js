/**
 * Created by darryn on 10/06/2014.
 */

americaTrip.directive('dirIso', function (mainBodyControl) {
  return {
    restrict: 'AE',
    replace: 'true',
    //template: '<div id="isotope" ><div ng-repeat="post in posts" ng-class="{huge:$first}" class="seen {{post.tags[0].title}} id-{{post.$$hashKey}} {{post.title_plain}} item element-item col-xs-12 col-sm-6 col-md-6 col-lg-4 seen"><div class=" inner" ng-mouseover="postHover()"><div class="post-holder" href="{{post.url}}" ><a href="{{post.url}}" ng-click="blogClicked(post.title_plain, "id-"+post.$$hashKey)" class="id-{{post.$$hashKey}} btn btn-default btn-lg" >{{post.title_plain}}</a><div class="post-img" style="background-color: coral"><img src="{{ post.thumbnail_images.medium.url }}"/></div></div></div></div></div>'
    templateUrl: '/wp-content/themes/arcade-basic/library/tpl/iso.html'


  };
  console.log(post - title);
}).directive('myRepeatDirective', function () {
  return function (scope, element, attrs) {
    //angular.element(element).css('color', 'blue');
    if (scope.$last) {
      var w = $('.element-item').width();
      $('.front, .back').width(w);

      $('.back').click(function () {
        $(this).parents('.flipper').removeClass('flip-r');
      });
      $('.flipper .front').click(function () {
        $(this).parents('.flipper').addClass('flip-r');
      });
    }
  };
})
americaTrip.directive('myMainDirective', function () {
  return function (scope, element, attrs) {
    // angular.element(element).css('border', '5px solid red');
  };
});
