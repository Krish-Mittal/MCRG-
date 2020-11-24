class form
{
    constructor()
    {
      this.input = createInput("name");
      this.button= createButton('Play');
      this.greet=createElement('h3');
    }
    hide()
    {
      this.input.hide();
      this.button.hide();
      this.greet.hide();
    
    }
    display()
    {
      var title=createElement('h1');
      title.html("CAR RACING GAME");
      title.position(130,0)       

      this.input.position(130,160);
      this.button.position(250,200);
     this.button.mousePressed(function(){
          this.input.hide();
          this.button.hide();
           player1.name=this.input.value();
          playercount+=1;
          player1.index=playercount;
          player1.update()
          player1.updatecount(playercount)
          this.greet.html("hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+name)
          this.greet.position(130,160);
        })
    }
}