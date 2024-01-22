Для запуска:
npm run start


Надо сделать три запроса:

1. localhost:3000/upload - тут будет приниматься картинка с ключом  image
2. localhost:3000/form-content - тут просто POST запрос с content-type application/x-www-form-urlencoded
3. localhost:3000/form-json - тут просто POST запрос с content-type json

Запросы будет считаться успешным если отдаст 200

Сделать нужно на axios, useFetch(vue use), fetch(браузерный);