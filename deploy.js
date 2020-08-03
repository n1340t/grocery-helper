var ghpages = require('gh-pages');
// only gh-page branch work
ghpages.publish('dist', function (err) {
  console.log('Deploy finished !!');
  if (err) {
    console.log(err);
  }
});
