import { getTime, nameSave } from "./getDate.js";
import { SetRundomImg } from "./slider.js";
import { getWeatherLocation } from "./weather.js";
import { showQuotes } from "./quotes.js";
import { playMusic } from "./player.js";
import { checkLang } from "./translate.js";

checkLang();

getTime();

nameSave();

SetRundomImg();

getWeatherLocation();

showQuotes();

playMusic();
