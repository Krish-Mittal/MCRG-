class game
{
   constructor()
   {

   }

   getState()
   {
    var rg= database.ref('gameState');
    rg.on("value",function(data)
    {
      gameState=data.val();
    })
   }
   update(state)
   {
       database.ref('/').update({
           gameState:state
       })
   }
   start()
   {
      if(gameState==0)
      {
          form1=new form();
          form1.display();
          player1=new player();
          player1.getCount();
          
      }
   }
}