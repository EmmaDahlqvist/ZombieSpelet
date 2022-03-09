//ett
x = 0;
function update(){
    clearScreen();
    fill('black');
    x++;
    circle(200 + x,200,10, "red");
}

//Ett bi
color = "black";
color2 = "yellow"
x1 = 200;
y1 = 200;
x2 = 300;
x3 = 400;
radius1 = 100;
radius2 = 115;
radius3 = 130;

circle(x1, y1, radius1, color);
circle(x2, y1, radius2, color2);
circle(x3, y1, radius3, color);
rectangle(390, 10, 20, 80, "black");
rectangle(420, 10, 20, 80, "black");
circle(360, 170, 10, "white");
circle(440, 170, 10, "white");

clearScreen();
circle(x+5, y+5, 20, color);
circle(x+10, y+10, 20, color2);
circle(x+15, y+15, 20, color);

x += 5;
y -= 1;

//lektion 2
var age = prompt("Hur gammal är du?");
            if(age === "17"){
                alert("17 år");
            } else if(age < 17){
                alert("under 17");
            }

            var shoesize = prompt("Hur stora skor har du?");
            if(shoesize == "40"){
                alert("samma som mig!");
            }

            //keyboard
            if(keyboard.d){
                x += 10;
                color = "yellow";
            }
            if(keyboard.a){
                x -= 10;
                color = "blue";
            }
            if(keyboard.s){
                y += 10;
                color = "green";
            }
            if(keyboard.w){
                y -= 10;
                color = "pink";
            }

            //annan greh
            clearScreen();
            var circle1 = circle(x, y, 50, "red");
            var rectangle1 = rectangle(x2, y2, 50, 300, "black");
            var rectangle2 = rectangle(1150, 150, 50, 300, "black");

            var circle2 = circle(mouse.x, mouse.y, 20, color);
            var d = distance(mouse.x, mouse.y, x, y);
            var d2 = distance(x2, y2, x, y);

            if(d2 < 70){
                alert("game over!");
            }

            if(mouse.x < x+20){
                if(d > 20 && d < 70 ){
                color = "blue";
                x += 20;
            }
            else {
                color = "green";
            }
            } if(mouse.x > x+20){
                if(d > 20 && d < 70 ){
                color = "blue";
                x -= 20;
            }
            else {
                color = "green";
            }
            }
             if(mouse.y > y+20){
                if(d > 20 && d < 70 ){
                color = "blue";
                y -= 20;
            }
            else {
                color = "green";
            }
            }
            if(mouse.y < y+20){
                if(d > 20 && d < 70 ){
                color = "blue";
                y += 20;
            }
            else {
                color = "green";
            }
            }
// nytt
var circle1 = circle(x, y, 50, "red");
            var circle2 = circle(mouse.x, mouse.y, 20, color);

            if(keyboard.d)
            {
                x += 5;
            }
            if(keyboard.a){
                x -= 5;
            }
            if(keyboard.w){
                y -= 5;
            }
            if(keyboard.s){
                y += 5;
            }

            var d = distance(mouse.x, mouse.y, x, y);
            if(d < 70){
                color= "blue";
                alert("game over!")
                stopUpdate();
            } else {
                color= "green";
            }

            //huwehuiwie
            var zombies = [];

        var color = "green";

        i = 0;

        while (i < 50){

            zombies.push({
            x: random(totalWidth),
            y: random(totalHeight),
            speed: random(1 , 5)});

            i++;
        }

        function update()
        {
            clearScreen();

            var player = circle(mouse.x, mouse.y, 20, color);

            i = 0;
            while(i < 50){
                var zombie = zombies[i];
                picture(zombie.x, zombie.y, "http://spelprogrammering.nu/bilder/zombie.png");

            //zombie movement
            if(zombie.x < mouse.x){
                zombie.x += zombie.speed;
            } else {
                zombie.x -= zombie.speed;
            }
            
            if(zombie.y < mouse.y){
                zombie.y += zombie.speed;
            } else {
                zombie.y -= zombie.speed;
            }

            if(distance(mouse, zombie) < 5){
                color = "red";
                alert("GAME OVER :(");
                stopUpdate();
            }

            i++;
        }

        //https://www.youtube.com/watch?v=8LmxtrwR9HE
        }