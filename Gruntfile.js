module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      html: {
        files: ['main.jade'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['less/main.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    },

    less: {
      development: {
        options: {
          compress: false,
          optimization: 2
        },
        files: {
          'public/css/main.css': 'less/main.less'
        }
      }
    },

    jade: {
      development: {
        options: {
          pretty: true
        },
        files: {
          'public/main.html': 'main.jade'
        }
      }
    },

    jshint: {
      grunt: {
        src: ['Gruntfile.js']
      },
      js: 'public/js/*.js'
    },

    concurrent: {
      tasks: ['watch', 'jade', 'less'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less'); 
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.option('force', false);

  grunt.registerTask('default', ['concurrent']);

};