let Parser = require('rss-parser');
let parser = new Parser();
 
(async () => {
 
  let feed = await parser.parseURL('https://itunes.apple.com/search?media=podcast&term=business');
  
 
  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link);
    console.log()
  });
 
})();