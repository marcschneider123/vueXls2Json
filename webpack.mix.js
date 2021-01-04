const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'js')
    .extract()

mix.sass('resources/sass/app.scss', 'css')
    .options({
        processCssUrls: false,
    });

if (mix.config.production) {
    mix.version();
} else {
    mix.sourceMaps(false, 'source-map');
}

mix.browserSync({
    proxy: process.env.MIX_BS_PROXY,
    ghostmode: false,
    open: false
});
