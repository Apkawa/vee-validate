#!/usr/bin/env sh

# abort on errors
set -e

REPOSITORY=$(git config --get remote.origin.url)

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f ${REPOSITORY} master:gh-pages
cd -
