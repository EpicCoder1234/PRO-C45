class Player{
    constructor(){
        this.name = null
    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        });
    }
    updatePlayerCount(data){
        console.log(data);
        database.ref('/').update({
            playerCount:data,
        });
    }
    updateName(){
        var playerIndex = "players/player"+playerCount
        database.ref('playerIndex').update({
            name:player.name
        });
    }
}