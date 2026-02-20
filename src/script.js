let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x:8*box,
    y:8*box
}
let direction = "right";
// Array para randomizar a coordenada de geracao da comida
let food = {
    //Math.floor - retira o ponto flutuante do valor Math.random
    //Math.random gera numeros entre 0 e 1 
    x:Math.floor(Math.random()*15+1)*box,
    y:Math.floor(Math.random()*15+1)*box    
}

// ***** Delimitação do background *****
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
}
// ******* Criar para a cobrinha *******
function criarCobrinha(){
    for(i=0;i<snake.length;i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
}

// ******* Criar para a comida *******
function criarComidinha(){
    context.fillStyle= "red";
    context.fillRect(food.x,food.y,box,box)
}

// ***** Gerar o evento de escuta *****
// escutar o evento de pressionar as teclas do teclado
document.addEventListener('keydown',update);

function update(event){
    // 37 : Esquerda | 38 : Cima | 39 : Direita | 40: Baixo
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

// ***** Gerar movimento da cobrinha ***

function iniciarJogo(){
    // Delimita os limites e liga as bordas entre si
    if (snake[0].x > 15*box && direction === "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction === "left") snake[0].x = 16*box;
    if (snake[0].y > 15*box && direction === "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction === "up") snake[0].y = 16*box;

    criarBG();
    criarCobrinha();
    criarComidinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box; 
    if (direction == "left") snakeX -= box; 
    if (direction == "up") snakeY -= box; 
    if (direction == "down") snakeY += box;
    // Remove o elemento anterior do array
    snake.pop();
    // Criando a cabeça da cobra
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

// *********** Execuções ***************

// Comando para a cada 1 milisegundo a função iniciarjogo() ser executada
let jogo = setInterval(iniciarJogo,100);
