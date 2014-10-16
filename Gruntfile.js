module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
	qunit: {
	options: {
		timeout: 15000,
    '--ssl-protocol': 'tlsv1'
	  },
      urls: './OpaMatchers.html'
    },
  
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Default task(s).
  grunt.registerTask('default', ['qunit']);
  
};