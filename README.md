Chopstick
=========

Chopstick is a mobile-first responsive Design Framework.

## Install

First, `cd` into the project root (where this file is). Run the following commands:

    gem update --system && gem install bundler
    bundle install

Next, load the necessary dependencies with bower by running `bower install`. 

All dependencies and their respective version are defined in the `bower.json` file.

[Bower](http://bower.io/) depends on [Node](http://nodejs.org/) and [npm](https://npmjs.org/). It's installed globally using npm:
`npm install -g bower`.

## Use

To use Chopstick Boilerplate, just `cd` into the project root and run `bundle exec guard`.

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
