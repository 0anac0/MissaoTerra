var loadState;
loadState = {
    preload: function () {
        var loadingLabel = game.add.text(game.width * 0.5, game.height * 0.5, 'Loading...',
            {font: '30px Courier', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5, 0.5);


        //Sons
//        game.load.audio('labSom', 'sounds/Level_2_LOOP.wav');

        //Menu
        game.load.image('bgMenu', 'img/bgMenu.jpg');
        game.load.image('bgFase', 'img/assets/bgFase.png');
        game.load.image('luaEstrelas', 'img/luaEstrelas.png');
        game.load.image('paralax0', 'img/assets/paralax0.png');
        game.load.image('paralax1', 'img/assets/paralax1.png');
        game.load.image('paralax2', 'img/assets/paralax2.png');
        game.load.image('paralax3', 'img/assets/paralax3.png');
        game.load.image('paralax4', 'img/assets/paralax4.png');
        game.load.image('paralax5', 'img/assets/paralax5.png');
        game.load.image('engrenagem', 'img/assets/coin.png');
        game.load.image('ground', 'img/platform.png');
        game.load.spritesheet('player', 'img/player.png', 47.95,77);
        game.load.spritesheet('fogueiras', 'img/assets/fogueira.png', 180.08,105);
        game.load.image('menuFases', 'img/menuCreditos.png');
        game.load.image('menuJogar', 'img/menuJogar.png');
        game.load.image('menuTitulo', 'img/titulo.png');



//        game.load.spritesheet('aviso1p', 'img/sprTelas/aviso1p.png',23.5, 12);

//        game.load.video('pedraCerta', 'videos/pedraCerta.mp4');
    Phaser.ScaleManager.EXACT_FIT;
    },

    create: function () {
        game.state.start('menu');


}

};