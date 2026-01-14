// global variables of colors of balloons
let redBalloon;
let blueBalloon;
let lightBlueBalloon;
let purpleBalloon;
let yellowBalloon;
let greenBalloon;
let orangeBalloon;
let pinkBalloon;
let brownBalloon;

function setup() {

  
  createCanvas(500,700);
  background('#f59a9a');
  redBalloon = new Balloon('#f52f2f', 4, 50, 700); // red balloon & speed & position
  blueBalloon = new Balloon('#4d3bed', 1, 100, 700); // blue balloon & speed & position
  lightBlueBalloon = new Balloon('#0cedf5', 3, 150, 700); // light blue balloon & speed & position
  purpleBalloon = new Balloon('#8f10e3', 3.5, 200, 700); // purple balloon & speed & position
  yellowBalloon = new Balloon('#ebf52a', 2, 250, 700); // yellow balloon & speed & position
  greenBalloon = new Balloon('#1cc71c', 2.5, 300, 700); // green balloon & speed & position
  orangeBalloon = new Balloon('#f09a22', 4, 350, 700) // orange balloon & speed & position
  pinkBalloon = new Balloon('#f279e9', 1.5, 400, 700); // pink balloon & speed & position
  brownBalloon = new Balloon('#9e6846', 2, 450, 700); // brown balloon & speed & position
}

function draw() 
{
  background('#f59a9a'); // covers past balloons
   redBalloon.drawBalloon(); //actual balloon
   blueBalloon.drawBalloon();
  lightBlueBalloon.drawBalloon();
   purpleBalloon.drawBalloon();
  yellowBalloon.drawBalloon();
  greenBalloon.drawBalloon();
  orangeBalloon.drawBalloon();
  pinkBalloon.drawBalloon();
  brownBalloon.drawBalloon();
  redBalloon.move(); // movement
  blueBalloon.move();
  lightBlueBalloon.move();
  purpleBalloon.move();
  yellowBalloon.move();
  greenBalloon.move();
  orangeBalloon.move();
  pinkBalloon.move();
  brownBalloon.move();

  // text of title
  rectMode(CENTER);
  textSize(30);
  fill('#a4edfc');

  text('Happy Birthday!', 125, 100);

  // text of actual writing
  rectMode(CENTER);
  textSize(20);
  fill('#a4edfc');
  text(' Dear to whoever this is going to,', 36, 150);
  text(' I just wanted to let you know that', 35, 175);
  text(' I hope you have a good birthday', 40, 200);
  text(' and dont have anyone ruin your ', 50, 225);
  text(' big day today and that you deserve', 50, 250);
  text(' to be happy on your birthday and', 50, 275);
  text(' dont have anyone steal your spot-', 50, 300);
  text(' light. Tell me how your birthday', 50, 325);
  text('  went and if you recieved any ', 50, 350);
  text(' presents any items what were they.', 50, 375);
  text(' I also just wanted to let you know', 50, 400);
  text(' I love you and god bless you.', 50, 425);

  textFont('Courier New');
  text('Sincerely, Melanie Campuzano', 40, 500);
  
  
}

