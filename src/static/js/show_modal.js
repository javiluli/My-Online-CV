// Script show principal
let main_menu_toggle = document.getElementById("main_menu_toggle");
let span_menu_toggle = document.getElementById("span_menu_toggle");

main_menu_toggle.addEventListener("click", () => {
  main_menu.classList.toggle("show_menu");
  span_menu_toggle.classList.toggle("span-menu-toggle-show");
  list_settings.classList.remove("show_list-settings");
  info_span.classList.remove("show_info_span");
});
//-----------------------------------------------------------

// Script from menssage information in tooltip
let info_icon = document.getElementById("info_icon");
let info_span = document.getElementById("info_span");

info_icon.addEventListener("click", () => {
  info_span.classList.toggle("show_info_span");
  setTimeout(function() {
    info_span.classList.remove("show_info_span");
  }, 5000);
});
