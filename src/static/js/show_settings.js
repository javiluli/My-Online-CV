let settings_icon = document.getElementById("settings_icon");
let list_settings = document.getElementById("list_settings");

settings_icon.addEventListener("click", () => {
  list_settings.classList.toggle("show_list-settings");
});
