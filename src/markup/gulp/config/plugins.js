import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber" //Обраблотка ошибок
import notify from "gulp-notify" //Сообщения (подсказки)
import browsersync from "browser-sync" //localhost
import newer from "gulp-newer"; // проверка обновлений
import ifPlugin from "gulp-if"; // проверка обновлений

// Экспортируемынй обьект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}