var rows = 400
var cols = 200

function initialise(){
    console.log("Woo hoo!")
    createTable();
    createMiniGrid();
}

function createTable(){
    var gridContainer = document.getElementById("grid");
    for(var i=0;i<200;i++){
        var div = document.createElement("div");
        gridContainer.appendChild(div);
    }
    
    for(var i=0;i<10;i++){
        var base = document.createElement("div");
        base.setAttribute('class','taken');
        gridContainer.appendChild(base);
    }
}

function createMiniGrid(){
    var miniGridContaiiner = document.getElementById('mini-grid');
    for(var i=0;i<16;i++){
        var display_div = document.createElement('div');
        miniGridContaiiner.appendChild(display_div);
    }
}

window.onload = initialise;