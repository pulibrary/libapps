$(window).on("load", function() {
  // Alert
  $('.l-region--alert a').on('click', function() {
    ga('send', 'event', 'Components', 'Alert', $(this).text());
  });

  // Homepage - Featured Guides
  $('#s-lg-box-25300619 a').on('click', function() {
    ga('send', 'event', 'Homepage', 'Featured Guides', $(this).text());
  });

  // Homepage - Browse by Discipline
  $('#s-lg-box-25007304 a').on('click', function() {
    ga('send', 'event', 'Homepage', 'Browse by Discipline', $(this).text());
  });

  // Homepage - Topic Guides
  $('#s-lg-box-25300649 a').on('click', function() {
    ga('send', 'event', 'Homepage', 'Topic Guides', $(this).text());
  });

  // Homepage - Popular Guides
  $('#s-lg-box-25267554 a').on('click', function() {
    ga('send', 'event', 'Homepage', 'Popular Guides', $(this).text());
  });

  // Homepage - Get Help 
  $('#s-lg-box-25276305 a').on('click', function() {
    ga('send', 'event', 'Homepage', 'Get Help', $(this).text());
  });

  // LibGuides Search
  $('.s-lg-public-search-field input').on('click', function() {
    ga('send', 'event', 'Components', 'LibGuides Search', 'Clicked Input');
  });

  $('.s-lg-public-search-field button').on('click', function() {
    ga('send', 'event', 'Components', 'LibGuides Search', 'Clicked Submit');
  });

  // Get Help
  $('#s-lg-box-1614721 button').on('click', function() {
    ga('send', 'event', 'Components', 'Get Help', $(this).text());
  });

  $('#s-lg-box-1614721 a').on('click', function() {
    ga('send', 'event', 'Components', 'Get Help', $(this).text());
  });

  // Breadcrumbs
  $('#s-lib-bc a').on('click', function() {
    ga('send', 'event', 'Components', 'Breadcrumbs', $(this).parent().attr('id'));
  });

  // Profile Box
  $('#s-lib-profile-container a').on('click', function() {
    ga('send', 'event', 'Components', 'Profile Box', $(this).text());
  });

  // Footer
  $('#s-lg-guide-header-meta a').on('click', function() {
    ga('send', 'event', 'Components', 'Footer', $(this).text());
  });

  $('#s-lg-guide-header-tags a').on('click', function() {
    ga('send', 'event', 'Components', 'Footer', 'Tag - ' + $(this).text());
  });

  // Back to Top
  $('#s-lib-scroll-top a').on('click', function() {
    ga('send', 'event', 'Components', 'Back to Top', 'Clicked to Scroll Up');
  });

  // Search Results
  $('#s-lg-srch-nav-1 input').on('click', function() {
    ga('send', 'event', 'Search Results', 'Search Box', 'Clicked Input');
  });

  $('#s-lg-srch-nav-1 button').on('click', function() {
    ga('send', 'event', 'Search Results', 'Search Box', 'Clicked Submit');
  });

  $('#s-srch-tabs button').on('click', function() {
    ga('send', 'event', 'Search Results', 'Tabs', $(this).text());
  });

  $('#s-lg-srch-content .dropdown-menu a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Sort', $(this).text());
  });

  $('#s-lg-srch-content .pagination a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Pagination', $(this).text());
  });

  $('#s-lg-srch-content .s-srch-result-title > a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Result Item', 'Result Title');
  });

  $('#s-lg-srch-content .s-srch-result-guide > a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Result Item', 'Guide');
  });

  $('#s-lg-srch-content .s-srch-result-author > a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Result Item', 'Guide Author');
  });

  $('#s-lg-srch-content .s-srch-result-url > a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Result Item', 'Guide URL');
  });

  $('#s-lg-srch-content .s-srch-result-subj a').on('click', function() {
    ga('send', 'event', 'Search Results', 'Result Item', 'Quick Answers Topics');
  });

  $('.s-lg-facet-div input').on('click', function() {
    ga('send', 'event', 'Search Results', 'LibGuides Facet', $(this).closest('.s-lg-facet-div').find('legend').text());
  });

  $('.s-srch-facet input').on('click', function() {
    ga('send', 'event', 'Search Results', 'Quick Answers Facet', $(this).closest('.s-srch-facet').find('h3').text());
  });
  
});