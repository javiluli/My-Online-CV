let main_menu_toggle = document.getElementById("main_menu_toggle");
let main_menu = document.getElementById("main_menu");

main_menu_toggle.addEventListener("click", () => {
  main_menu.classList.toggle("show_menu");
  main_menu_toggle.classList.toggle("show-menu-toggle");
});
