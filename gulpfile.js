const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const port = process.env.PORT || 3000; // Use the port provided by Azure Web App or default to 3000

// Define a task to start the BrowserSync server
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    port: port,
    open: false, // Disable opening a browser window
  });
});

// Watch files and reload the browser on changes
gulp.task('watch', gulp.series('browser-sync', () => {
  gulp.watch(['*.html', 'css/*.css', 'js/*.js']).on('change', browserSync.reload);
}));

// Define the default task that runs the watch task
gulp.task('default', gulp.series('watch'));
