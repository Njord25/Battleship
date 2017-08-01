//Ships Factory

function Factory(){
    this.createShips = function(type) {
        var ships;

        if (type === "aircraftcarrier") {
            ships = new aircraftcarrier();
        } else if (type === "battleship"){
            ships = new battleship();
        } else if (type === "frigate"){
            ships = new frigate();
        } else if (type === "submarine"){
            ships = new submarine();
        } else if (type === "minesweeper"){
            ships = new minesweeper();
        }

        ships.type = type;

        return ships;
    }
};

var aircraftcarrier = function(){
    this.space = 5;
};

var battleship = function(){
    this.space = 4;
};

var frigate = function(){
    this.space = 3;
};

var submarine = function(){
    this.space = 3;
};

var minesweeper = function(){
    this.space = 2;
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
     ship.setAttribute("draggable", "false");
     event.target.style.opacity = "0.5";
}

