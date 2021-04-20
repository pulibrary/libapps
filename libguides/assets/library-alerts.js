$(document).ready(function() {
  var library = $.getJSON("https://library.princeton.edu/json-alerts/?callback=library", function(data) {
    if (data.alerts.length > 0) {
      $(".l-region--alert").html(
        "<h3>" + data.alerts[0].alert.title + "</h3>" +
          data.alerts[0].alert.field_emergency_alert_blurb
      );
      $(".alert--message").addClass(
        "alert--level__" + data.alerts[0].alert.field_emergency_alert_level + " show"
      );
    }
  });
});