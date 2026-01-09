let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x:8*box,
    y:8*box
}
let direction = "right";

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
// ***** Gerar movimento da cobrinha ***
function iniciarJogo(){
    criarBG();
    criarCobrinha();

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
// Comando para a cada 1 milisegundo a função iniciarjogo() ser executada
let jogo = setInterval(iniciarJogo,1000);
// *********** Execuções ***************
// 
