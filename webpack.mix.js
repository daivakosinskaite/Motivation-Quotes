let mix = require('laravel-mix');

mix.react('src/index.js', 'public/js')
   .sass('src/styles/App.scss', 'public/css')
   .setPublicPath('public')
   .browserSync({
     proxy: 'http://localhost:3000',
     files: [
       'public/js/*.js',
       'public/css/*.css',
       'src/**/*.(js|jsx|css|scss)'
     ]
   });
