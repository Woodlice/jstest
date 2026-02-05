(async () => {
  for (let i = 0; i < 200; i++) {
    const ok = window.jQuery && jQuery.fn && jQuery.fn.tablesorter && jQuery("#matterActivities").length;
    if (ok) break;
    await new Promise(r => setTimeout(r, 100));
  }

  if (window.jQuery && jQuery.fn && jQuery.fn.tablesorter) {
    jQuery("#matterActivities").tablesorter({
      theme: "bootstrap",
      headers: { 6: { sorter: false } }
    });
  }
})();
