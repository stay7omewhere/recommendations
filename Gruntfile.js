module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true,
        },
      },
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
    },

    aws: grunt.file.readJSON('aws-keys.json'),

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'us-west-1',
      },
      deploy: {
        options: {
          bucket: 'deployed-service',
          compressionRename: 'swap',
        },
        files: [
          {
            expand: true, src: ['public/main.js.br'], dest: '/', action: 'upload',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('default', ['aws_s3']);
};
