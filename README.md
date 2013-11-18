Chopstick
=========

Chopstick is a mobile-first responsive Design Framework.

## Install

First, `cd` into the project root (where this file is).

If this is the first time, run the following commands:

    gem update --system && gem install bundler
    bundle install
    bundle exec guard

Next time, just `cd` into the project root and `bundle exec guard`.

## Use

We try to keep the code as modular as possible. Simplified put, you can look at it this way:

    Shared Library + Settings = Theme

We have included a default theme that uses settings from the settings file + components from the shared library. You can remove the default theme and just use some components from the shared library, as you see fit. We don’t like too much default generated code and neither should you.

For more information and examples please refer to the [documentation on our website](http://getchopstick.com/docs).

## Git subtree instructions

Chopstick (the scss folder) is included as a git subtree.

To push to the subtree: `git subtree push-all` or `git subtree push --prefix=scss`

To pull to the subtree: `git subtree pull-all` or `git subtree pull --prefix=scss`

The location and branch of the subtree are defined in the `.gittrees` file.

## Credits

We owe a ton of credits to the following projects for inspiration:

* Boilerplate
* Foundation and Bootstrap
* Semantic Grid System
* SMACSS
