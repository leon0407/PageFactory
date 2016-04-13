module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      html: {
        files: ['jade/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['less/*.less'],
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

    concurrent: {
      tasks: ['watch', 'jade', 'less'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  ['grunt-contrib-watch','grunt-contrib-jade','grunt-contrib-less','grunt-concurrent'].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['concurrent']);

};
