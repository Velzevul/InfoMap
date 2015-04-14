module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: ["app/sass"],
          cssDir: "app/css",
          imagesDir: "app/images",
          javascriptsDir: "app/scripts"
        }
      }
    },

    express: {
      server: {
        options: {
          bases: ["app", "bower_components"],
          livereload: true
        }
      }
    },

    html2js: {
      options: {
        base: 'app/scripts/',
        module: 'app-templates'
      },
      templates: {
        src: ['app/scripts/templates/**/*.html'],
        dest: 'app/scripts/templates.js'
      }
    },

    concat: {
      dependencies: {
        src: ['bower_components/jquery/dist/jquery.js',
              'bower_components/angular/angular.js',
              'bower_components/angular-route/angular-route.js',
              'bower_components/d3/d3.js',
              'bower_components/seedrandom/seedrandom.js',
              'app/scripts/shuffle.js'],
        dest: 'dist/scripts/dependencies.concat.js'
      },
      app: {
        src: ['app/scripts/app.js',
              'app/scripts/templates.js',
              'app/scripts/*Service.js',
              'app/scripts/*Controller.js',
              'app/scripts/*Directive.js'],
        dest: 'dist/scripts/app.concat.js'
      },
      data: {
        src: [
          'app/data/skeleton.js',
          'app/data/skeleton2.js',
          'app/data/data-train.js',
          'app/data/mask-3dmax.js',
          'app/data/mask-maya.js'
        ],
        dest: 'dist/scripts/data.concat.js'
      }
    },

    clean: {
      dist: ['dist/*']
    },

    copy: {
      modernizr: { expand: true, cwd: 'bower_components/', src: 'modernizr/modernizr.js', dest: 'dist/scripts/', flatten: true },
      css: { expand: true, src: 'app/css/*.css', dest: 'dist/css/', flatten: true }
    },

    processhtml: {
      dist: {
        src: 'app/index.html',
        dest: 'dist/index.html'
      }
    },

    watch: {
      css: {
        files: ['app/sass/**/*.scss'],
        tasks: ['compass']
      },
      templates: {
        files: ['app/scripts/templates/**/*.html'],
        tasks: ['html2js']
      },
      livereload: {
        files: ['app/*.html', 'app/css/*.css', 'app/scripts/**/*.js'],
        options: {
          livereload: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['compass', 'html2js', 'express', 'watch', 'express-keepalive']);
  grunt.registerTask('dist',    ['compass', 'html2js', 'clean:dist', 'concat', 'copy', 'processhtml:dist']);
};
