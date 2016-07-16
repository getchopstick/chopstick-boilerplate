#!/usr/bin/env bash

if which bundler >/dev/null; then
  echo "Bundler is required. Installing bundler now…"
  gem update --system && gem install bundler
  bundle install
else
  bundle install
fi

if which gulp >/dev/null; then
  echo "Gulp is required. Installing Gulp…"
  npm install -g gulp
  npm install
else
  npm install
  gulp
fi
