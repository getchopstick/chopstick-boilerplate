Chopstick Boilerplate
=====================

By [these people](https://github.com/getchopstick/chopstick-boilerplate/graphs/contributors)

[Chopstick Boilerplate](https://github.com/getchopstick/chopstick-boilerplate) creates a structure and gives you the tools that allow you to easily design bespoke web projects.

Chopstick Boilerplate makes use of the [Chopstick `SCSS` framework](https://github.com/getchopstick/chopstick). It adds tools like [Jekyll](http://jekyllrb.com/) and [Gulp](http://gulpjs.com/) to simplify designing and building in the browser. The boilerplate can be used as a **styleguide**, to build **static websites** or to speed up making **HTML prototypes**.

## Need help?

- Ask your question on twitter: [@GetChopstick](https://twitter.com/GetChopstick)
- Join the [Slack channel](https://getchopstick.herokuapp.com/)

## Setup and usage

### Requirements

1. [Ruby](https://www.ruby-lang.org) and [rubygems](https://rubygems.org)
2. [Node](http://nodejs.org) and [npm](https://npmjs.org)

### Install

Run the following command from the project root:

`sh install.sh`

This will check if package managers are installed and download required packages for you. If you prefer to install manually, please see [manual installation](https://github.com/getchopstick/chopstick-boilerplate/wiki/Installation#manual-installation).

### Use

Run the following command to load a browsersync server and watch your your files for changes:

    gulp watch

[More gulp commands are available](https://github.com/getchopstick/chopstick-boilerplate/wiki/Gulp-Commands)

## SCSS structure.

Project specific code should be written in the components layer. The Chopstick SCSS is maintained in separate repositories which are loaded with [Bower](http://bower.io/). We believe these partials should be easy to update and configurable without writing new code. 

## Partials

We use the following partials according to the [ITCss](http://itcss.io/) structure.

1. [chopstick-settings](https://github.com/getchopstick/chopstick-settings): contains global variables and config switches to get you started. These can be overwritten in your project. Simply duplicate the variables you want to change or replace this file.
2. [chopstick-tools](https://github.com/getchopstick/chopstick-tools):  contains mixins and functions.
3. [chopstick-generic](https://github.com/getchopstick/chopstick-generic): contains ground-zero styles (Normalize.css, resets, box-sizing)
4. [chopstick-elements](https://github.com/getchopstick/chopstick-elements): contains unclassed HTML elements (type selectors)
5. [chopstick-objects](https://github.com/getchopstick/chopstick-objects): contains cosmetic-free design patterns
6. chopstick-components: contains designed components, chunks of UI (these are maintained in the boilerplate as they are specific to this)
6. [chopstick-utilities](https://github.com/getchopstick/chopstick-utilities): contains helper classes

### Changing something in the partials

We try to keep the code as modular as possible. So you can comment out what you don’t use.

If you want to change something within the external partials you have 3 options:

1. Change the settings and default appearance by overriding the variables in your project.
2. Create a pull request on the source code in the correct repository.
3. Copy the original file in you own project. This means you will have to do manual updates in the future.

## Browser support

Chopstick aims to support all modern browsers. This includes latest versions of Chrome, Firefox and Safari and the latest mobile browsers on Android, iPhone and Windows Phone. Internet explorer is currently supported starting from IE10 and up.

## Why we make Chopstick framework

- Maintain sensible defaults
- Enforce a global coding style
- Create a scalable system for both small and big web projects

## Contributions

You are free to contribute to Chopstick via GitHub Pull Requests. We have a couple of simple guidelines we try to follow, of which most are taken from the [CSS Tricks Sass Style Guide](http://css-tricks.com/sass-style-guide). Please refer to the [CONTRIBUTING.md](https://github.com/getchopstick/chopstick-boilerplate/blob/master/CONTRIBUTING.md) for more information
