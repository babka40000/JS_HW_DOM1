import GameWiget from './game-widget/game-widget';

document.addEventListener('DOMContentLoaded', () => {
  const gameWidget = new GameWiget(document.querySelector('.playing-field'));

  gameWidget.generateGoblin();

  setInterval(() => {
    gameWidget.generateGoblin();
  }, 1000);
});
