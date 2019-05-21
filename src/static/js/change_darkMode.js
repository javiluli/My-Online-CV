const chanceColorButtom = document.querySelectorAll("[name=themeColor]");
const rootStyle = document.documentElement.style;

const lightColor = {
  "--color-first": "hsl(207, 89%, 48%)",
  "--color-second": "hsl(192, 82%, 58%)",
  "--color-text": "hsl(220, 2%, 34%)",
  "--color-body-bg": "hsl(0, 0%, 100%)",
  "--color-second-body-bg": "hsl(0, 0%, 94%)",
  "--border-color": "hsl(180, 2%, 88%)"
};

const darkColor = {
  "--color-first": "hsl(219, 88%, 60%)",
  "--color-second": "hsl(219, 100%, 66%)",
  "--color-text": "hsl(180, 3%, 98%)",
  "--color-body-bg": "hsl(206, 19%, 14%)",
  "--color-second-body-bg": "hsl(204, 19%, 10%)",
  "--border-color": "hsl(200, 18%, 3%)"
};

for (let buttom of chanceColorButtom) {
  buttom.addEventListener("change", e => {
    if (e.target.id === "dark") {
      changeTheme(darkColor);
    } else if (e.target.id === "light") {
      changeTheme(lightColor);
    }
  });
}

const changeTheme = theme => {
  let cssVars = Object.keys(theme);
  for (let cssVar of cssVars) {
    rootStyle.setProperty(cssVar, theme[cssVar]);
  }
};
