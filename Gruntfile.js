module.exports = function (grunt) {

  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    cssc: {
      build: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true
        },
        files: {
          'css/base.css': 'library/css/sass/base.scss'
        }
      }
    },

    cssmin: {
      build: {
        src: 'library/css/sass/base.css',
        dest: 'base.css'
      }
    },
    compass: {
      options: {
        sassDir: 'library/css/sass/sass',
        cssDir: 'css'
      }
    },
    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc'
        //                reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'library/js/{,*/}*.js',
        '!library/js/vendor/{,*/}*.js',
        '!library/js/theme.js',
        '!library/js/admin/{,*/}*.js'
      ]
    },

    sass: {
      dist: {
        files: {
          'css/base.css': 'library/css/sass/base.scss'
        }
      }
    },
    watch: {

      js: {
        files: ['Gruntfile.js', 'library/js/**/*.js'],
        tasks: ['jsbeautifier', 'jshint:all'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'library/css/sass/**/*.scss',
        tasks: ['sass']
      }
    },
    jsbeautifier: {
      files: [
        'Gruntfile.js',
        'library/js/**/*.js',
        '!library/js/vendor/**/*.js'
      ],
      options: {
        js: {
          braceStyle: 'end-expand',
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: ' ',
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: true,
          keepArrayIndentation: false,
          keepFunctionIndentation: true,
          maxPreserveNewlines: 4,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0
        }
      }
    },
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          // Force tags to have a closing pair
          'tagname-lowercase': true,
          // Force tags to be lowercase
          'attr-lowercase': true,
          // Force attribute names to be lowercase e.g. <div id='header'> is invalid
          'attr-value-double-quotes': true,
          // Force attributes to have double quotes rather than single
          'doctype-first': true,
          // Force the DOCTYPE declaration to come first in the document
          'spec-char-escape': true,
          // Force special characters to be escaped
          'id-unique': true,
          // Prevent using the same ID multiple times in a document
          'head-script-disabled': true,
          // Prevent script tags being loaded in the  for performance reasons
          'style-disabled': true
          // Prevent style tags. CSS should be loaded through 
        },
        src: ['index.html']
      }
    },
    uglify: {
      build: {
        files: {
          'build/js/base.min.js': ['assets/js/base.js']
        }
      }
    }

  });
  grunt.registerTask('js', [
    'jsbeautifier',
    'jshint'
  ]);
  grunt.registerTask('buildcss', ['sass', 'cssc', 'cssmin']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', [

  ]);

};
