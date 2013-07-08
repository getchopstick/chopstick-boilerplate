Chopstick
=========

Chopstick is a mobile-first responsive Design Framework, created and maintaned by [Wijs](http://wijs.be) in Ghent, Belgium.

## Install

Make sure you [install compass](http://compass-style.org/install). Then simply use `compass watch` from a terminal and start making changes. Optionally, you can use [CodeKit](http://incident57.com/codekit/).

## Use

Using Chopstick is easy and light-weight. We try to keep the code as modular as possible. Simply put, you can look at it this way:

    Shared Library + Settings = Theme

The default theme uses settings from the settings file + components from the shared library. You can remove the entire theme and just use some components from the shared library, as you see fit. We don’t like too much default generated code and neither should you.

### Folder Structure

The SCSS part of Chopstick consists of two main folders: `scss/shared` and `scss/theme` and two main files: `scss/_settings.scss` and `scss/screen.scss`.

The `scss/shared` folder contains all of the necessary mixins, includes, extends and other stuff to help you code quicker. Nothing in this folder is ever directly compiled to CSS. You need to reference components of Chopstick from within your theme’s SCSS code.

The `scss/theme` folder will contain your theme. Everything in this folder will be compiled to CSS if you import it in `screen.scss`. We have prepared what we believe are some sensible defaults in the directory root and theme-specific modules in the `modules` folder, but feel free to delete anything in this folder you don’t like. Also remember to remove the import rules from the `screen.scss` file.

The `scss/_settings.scss` file contains all of the settings and variables you can use throughout your project. Again, we have prepared some sensible defaults to work with our framework, but feel free to add your own variables as you see fit.

The `scss/screen.scss` file will be compiled to `css/screen.css`. Everything you want to compile needs to be referenced in this file.

### Contents

Everything that you can use will eventually be documented here.

#### Functions

`em($pxval, $base)`: em-calc

`ms($value, $increment, $ratio)`: modular scale

#### Grid

`box-($amount, $left, $right)`: grid width (1, 2, 3, 8, . . .), gutter left & right.

`push-left($amount)`:

`pull-right($amount)`:

`pull-left($amount)`:

`last-col`:

`em-padding-lr($left, $right)`:

`px-padding-lr($left, $right)`:

`em-margin-lr($left, $right)`:

`px-margin-lr($left, $right)`:

`perc-margin-lr($left, $right)`:

`perc-col-($amount, $pl, $pr)`:

#### Patterns

`clearfix`:

`list-nav`:

`horizontal-nav`:

`word-break`:

#### Typography

`text-dimensions($fs, $lh, $mb, $pt, $pb)`: font-size, line-height, margin-bottom, padding-top, padding-bottom.

`input-dimensions($fs, $lh, $mb, $pt, $pb)`: font-size, line-height, margin-bottom, padding-top, padding-bottom.

#### User Interface Elements

`alert`: alert boxes. Available types: alert, alert-error, alert-success & alert-notice

`pagination`: left aligned pagination

`pagination-centered`: centered pagination

## Authors

Simon Coudeville: 
[@simoncoudeville](http://twitter.com/simoncoudeville)

Xavier Bertels: 
[@xavez](http://twitter.com/xavez)

Ad Eggermont: 
[@AdEggermont](http://twitter.com/AdEggermont)

## Credits

We owe a ton of credits to the following projects for inspiration:

* Boilerplate
* Foundation and Bootstrap
* Semantic Grid System
* SMACSS
