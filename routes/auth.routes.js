const {Router} = require('express');
const User = require('../models/user');
const BCRYPT = require('bcrypt');
const {check, validationResult} = require('express-validator');
const JWT = require('jsonwebtoken');
const CONFIG = require('config');
const ROUTER = Router();

ROUTER.post(
  '/login',
  [
    check('login', 'Введите корректный логин')
      .exists(),
    check('password', 'Введите корректный логин')
      .exists(),
  ],
  async (req, res) => {
    console.log(req.body);
    try {
      const ERRORS = validationResult(req);
      if (!ERRORS.isEmpty()) {
        return res.status(400).json({
          errors: ERRORS.array(),
          message: `Ошибка при входе. Проверьте введенные данные`
        })
      }

      const {login, password} = req.body;

      const ERROR_TEXT = `Логин или пароль не верный`;

      const USER = await User.findOne({login});
      if (!USER) {
        return res.status(400).json({message: ERROR_TEXT});
      }
      const IS_MATCH = BCRYPT.compare(password, USER.password);
      if (!IS_MATCH) {
        return res.status(400).json({message: ERROR_TEXT})
      }

      const TOKEN = JWT.sign(
        {userId: USER.id},
        CONFIG.get('jwtSecret'),
        {expiresIn: '1h'}
      );

      res.json({TOKEN, userId: USER.id});
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});

    }
  });

ROUTER.post('/logout', async (req, res) => {
  try {
    const {login, password} = req.body;
  } catch (err) {
    res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});

  }
});

module.exports = ROUTER;