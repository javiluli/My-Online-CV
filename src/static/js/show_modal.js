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

// Script from view setting menu
let settings_icon = document.getElementById("settings_icon");
let list_settings = document.getElementById("list_settings");

settings_icon.addEventListener("click", () => {
  list_settings.classList.toggle("show_list-settings");
  info_span.classList.remove("show_info_span");
});
//-----------------------------------------------------------

// Script from menssage information in settings
let info_icon = document.getElementById("info_icon");
let info_span = document.getElementById("info_span");

info_icon.addEventListener("click", () => {
  info_span.classList.toggle("show_info_span");
});
