# start project 
- npm install (npm i) устнавливает зависимость 
- npm start (npm run start) старт проекта  http://localhost:3000
- npm run build 

# fonts 
- определить шрифты на сайте
- скачать шрифты https://fonts.google.com/
- конфертировать шрифты с нужной жирностью (font-weight) https://transfonter.org
- скачиваем файл в zip, извлекаем файлы woff woff2 в папку проекты --> fonts
- заходим в  папку со скачанными шрифтами и из файла stylesheets.css, копируем @font-face правило в файл style.css (в самом основном файле стилей)
- поправить пути к файлам шрифтов woff woff2 (../fonts/)