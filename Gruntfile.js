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
      },
      less:{
      	files: ['less/*.less']
      }
    },

    less: {
      development: {
        options: {
          compress: false,
          optimization: 2
        },
        files: {
          'css/main.css': 'less/main.less'
        }
      }
    },

    jade: {
      development: {
        options: {
          pretty: true
        },
        files: {
          'main.html': 'main.jade'
        }
      }
    },    

    concurrent: {
      tasks: ['watch', 'jade', 'less'],
      options: {
        logConcurrentOutput: true
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')  
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-concurrent')


  grunt.option('force', true)

  grunt.registerTask('default', ['concurrent'])

}