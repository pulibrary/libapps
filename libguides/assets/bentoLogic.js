/** 
* Variable searchQuery: Contains extracted search query from URL parameter, type string
**/
var searchQuery= getUrlParameter('q');
searchQuery = decodeURIComponent(searchQuery.replace(/\+/g,  " "));

/** 
* Function searchFAQ: Retrieve search results, populate in FAQ bento box
*
* Parameter sQ: search query, type string
**/
function searchFAQ(sQ) {
	
	var faqQuery = sQ.replace(/[^\w\s]/gi, '');
	var faqQueryURL = faqQuery;
	$("#boxFAQContent").empty();
	
	// define a div name that is based on query. The LibAnswers API will put results into this div.
	document.getElementById("boxFAQContent").innerHTML = "<di" + "v id=\"q" + faqQuery.replace(/ /g,"_") + "\"></d" + "iv>";
	
	// LibAnswers API will pull results and put in div
	$.getScript("http://api.libanswers.com/api_query.php?iid=344&q=" + faqQueryURL + "&limit=4&format=js&context=object");

}

/** 
* Function getSuggestions: Retrieve search results, populate in dynamic Suggestions bento box
*
* Variable sQ: search query, type string
* Variable sCommand: search commands (API), type string
* Variable rDiv: name of destination div, type string
* Variable pNum: name of search results to display, type integer
**/
// function getSuggestions(sQ, sCommand, rDiv, pNum) {
 
// 	var $rcb = rDiv;
// 	var $visib = $("#boxSuggestionsWrapper");
	
// 	$visib.css("display", "none");
// 	$rcb.empty();
	
// 	// Summon API to retrieve search results for Suggestions bento box
// 	$.getJSON("http://SERVER_URL/proxy.php?s.q=" + encodeURIComponent(sQ) + "&s.cmd=" + sCommand + "+setPageSize(" + pNum + ")&callback=?", function (data) { 

// 		// if there are Best Bet or database recommendations
// 		if (data.recommendationLists.bestBet != null || data.recommendationLists.database != null) {
		
// 			if (data.recommendationLists.bestBet.length > 0) {
// 				$rcb.append("<div class=\"rec\">");
// 				// populate Suggestions box with Best Bets
// 				for (var i = 0; i < data.recommendationLists.bestBet.length; i++) {
// 					   $rcb.append("<p><b><a href=\"" + data.recommendationLists.bestBet[i].link + "\" target =\"_blank\" >" + data.recommendationLists.bestBet[i].title + "</a></b><p>" + data.recommendationLists.bestBet[i].description); 
// 				 }
// 				$rcb.append("</div>");
// 				$visib.css("display", "block");
// 			}
		
// 			if (data.recommendationLists.database.length > 0) {
// 				$rcb.append("<div class=\"dbs\">");
// 				// populate Suggestions box with database recommendations
// 				for (var j = 0; j < data.recommendationLists.database.length; j++) {
// 					   $rcb.append("<p><b><a href=\"" + data.recommendationLists.database[j].link + "\" target =\"_blank\" >" + data.recommendationLists.database[j].title + "</a></b><p>" + data.recommendationLists.database[j].description);
// 				}
// 				$rcb.append("</div>");
// 				$visib.css("display", "block");
// 			}
// 		}
		
// 		// if there are spelling suggestions
// 		if (data.didYouMeanSuggestions.length > 0) {
// 			$rcb.append("Did you mean: ");
// 			// populate Suggestions box with spelling recommendations
// 			for (var i = 0; i < data.didYouMeanSuggestions.length; i++) {
// 				$rcb.append("<b> <a href=\"http://libguides.nus.edu.sg/srch.php?q="+encodeURIComponent(data.didYouMeanSuggestions[i].suggestedQuery) + "\">" + data.didYouMeanSuggestions[i].suggestedQuery + "</a></b>? ");
// 			}
// 			$rcb.append("<br />&nbsp;");
// 			$visib.css("display", "block");
// 		}
	
// 	});

// }

/** 
* Function searchSummon: Retrieve search results from Summon, populate into bento box defined by rDiv parameter
*
* Variable sQ: search query, type string
* Variable sCommand: search commands (API), type string
* Variable rDiv: name of destination div, type string
* Variable pNum: name of search results to display, type integer
**/
// function searchSummon(sQ, sCommand, rDiv, pNum) {
	
// 	var $r = $(rDiv);
	
// 	$r.empty();
// 	$r.append("<br /> Searching FindMore@NUSL ...");

// 	// Summon API to retrieve search results for bento box defined in parameter rDiv
// 	$.getJSON("http://SERVER_URL/proxy.php?s.q=" + encodeURIComponent(sQ) + "&s.cmd=" + sCommand + "+setPageSize(" + pNum + ")&callback=?", function (data) {      
// 		G = data;

// 		$r.empty();
// 		$r.append("<p>Showing " + data.documents.length + " / "+ data.recordCount + " results.</p>");

// 		for (var i = 0; i < data.documents.length; i++) {
// 			var d = data.documents[i];
// 			var s = "";
			
// 			// put author names together
// 			function fold(arr) {
// 				var f = "";
// 				$.each(arr, function (idx, el) {
// 					if (idx > 0) f += ", ";
// 					f += el;
// 				});
// 				return f;
// 			}
			
// 			// create new div for each
// 			s += "<div class=\"sResultThumb\"><div class=\"sResultThumbPic\">";
			
// 			// result thumbnail preview
// 			if (d.thumbnail_s) {
// 				s += "<img src=\"" + d.thumbnail_s + "\" height=100 />";
// 			}
			
// 			// result information
// 			s += "</div><div class=\"sResultInfo\"><p>";
			
// 			// result information: title
// 			if (d.Title[0]) {
// 				s += "<a href='" + d.link + "' target=\"_blank\" class=\"resultTitle\" >" + d.Title[0] + "</a><br />";
// 			}
			
// 			// result information: author
// 			if (d.Author) {
// 				s += " by: " + fold(d.Author) +"<br />";
// 			}
			
// 			// result information: publication title
// 			if (d.PublicationTitle) {
// 				s += "<i>" + d.PublicationTitle + "</i><br />";
// 			}
			
// 			// result information: content type
// 			if (d.ContentType[0]) {
// 				s+= d.ContentType[0] + ", "
// 			}
			
// 			// result information: publication year
// 			if (d.PublicationYear) {
// 				s += " " + d.PublicationYear + "<br />";
// 			}
			
// 			// result information: location
// 			if (d.Library) {
// 				s += d.Library;
// 			}
			
// 			s += "</p></div></div>";

//             var ll = "";

// 			$r.append(s);
// 		}
// 	});
// }

/**
* Function getUrlParameter: Extract URL parameter for given variable name
*
* Variable sParam: name of URL variable name to extract, type string
*
* Returns: URL parameter, type string
**/
function getUrlParameter(sParam) {
	
    var sPageURL = window.location.search.substring(1);
	
    var sURLVariables = sPageURL.split('&');
	
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }

}

/**
* Function initSeeMoreButton: Initialize "See More" button and links with behaviour and URL
*
* Variable bobj: name of div of top "SEE MORE" button, type string
* Variable bbobj: name of div of bottom "see more..." link, type string
* Variable blink: name of div of URL for full search results, type string
**/
function initSeeMoreButton(bobj, bbobj, blink) {

	// top "SEE MORE" button
	var $buttonObj = bobj;

	// re-config buttons
	$buttonObj.mouseup(function () {
		this.style.backgroundColor = "#FFFFFF";
		this.style.borderColor = "#f68121";
		this.style.color = "#f68121";
		window.open(blink, '_blank');
	});
	$buttonObj.mousedown(function () {
		this.style.backgroundColor = "#f68121";
		this.style.borderColor = "#FFFFFF";
		this.style.color = "#FFFFFF";
	});
	
	// bottom "see more..." link
	var $bottombuttonObj = bbobj;
	
	// re-config link
	$bottombuttonObj.empty();
	$bottombuttonObj.append("<p style=\"text-align:right\"><a href=\"" + blink + "\" target=\"_blank\" >see more...</a></p>");
	   
}