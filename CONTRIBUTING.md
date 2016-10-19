# Contributing

You are free to contribute to Chopstick via GitHub Pull Requests (more on that later). Be like a good scout: if you find something you can improve, however small, fix it and send us a pull request. Many small improvements over time attribute to something greater!

We have a couple of simple guidelines we try to follow, of which most are taken from the [CSS Tricks Sass Style Guide](http://css-tricks.com/sass-style-guide)

## Issues and pull requests

- We close issues after 14 days of inactivity
- You can comment on pull requests during 7 days

## Git branch model
[A successful git branching model](http://nvie.com/posts/a-successful-git-branching-model/)


## Releases
[Semantic versioning](http://semver.org/)


## How to pull request

1. [Fork](https://github.com/getchopstick/chopstick-boilerplate/fork) this repo.
2. Create a branch `git checkout -b feature--name`
3. Commit your changes `git commit -am "New feature"`
4. Push to the branch `git push origin feature--name`
5. Open a [Pull Request](https://github.com/getchopstick/chopstick-boilerplate/pulls)


## Coding style

We use [Editorconfig](http://editorconfig.org/) to maintain a consistent coding style. Please take care of proper spacing and indenting.


## Naming and namespaces
We use the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming methodology:

- `.block` for sole root of the component (eg: .c-widget)
- `.block__element` for a component part of the block (eg: .c-widget__title)
- `.block--modifier` for a variant or extension of the block (eg: .c-widget--full)

Follow these rules for namespacing:
- `.o-` for object classes (eg: .o-media)
- `.c-` for component classes (eg: .c-widget)
- `.t-` for theming classes (eg: .t-header)
- `.u-` for utility classes (eg: .u-1-of-2)
- `.is-`/`.has-` for stateful classes (eg: .is-active)
- .js for javascript hooks
- `._` for temporary hacks/fixes

## SCSS order

1. Regular styles
2. @includes

Example:

    .c-component {
      background: #fff;
      @include transition(all 0.3s ease);
    }


## Extends

Don't use @extends as they have a tendency to cause css bloat and long selectors.


## Nesting

Try to avoid nesting. We follow a single-depth-class-based architecture.


## Global files

Only `@include` in the global screen.scss file. Never write SCSS directly in screen.scss. Order of importing is always as described in `screen.scss`.


## Be generous with comments

Comments get filtered out when compiling. If you do *anything* that can not be immediately understood: comment it.
