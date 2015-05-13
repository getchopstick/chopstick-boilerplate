// ---
// CONFIG FILE
// Define your tasks & variables here
// ---

module.exports = {

  scss: {
    screen : 'scss/screen.scss',
    src : 'scss/**/*.scss',
    settings : {
        bundleExec: true,
        sourcemap: true,
        style: 'compact'
    },
    cssDest : 'css/',
    jekyllCssDes : '_site/css/',
    prefix : [                          // Autoprefixer supported browsers
        'last 2 version',
        '> 1%',
        'ie 8',
        'ie 9',
        'ios 6',
        'android 4'
    ]
  },


  js : {
    src : [  // source js file
        'js/theme.js',
        'js/_components/*.js',
        'js/loader.js'

    ],
    concatFilename : 'theme.concat.js', // result filename
    jekyllJsDest : '_site/js/',
    jsDest : 'js/'
  },

  jekyll : {
    buildMessage: '<span style="color: grey">Building</span> jekyll'
  },

  browsersync : {
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

  watch : {
    jekyllSource : [    // Files that trigger a Jekyll rebuild
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

  compressjs : {
    src : 'js/*.js',
    dest : '_site/js/'
  },

  svg2png : {
    src: "./img/svg/*.svg",
    settings : {
        scaling : 2, // The scaling factor (optional; default=1.0)
        verbose: false // Logs progress information (optional; default=false)
    },
    dest : "./img/png"
  }

};
