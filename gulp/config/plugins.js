import replace from 'gulp-replace' //Поиск и замена
import gulpPlumber from 'gulp-plumber' //Обработка ошибок
import notify from 'gulp-notify' //Сообщения и подсказки
import browserSync from 'browser-sync' // Локальный сервер
import newer from 'gulp-newer'
import ifPlugin from 'gulp-if'

export const plugins = {
    replace: replace,
    gulpPlumber: gulpPlumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
}
