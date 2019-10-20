var fasesState;

fasesState = {
    create: function () {

        game.add.image(0, 0, 'bgMenu');

        var botaoJogar=game.add.button(game.world.centerX - (168.3/2),250,'menuJogar', this.irJogar, this, 1, 0);


    },

    irJogar: function () {
        game.state.start('fase1');
    }
};