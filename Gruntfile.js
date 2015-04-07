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

    clean: {
      vendorSass: ['app/sass/vendor/*']
    },

    copy: {
      bootstrap: { expand: true, cwd: 'bower_components/twbs-bootstrap-sass/assets/stylesheets', src: '**/*', dest: 'app/sass/vendor/bootstrap'}
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
  grunt.registerTask('install', ['clean', 'copy']);
  grunt.registerTask('default', ['compass', 'html2js', 'express', 'watch', 'express-keepalive']);
};
