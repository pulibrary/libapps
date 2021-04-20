$(document).ready(function() {
  var library = $.getJSON("https://library.princeton.edu/json-alerts/?callback=library", function(data) {
    if (data.alerts.length > 0) {
      $(".lib-alert").html(
        "<div role='alert' class='wrapper wrapper--alert view view-emergency-alert-content-block view-id-emergency_alert_content_block view-display-id-emergency_alert_block'><div class='alert--message'><div class='l-region l-region--alert'><h3>" + data.alerts[0].alert.title + "</h3>" +
          data.alerts[0].alert.field_emergency_alert_blurb + "</div></div></div>"
      );
      $(".alert--message").addClass(
        "alert--level__" + data.alerts[0].alert.field_emergency_alert_level + " show"
      );
    } else {
        $(".lib-alert").remove();
    }
  });
});



