var buttons = require("sdk/ui/button/action");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");

var button = buttons.ActionButton({
  id: "english4it-link",
  label: "English4IT customizer",
  icon: {
    "16": "./images/icon_16.png",
    "32": "./images/icon_32.png",
    "64": "./images/icon_64.png"
  },
  onClick: handleClick
});

pageMod.PageMod({
  include: "*.english4it.com",
  contentStyleFile: "./styles/custom_styles.css"
});

function handleClick(state) {
  tabs.open("https://www.english4it.com/");
}
