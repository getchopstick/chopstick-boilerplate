Chopstick
=========

Chopstick is a mobile-first responsive Design Framework built with [Sass](http://sass-lang.com).

## Requirements

1. [Ruby](https://www.ruby-lang.org) and [rubygems](https://rubygems.org)
2. [Node](http://nodejs.org) and [npm](https://npmjs.org)

## Install

You only need to do this once in a new project.
First, `cd` into the project root (where this file is).
Install [bundler](http://bundler.io) and the necessary Ruby dependencies:

    gem update --system && gem install bundler
    bundle install

Install [bower](http://bower.io) and the necessary JavaScript dependencies:
	
	npm install -g bower
	bower install

## Use

To use Chopstick Boilerplate, `cd` into the project root and run:

	bundle exec guard

We try to keep the code as modular as possible. So you can comment out what you don’t use. Simply put:

    Settings + Mixins + Patterns = Chopstick Boilerplate

The boilerplate can be used as a **styleguide**, to build **static websites** or to speed up making **HTML prototypes**.

It uses a settings file + mixins + patterns. You can remove the default theme folder and just use some components from the patterns, as you see fit. We don’t like too much default generated code and neither should you.

For more information and examples please refer to the [documentation on our website](http://getchopstick.com/docs).

## Git subtree instructions

Chopstick (the `scss` folder) is included as a git subtree.

To push to the subtree: `git subtree push --prefix=scss`
To pull to the subtree: `git subtree pull --prefix=scss`

The location and branch of the subtree are defined in the `.gittrees` file.

## Credits

We owe a ton of credits to the following projects for inspiration:

* Boilerplate
* Foundation and Bootstrap
* Semantic Grid System
* SMACSS
