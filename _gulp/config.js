// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

module.exports = {

    base: '/',

    scss: {
        src: module.exports.base + 'scss/**/*.scss',
        settings: {
            outputStyle: 'compressed'
        },
        cssDest: module.exports.base + 'css/',
        jekyllCssDes: module.exports.base + '_site/css/',
        prefix: [                          // Autoprefixer supported browsers
            'last 2 version',
            '> 1%',
            'ie 8',
            'ie 9',
            'ios 6',
            'android 4'
        ]
    },

    lint: {
        src: module.exports.base + 'scss/**/*.scss',
        settings: {
            'config': 'lint.yml'
        }
    },

    js: {
        src : [  // source js file
            module.exports.base + 'js/theme.js',
            module.exports.base + 'js/_components/*.js',
            module.exports.base + 'js/loader.js'

        ],
        concatFilename: module.exports.base + 'theme.concat.js', // result filename
        jekyllJsDest: module.exports.base + '_site/js/',
        jsDest: module.exports.base + 'js/'
    },

    jekyll: {
        buildMessage: '<span style="color: grey">Building</span> jekyll'
    },

    browsersync: {
        server: {
            baseDir: './_site',
            reloadDelay: 2000,
            debounce: 200,
            notify: true,
            ghostMode: {
                clicks: true,
                location: true,
                forms: true,
                scroll: false
            }
        }
    },

    watch: {
        jekyllSource: [    // Files that trigger a Jekyll rebuild
            'img/*.png',
            'img/*.jpg',
            'img/*.svg',
            '_includes/**/*.html',
            '_layouts/*.html',
            '_posts/*.md',
            '_data/*.yml',
            '*.html'
        ]
    },

    compressjs: {
        src: module.exports.base + 'js/*.js',
        dest: module.exports.base + '_site/js/'
    },

    svg2png: {
        src: module.exports.base + "./img/svg/*.svg",
        settings : {
            scaling : 2, // The scaling factor (optional; default=1.0)
            verbose: false // Logs progress information (optional; default=false)
        },
        dest: module.exports.base + "./img/png"
    }

};
