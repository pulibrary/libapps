/**
* Function searchLibraryCatalogue: Call searchSummon function to retrieve and populate Library Catalogue search results into Library Catalogue bento box.
*
* Variable svar: search query, type string
**/
// function searchLibraryCatalogue(svar) {
// 	searchSummon(svar, "addFacetValueFilters(SourceType, Library Catalog)", '#boxLibraryCatalogueContent', 10);
// }

/**
* Function searchArticles: Call searchSummon function to retrieve and populate Articles search results into Articles bento box.
*
* Variable svar: search query, type string
**/
// function searchArticles(svar) {
// 	searchSummon(svar, "addFacetValueGroupFilter(ContentType,or,Dissertation,Conference Proceeding,Journal Article,Magazine Article,Music Score,Newsletter,Standard)", '#boxArticlesContent', 10);
// }

/**
* Function executeSearches: Calls various functions to retrieve and populate search results into all bento boxes. Also initiate "see more" buttons and links.
*
* Variable srchQ: search query, type string
**/
function executeSearches(srchQ) {
	 searchQuery = srchQ;
	 searchFAQ(srchQ);
	 // searchLibraryCatalogue(srchQ);
	 // searchArticles(srchQ);
	 initSeeMoreButton($("#buttonMoreFAQ"), $(""), "http://faq.library.princeton.edu/", "FAQ");

	 // initSeeMoreButton($("#buttonMoreCatalogue"), $("#boxLibraryCatalogueContentMore"), "http://nus.summon.serialssolutions.com/search?s.q=" + encodeURIComponent(srchQ) + "&s.fvf%5B%5D=ContentType,Newspaper%20Article,t&s.fvf%5B%5D=ContentType,Book%20Review,t#!/search?ho=t&fvf=ContentType,Newspaper%20Article,t%7CContentType,Book%20Review,t%7CSourceType,Library%20Catalog,f&q=" + encodeURIComponent(srchQ) + "&l=en");

	 // initSeeMoreButton($("#buttonMoreArticles"), $("#boxArticlesContentMore"),"http://nus.summon.serialssolutions.com/search?s.q=" + encodeURIComponent(srchQ) + "&s.fvf%5B%5D=ContentType,Newspaper%20Article,t&s.fvf%5B%5D=ContentType,Book%20Review,t#!/search?ho=t&fvf=ContentType,Newspaper%20Article,t%7CContentType,Conference%20Proceeding,f%7CContentType,Book%20Review,t%7CContentType,Dissertation,f%7CContentType,Journal%20Article,f%7CContentType,Magazine%20Article,f%7CContentType,Music%20Score,f%7CContentType,Newsletter,f%7CContentType,Standard,f&q=" + encodeURIComponent(srchQ) + "&l=en");

	 // getSuggestions(srchQ, "addFacetValueFilters(SourceType, Library Catalog)", $('#boxSuggestionsContent'), 10);
}

/**
* Define behaviour of search button.
**/
$( "#s-lg-srch-form" ).submit(function( event ) {
	 var sQn= $("#s-lg-srch-input-q").val();
	 sQn = decodeURI(sQn);
	 executeSearches(sQn);
});

/**
* Execute searches for all bento boxes.
**/
// executeSearches(searchQuery);
