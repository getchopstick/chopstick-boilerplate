Chopstick Boilerplate
=====================

By [these people](https://github.com/getchopstick/chopstick-boilerplate/graphs/contributors)

[Chopstick Boilerplate](https://github.com/getchopstick/chopstick-boilerplate) creates a structure and gives you the tools that allow you to easily design bespoke web projects.

Chopstick Boilerplate makes use of the [Chopstick `SCSS` framework](https://github.com/getchopstick/chopstick). It adds tools like [Jekyll](http://jekyllrb.com/) and [Gulp](http://gulpjs.com/) to simplify designing and building in the browser. The boilerplate can be used as a **styleguide**, to build **static websites** or to speed up making **HTML prototypes**.

## Need help?

- Ask your question on twitter: [@GetChopstick](https://twitter.com/GetChopstick)
- Join the [Slack channel](https://getchopstick.herokuapp.com/)

## Installation

### Requirements

1. [Ruby](https://www.ruby-lang.org) and [rubygems](https://rubygems.org)
2. [Node](http://nodejs.org) and [npm](https://npmjs.org)

### Automated Installation

Run the following command from the project root:

`sh install.sh`

This will check if package managers are installed and download required packages for you. If you prefer to install manually, please see [manual installation](https://github.com/getchopstick/chopstick-boilerplate/wiki/Installation#manual-installation).

### Use

Run the following command to load a browsersync server and watch your your files for changes:

    gulp watch

[More gulp commands are available](https://github.com/getchopstick/chopstick-boilerplate/wiki/Gulp-Commands)

## SCSS structure.

Project specific code should be written in the components layer. The Chopstick SCSS is maintained in separate repositories which are loaded with `npm`. We believe these partials should be easy to update and configurable without writing new code.

[Read more about partials](https://github.com/getchopstick/chopstick-boilerplate/wiki/SCSS-Partials)

## Browser support

Chopstick aims to support all modern browsers. This includes latest versions of Chrome, Firefox and Safari and the latest mobile browsers on Android, iPhone and Windows Phone. Internet explorer is currently supported starting from IE10 and up.

## Why we make Chopstick framework

- Maintain sensible defaults
- Enforce a global coding style
- Create a scalable system for both small and big web projects

## Contributions

You are free to contribute to Chopstick via GitHub Pull Requests. We have a couple of simple guidelines we try to follow, of which most are taken from the [CSS Tricks Sass Style Guide](http://css-tricks.com/sass-style-guide). Please refer to the [CONTRIBUTING.md](https://github.com/getchopstick/chopstick-boilerplate/blob/master/CONTRIBUTING.md) for more information
