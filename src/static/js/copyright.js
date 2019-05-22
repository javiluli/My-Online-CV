let newDateYear = new Date().getFullYear();
let copyrightText = document.getElementById("textFooter");

copyrightText.innerHTML = "Copyright &copy; 1996-" + newDateYear + " JD";
