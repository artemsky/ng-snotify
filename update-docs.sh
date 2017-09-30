rm -rf demo
npm run example:build:prod
npm run compodoc:build
cd docs
rm -rf _book
gitbook install
gitbook build ./ ../demo/documentation
rm -rf _book
cd ../demo
git init
git add -A
git commit -m 'update demo'
git push -f git@github.com:artemsky/ng-snotify.git master:gh-pages
