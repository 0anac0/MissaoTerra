var game = new Phaser.Game(1360, 768, Phaser.AUTO, 'gameSpaceApps');
var audio = true;

game.state.add('boot', bootState);
game.state.add('load', loadState);

game.state.add('fases', fase1State);
game.state.add('fase1', fase1State);
game.state.add('menu', menuState);

game.state.start('boot');

