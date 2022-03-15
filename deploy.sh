npm run build

cd dist

git init
git add .
git commit -m "deploy"

git push -f git@github.com:artem-2237/todoApp.git master:gh-pages

cd -
