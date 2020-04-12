import lightTheme from "./light";
import darkTheme from "./dark";

function getTheme(themeType) {
  switch (themeType) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      break;
  }
}

export default getTheme;
