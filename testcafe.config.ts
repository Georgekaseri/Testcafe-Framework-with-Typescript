export default {
    src: './src/tests/**/*.ts', // Path to test files
    browsers: ['chrome'], // Browser to run the tests
    screenshots: {
      path: './screenshots',
      takeOnFails: true,
    },
    videoPath: './videos', // Video recording path
    concurrency: 2, // Number of concurrent instances
  };
  