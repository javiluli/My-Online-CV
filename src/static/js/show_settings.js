let settings_icon = document.getElementById("settings_icon");
let list_settings = document.getElementById("list_settings");

settings_icon.addEventListener("click", () => {
  list_settings.classList.toggle("show_list-settings");
});
//-----------------------------------------------------------
let info_icon = document.getElementById("info_icon");
let info_span = document.getElementById("info_span");

info_icon.addEventListener("click", () => {
  info_span.classList.toggle("show_info_span");
});
