let Parser = require('rss-parser');
let parser = new Parser();
 
(async () => {
 
  let feed = await parser.parseURL('https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/14a43378-edb2-49be-8511-ab0d000a7030/d1b9612f-bb1b-4b85-9c0c-ab0d004ab37a/podcast.rss');
  console.log(feed.title);
 
  feed.items.forEach(item => {
      console.log(item.title);
      console.log(item.pubDate);
    console.log(item.enclosure)
  });
 
})();