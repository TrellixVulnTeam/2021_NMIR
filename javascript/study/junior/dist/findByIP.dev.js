"use strict";

// Написать программу "Я тебя по айпи вычислю" с использованием конструкции async/ await
// Технические требования:
// Создать простую HTML страницу с кнопкой Вычислить по IP.
// По нажатию на кнопку - отправить AJAX запрос по адресу https://api.ipify.org/?format=json, получить оттуда IP адрес клиента.
// Узнав IP адрес, отправить запрос на сервис https://ip-api.com/ и получить информацию о физическом адресе.
// Под кнопкой вывести на страницу информацию, полученную из последнего запроса - континент, страна, регион, город, район города.
var body = document.querySelector('body');
var btn = document.createElement('button');
var wrapper = document.createElement('div');
body.style.cssText = "\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n";
wrapper.style.cssText = "\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #eee;\n";
btn.style.cssText = "\n    padding: 1rem;\n    font-weight: bold;\n";
btn.innerText = "\u0412\u044B\u0447\u0438\u0441\u043B\u044E \u043F\u043E IP!";
body.appendChild(wrapper);
wrapper.appendChild(btn);

function findByIP() {
  var response, data, positionResponse, infoLocation;
  return regeneratorRuntime.async(function findByIP$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.ipify.org/?format=json'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("http://ip-api.com/json/".concat(data.ip, "?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city")));

        case 8:
          positionResponse = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(positionResponse.json());

        case 11:
          infoLocation = _context.sent;
          console.log(infoLocation);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

btn.addEventListener('click', findByIP);