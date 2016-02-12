import {jsdom} from 'jsdom';


walkDom('http://google.com');

function walkDom(url) {
  let nodeCount = 0;

  jsdom.env(url, function (err, window) {
    if(err) {
      console.log(`Error loading ${url}: ${err}`);
    } else {
      crawl(window.document.documentElement);
      console.log('node count:', nodeCount);
    }
  });

  function crawl(node, depth = 0) {
    if(node.nodeType === 1) {
      console.log(`${indentString(depth)}${node.nodeName}`);
      nodeCount++;
    }
    if(node.hasChildNodes()) {
      var children = node.childNodes;
      for(let i = 0; i < children.length; i++) {
        crawl(children[i], depth + 1);
      }
    }
  }
  function indentString(size = 0, char = ' ') {
    return Array(size).fill(char).join('').toString();
  }
}
