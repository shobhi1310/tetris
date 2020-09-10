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
        setTimeout(function() { 
            var div = document.createElement("div");
            div.style.background = "red";
            gridContainer.appendChild(div); 
        }, 50 * i);
    }
    
    for(var i=0;i<10;i++){
        setTimeout(function() { 
            var base = document.createElement("div");
            base.setAttribute('class','taken');
            base.style.background = "magenta";
            gridContainer.appendChild(base);
        }, 50 * i);   
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
