class Balloon 
{
 constructor(clr, s, xStart, yStart) 
  {
    this.clr = clr;
    this.speed = s;
    this.x = xStart;
    this.y = yStart;
  }
  
  drawBalloon()
  {
    fill(this.clr); // color of balloon
     ellipse(this.x, this.y, 15, 30); // balloon
     fill(255); // color of string
    rect(this.x, this.y+22.5, 1, 15) // string

  }

  move()
  {
    this.y = this.y-this.speed;
    if(this.y<0)
    {
      this.y = 700;
    }
  }
  
}