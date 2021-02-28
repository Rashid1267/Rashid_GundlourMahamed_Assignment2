var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controller/about');
const ctrlList = require('../controller/listdisplay');
const ctrlDisplay = require('../controller/display');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: ' Book World' });
});

/*GET About Page*/

router.get('/about', ctrlAbout.about);

/*GET List of Books*/
router.get('/list', ctrlList.listDisplay);

/*GET Display*/

router.get('/display', ctrlDisplay.display);

module.exports = router;
