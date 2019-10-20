var fase1State;

fase1State = {
	create: function () {
		var player;
		var cursors;

		var score = 0;
		var scoreText;
		var jump=0;
        
        game.world.setBounds(0, 0, 13600, 768);




        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;

    // plataformas
    this.platforms = game.add.group();
    this.platforms.enableBody = true;

//PARALAXE

        

        

        this.paralax6 = game.add.tileSprite(0, 0, 13600, 780, 'bgFase');
        

        this.paralax7 = game.add.tileSprite(0, -300, 13600, 610, 'luaEstrelas');
        
        this.paralax5 = game.add.tileSprite(0, 200, 13600, 602, 'paralax5');
		this.paralax4 = game.add.tileSprite(0, 230, 13600, 582, 'paralax4');
        this.paralax2 = game.add.tileSprite(0, 360, 13600, 465, 'paralax2');

    var ground = this.platforms.create(0, 670, 'paralax3');
        this.paralax3 = game.add.tileSprite(0, 670, 13600, 100, 'paralax3');
        this.paralax1 = game.add.tileSprite(0, 50, 13600, 755, 'paralax1');

       this.paralax0 = game.add.tileSprite(0, 600, 13600, 381, 'paralax0');

    // fogueiras
    this.bonfires= game.add.group();
    this.bonfires.enableBody = true;


    // estrelas/brocas de bonus
    this.stars = game.add.group();
    this.stars.enableBody = true;
    
    var limitFire = this.bonfires.create(0,game.world.height-128,'fogueiras');


    ground.scale.setTo(50, 0.22);

    ground.body.immovable = true;

    // var ledge = this.platforms.create(400, 400, 'ground');

    // ledge.body.immovable = true;

    // ledge = this.platforms.create(-150, 250, 'ground');

    // ledge.body.immovable = true;


    this.cursor = game.input.keyboard.createCursorKeys();

    // Player
        this.player = game.add.sprite(200, game.world.height - 500, 'player');
        // Gravidade do player
        this.player.body.gravity.y = 1000;
        this.player.body.bounce.y = 0.2;
        this.player.body.collideWorldBounds = true;

        //  Animação de pulo e de movimentação
        this.player.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 20, true);
        this.player.animations.add('up', [14,15,16,17,18], 20, true);
        this.k=false;
        // game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

     for (var i = 0; i < 10; i++)
    {
        var bfire = this.bonfires.create(i * 1000, 600, 'fogueiras');
        bfire.animations.add('queima', [0,1,2,3,4,5,6,7,8,9,10,11], 20, true);
        bfire.animations.play('queima');

    this.star = this.stars.create(200*i, 500, 'engrenagem');

    
    }

    },

collectStar: function () {
    this.star.kill();

    this.score += 10;
    this.scoreText = 'Score: ' + this.score;
    
},

    update: function () {
        var hitPlatform = game.physics.arcade.collide(this.player, this.platforms);
        var hitBonfire = game.physics.arcade.collide(this.player, this.bonfires);
        var cen=0;
        if(hitBonfire){
            game.state.start(game.state.current);
        }

// console.log(game.camera.view.x);
        // this.player.animations.play('right');
    this.player.body.velocity.x = 0;
    if (this.cursor.left.isDown)
    {
        cen=-0.2;

        this.player.body.velocity.x = -50;
        if(hitPlatform)
        this.player.animations.play('right');

    }
    else if (this.cursor.right.isDown)
    {

        cen=0.5;

        this.player.body.velocity.x = 600;
        if(hitPlatform)
        this.player.animations.play('right');

    }
    else
    {
        //  Stand still
        // this.player.animations.stop();
        // if(this.player.body.velocity.y==0)
        if(hitPlatform)
        this.player.animations.play('right');
        //this.player.frame = 4;
    }

    // console.log(this.player.frame);
//double jump
    if (hitPlatform) {
        this.jump = 2;
    }

    if (this.cursor.up.isDown && hitPlatform) {
        this.k=true;
        this.jump=1;
        this.player.body.velocity.y = -600;
   this.player.animations.play('up');
       
    }
    if(this.k==true && this.cursor.up.isUp ){
        this.k=false;

    }

    if(this.k==false && this.jump==1 && this.cursor.up.isDown){
        this.jump=0;
        this.player.body.velocity.y = -600;
this.player.animations.play('up');
   
    }
    game.camera.x+=(2+15*cen);
    // // console.log(this.player.body.velocity.x)
    //if(this.player.body.velocity.y==-600){
      //      this.player.animations.play('up');
   
    //}
game.physics.arcade.collide(this.stars, this.platforms);

    //  Checks to see if the player overlaps with any of the this.stars, if he does call the collectthis.Star function
    game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);


        this.paralax0.x= game.camera.x*0.1;
        this.paralax1.x= game.camera.x*0.1*2;
        this.paralax2.x= game.camera.x*0.2*2;
        this.paralax3.x= game.camera.x*0.3*2;
        this.paralax4.x= game.camera.x*0.4*2;
        this.paralax5.x= game.camera.x*0.5*2;
        this.paralax7.x= game.camera.x*0.9;
    
}
,

render: function () {

    game.debug.cameraInfo(game.camera, 32, 32);

}




};