// MOM.01
//código do inicio do jogo
var x = 150;
var y = 160;
//1 - jogar
//2 - regras
//3 - sair
var opcao = 1 
var telaAtiva = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  switch(telaAtiva) {
    case 1:
      menu();
      break;
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break; 
  }
}

function sair() {
   //R, G, B
  background('blue');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('saindo', 120, 55);
  window.close();
}


function regras() {
   //R, G, B
  background('blue');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('Aqui vao as regras', 40, 55);
}

function menu() {
  //R, G, B
  background('blue');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(150, 160, 120, 55, 10);
  rect(150, 230, 120, 55, 10);
  rect(150, 300, 120, 55, 10);
  
  textSize(32);
  fill('black');
  
  text('Jogar', 165, 195);
  text('Regras', 160, 265);
  text('Sair', 165, 335 );
  
  fill('white');
  stroke('black');
  strokeWeight(4);
  textSize(70);
  textStyle(BOLDITALIC);
  text('Maze', 100, 60); 
  fill('white');
  textSize(70);
  textStyle(BOLDITALIC);
  text('Of Math',60,120);
  
  noFill();
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(x, y, 120, 55);
  
}

function keyPressed() {
  console.log(keyCode);
  
  if(telaAtiva==2 || telaAtiva==3)
      telaAtiva=1;
  
  if (keyCode === ENTER) 
      telaAtiva=opcao;
     
  if (keyCode === DOWN_ARROW) {
    if(y>150 && y<300) {
       y+=70;
       if(opcao==1)
           opcao=2;
       else 
          if(opcao==2)
             opcao=3; 
    }
    
  } else if (keyCode === UP_ARROW) {
    if(y>180 && y<350) {
       y-=70;
       if(opcao==2) {
         opcao=1;
       } else { 
         if(opcao==3) {
           opcao=2;
         }
       }
    }
   
  }
  console.log("opcao: "+opcao);
  console.log("telaAtiva: "+telaAtiva);
}
