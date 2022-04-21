/**
 * Блок подключения модулей
 */
const express = require('express');
const CONFIG = require('config');
const BODY_PARSER = require('body-parser');
const PATH = require('path');

/**
 * Блок определения констант
 */
const APP = express();

/**
 * Роутинг
 */
APP.use('/', require('./routes/main.routes'));

if (process.env.NODE_ENV === 'production') {
  APP.use('/', express.static(PATH.join(__dirname, 'react-kh', 'build')));
  APP.get('*', (req, res) => {
    res.sendFile(PATH.resolve(__dirname, 'react-kh', 'build', 'index.html'));
  });
}

const PORT = CONFIG.get('port');

/**
 * Блок алгоритма работы приложения
 */

/**
 * Настройки Express
 */
APP.use(BODY_PARSER.json());

// APP.use(express.json({extended: true}));

/**
 * Запуск сервера
 */
try {
  APP.listen(PORT, () => {
    console.log(`App backend successful started on port ${PORT}...`);
  });
} catch (err) {
  console.log('Server error!', err);
  process.exit(1);
}