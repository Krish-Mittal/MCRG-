class player{
constructor()
{
this.index=null;
this.name=null;
this.distance=0;
}
getCount()
{
 var pcr=database.ref('playercount')
 pcr.on("value",function(data){
   playercount=data.val();     
 })
}

updatecount(count)
{
    database.ref('/').update({
    playercount:count

    })

}
update(name)
{
    var playerindex="players/player"+this.index;
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance

    })

}
}