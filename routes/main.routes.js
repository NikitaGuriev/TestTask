const {Router} = require('express');
const ROUTER = Router();

ROUTER.post(
  '/',
  async (req, res) => {
    console.log(req.body);
    try {
      res.send('Hello there!');
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});

    }
  });

module.exports = ROUTER;