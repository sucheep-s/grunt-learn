module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		html2js: {
		    options: {
		    	base: 'app',
		    	module: 'myApp.templates',
		    	singleModule : true,
		    	useStrict : true,
		    	  htmlmin: {
				    collapseBooleanAttributes: true,
				    collapseWhitespace: true,
				    removeAttributeQuotes: true,
				    removeComments: true,
				    removeEmptyAttributes: true,
				    removeRedundantAttributes: true,
				    removeScriptTypeAttributes: true,
				    removeStyleLinkTypeAttributes: true
				  }
		    },
		    main: {
		    	src : ['app/templates/*.html'],
		    	dest : 'tmp/template.js'
		    }			
		},

		concat: {
			main: {
				src : [
					'app/*.js',
					'app/services/*.js',
					'app/controllers/*.js',
					'tmp/*.js'
				],
				dest : 'tmp/app.js'
			}
		},
		uglify: {
			options : {
				mangle : false
			},
			main: {
				files: {
					'assets/js/app.js' : ['tmp/app.js']
				}
			}
		},

		watch: {
		    files: [
					'app/*.js',
					'app/services/*.js',
					'app/controllers/*.js',
					'app/templates/*.html'
				],
		    tasks: ['html2js', 'concat', 'uglify']		
		}

	});

	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['html2js', 'concat', 'uglify']);

};