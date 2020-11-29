window.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs'),
        cards = require('./modules/cards'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        calculator = require('./modules/calculator'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer');

  tabs();
  cards();
  forms();
  slider();
  calculator();
  modal();
  timer();
});