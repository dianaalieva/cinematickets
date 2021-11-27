# Учебный проект Алиевой Дианы.
[Ссылка](https://www.figma.com/file/IAuzewD0Wz9Pn3SN0ePixE/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-stc-%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80?node-id=2%3A3) на макет.

## Установка зависимостей.

запустить через терминал команду для установки зависимостей проекта

```Shell
npm install @babel/core @babel/cli @babel/preset-env @babel/polifill
```

## Запуск babel.

```Shell
npx babel js -d target
```

## Запуск babel с автоматической пересборкой.

перед началом работы над кодом запустить транспиляцию javascript

```Shell
npx babel js -d target --watch --source-maps