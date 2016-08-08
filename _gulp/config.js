// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

var path = './';

module.exports = {

    scss: {
        src: path + 'scss/**/*.scss',
        settings: {
            outputStyle: 'compressed'
        },
        cssDest: path + 'css/',
        jekyllCssDes: path + '_site/css/',
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
        src: path + 'scss/**/*.scss',
        settings: {
            'config': 'lint.yml'
        }
    },

    js: {
        src : [  // source js file
          path + 'js/theme.js',
          path + 'js/_components/*.js',
          path + 'js/loader.js'

        ],
        concatFilename: 'theme.concat.js', // result filename
        jekyllJsDest: path + '_site/js/',
        jsDest: path + 'js/'
    },

    jekyll: {
        buildMessage: '<span style="color: grey">Building</span> jekyll'
    },

    browsersync: {
        server: {
            baseDir: path + '_site',
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
            path + 'img/**/*.png',
            path + 'img/**/*.jpg',
            path + 'img/**/*.svg',
            path + '_posts/*.md',
            path + '_data/*.yml',
            path + '**/*.html',
            path + '_config.yml',
            '!' + path + '_site/**/*.*'
        ]
    },

    compressjs: {
        src: path + 'js/*.js',
        dest: path + '_site/js/'
    },

    svg2png: {
        src: path + "img/svg/*.svg",
        settings : {
            scaling : 2, // The scaling factor (optional; default=1.0)
            verbose: false // Logs progress information (optional; default=false)
        },
        dest: path + "img/png"
    }

};
