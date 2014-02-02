nodejs r.js -o app.build.js

# clear previously generated css files
rm -r ../../build/css

mkdir ../../build/css
lessc -x --yui-compress ../../build/less/main.less > ../../build/css/main.css;

# remove all less files as they are no longer used
rm -r ../../build/less