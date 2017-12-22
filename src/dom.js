var cheerio = require('cheerio');


function parse(html) {
  var $ = cheerio.load(html);
  var $el = $('html, body').first();
  return $el.length > 0 ? $el : $;
}

function root($) {
  var $el = $('html, body, > div').first();
  return $el.length > 0 ? $el : $.root();
}

function textNode($el) {
  return _.reduce($el.children, function (text, e) {
    if (e.type == 'text') text += e.data;
    return text;
  }, '');
}

function cleanup($el, $) {
  $el.find('div').each(function () {
    var $div = $(this);
    cleanup($div, $);

    $div.replaceWith($div.html());
  });

  return $el;
}

module.exports = {
  parse: parse,
  textNode: textNode,
  root: root,
  cleanup: cleanup
};