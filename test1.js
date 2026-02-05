(function () {
  function init() {
    if (!window.jQuery || !jQuery.fn || !jQuery.fn.tablesorter) return false;
    var $t = jQuery("#matterActivities");
    if (!$t.length) return false;

    // avoid double init
    if ($t.find("thead th").first().hasClass("tablesorter-header")) return true;

    $t.tablesorter({
      theme: "bootstrap",
      headers: { 6: { sorter: false } }
    });
    return true;
  }

  // try now
  if (init()) return;

  // retry until Tessaract finishes rendering
  var tries = 0;
  var t = setInterval(function () {
    tries++;
    if (init() || tries > 200) clearInterval(t);
  }, 100);
})();
