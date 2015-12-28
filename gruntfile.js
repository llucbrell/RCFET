module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint:{
        all: ['gruntfile.js', 'index.js', './spec/test.spec.js']
    },

    uglify:{
        dist:{
            src: ['index.js', 'gruntfile.js'],
           dest: './production/javascript.min.js'
        }
    },

      shell:{
    multiple:{
      command:[
        'jasmine'

      ].join('&&')
    }
  }

  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['jshint', 'shell']);
  grunt.registerTask('build', ['jshint','uglify']);
 
};