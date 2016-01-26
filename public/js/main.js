// https://responsivedesign.is/resources/javascript-jquery/back-stretch

// $.backstretch("img/home_background.jpg", {speed: 150});

$(document).ready(function() {
  if(!$.cookie("cs")) {
    $("#chooseSchoolModalButton").click();
  }
});

// http://twitter.github.io/typeahead.js/examples/
//
// constructs the suggestion engine
var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // url points to a json file that contains an array of country names, see
  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
  prefetch: 'js/data.json'
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#prefetch .typeahead').typeahead(null, {
  name: 'countries',
  source: countries
});
