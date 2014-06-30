$(document).ready(function() {
	$(".google-search-box input").focus();
	$(".google-search-box input").googleSuggest({ service: 'web' });
	$(".youtube-search-box input").googleSuggest({ service: 'youtube' });
});