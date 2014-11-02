requirejs.config({

  paths: {
    // jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
    jquery: '../bower_components/jquery/dist/jquery.js',

    jQ: 'vendor/jquery-2.1.0.min',
    //        'angular': 'vendor/angular.min',
    //        bootstrap: 'vendor/bootstrap.min',
    //        iso: 'vendor/isotope.pkgd.min',
    //        cookie:'vendor/jquery.cookie',
    //        modn:'vendor/modernizr.custom.71147',
    //        touch:'vendor/jquery.touchSwipe.min',
    //        carousel:'vendor/carouFredSel',
    //        services:'services/services',
    //        dircookie:'directive/dir-cookie',
    //        diriso:'directive/dir-iso',
    //        dirinput:'directive/dir-inputfields',
    controller: 'controller',
    body: 'site/body'



    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/angular.min.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/bootstrap.min.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/jquery.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/isotope.pkgd.min.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/jquery.cookie.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/modernizr.custom.71147.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/jquery.paperfold.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/jquery.touchSwipe.min.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/vendor/carouFredSel.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/services/services.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/directive/dir-cookie.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/directive/dir-iso.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/directive/dir-inputfields.js"></script>
    //    <script src="<?php echo get_template_directory_uri(); ?>/library/js/controller.js"></script>

  },

  // Dependencies for scripts that are not wrapped as AMD modules.
  shim: {
    'jquery': {
      exports: '$'
    }
  },

  // define how RequireJS Optimizer is supposed to bundle files
  modules: [{
    name: 'common'
  }, {
    name: 'home',
    exclude: ['common']
  }]
});



require([
  'body',
  'jQ',
  //    'bootstrap',
  //    'angular',
  //    'iso',
  //    'cookie',
  //    'modn',
  //    'touch',
  //    'carousel',
  //    'services',
  //    'dircookie',
  //    'diriso',
  //    'dirinput',
  'controller'

], function (body) {
  body.test();
});
