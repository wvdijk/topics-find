javascript: (function(){
  var pagetitle = document.title;
  if (window.location.hostname.indexOf('parool.nl') > -1) {
    var headline = pagetitle.split(" - ")[0];
  } else {
    var headline = pagetitle.split(" | ")[0];
  }
  var searchString = encodeURIComponent(headline);
  var url = 'http://www.topics.nl/zoek/?query=' + searchString;
  window.open(url, '_blank');
})();
