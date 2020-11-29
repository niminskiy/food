window.addEventListener('DOMContentLoaded', function() {
  const tabs = require('./modules/tabs'),
        cards = require('./modules/cards'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer');

  tabs();
  cards();
  forms();
  slider();
  calc();
  modal();
  timer();
});