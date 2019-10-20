var menuState;

menuState = {
    create: function () {

        game.add.image(0, 0, 'bgMenu');
        var menuTitulo = game.add.sprite(game.world.centerX - (837/2),150,'menuTitulo');
        var botaoJogar=game.add.button(game.world.centerX - (359/2),420,'menuJogar', this.irJogar, this);
        // var botaoFases=game.add.button(game.world.centerX - 100,460,'menuFases', this.irJogar2, this);

        console.log('menu');
    },

    irJogar: function () {
        game.state.start('fase1');
    }
    // ,
    // irJogar2: function () {
        // game.state.start('fases');
    // }
};