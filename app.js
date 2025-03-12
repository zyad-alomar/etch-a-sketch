let main = document.querySelector(".main");
let slider = document.querySelector(".slider");
let real = 0;
let color = "black";
let draw = false;
let colorInput = document.querySelector(".colorInput");

let rainbow = document.querySelector(".rainbowMode");
let rainbowbool = false;

let hix = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let colorarray = [];


let eraser = document.querySelector(".eraserMode");

eraser.addEventListener("click",()=>{
    rainbowbool = false;
 color = "white";
});

let clear = document.querySelector(".clearMode");

function rainbowgen(){
    for(let i = 0;i<6;i++){

        colorarray.push(hix[Math.floor(Math.random()*hix.length)]);
        
    }
    let colorreal = colorarray.join("");
    color = `#${colorreal}`;
    colorarray = [];
    colorreal = "";
    
        
    
}


colorInput.addEventListener("input",()=>{
    rainbowbool = false;
    color = colorInput.value;
});

rainbow.addEventListener("click",()=>{
    rainbowbool = true;
});



for(let i = 0;i<72;i++){
    
   
    let block = document.createElement("div");
    
    block.style.cssText = `width:${Math.sqrt(360000/72)}px;flex-grow:1;`;

   
block.addEventListener("mousedown",()=>{
    draw = true;
    if(rainbowbool==true){rainbowgen();}
    block.style.cssText = `width:${Math.sqrt(360000/72)}px;flex-grow:1;background-color:${color};`;
    clear.addEventListener("click",()=>{
        block.style.backgroundColor = "white";
    });
});

    block.addEventListener("mousemove",()=>{
        if(draw==true){
            if(rainbowbool==true){rainbowgen();}

            block.style.cssText = `width:${Math.sqrt(360000/72)}px;flex-grow:1;background-color:${color};`;
            clear.addEventListener("click",()=>{
                block.style.backgroundColor = "white";
            });
        }
     block.addEventListener("mouseup",()=>{
        draw=false;
     });
    });

    
    main.appendChild(block);
}












slider.addEventListener("input",()=>{

    let value = slider.value;
    getvalue(value);
    if(real != 72 || real != 282 || real != 1056 || real != 4160){
        main.innerHTML = "";
        real = 0;
    }

    getvalue(value);
    for(let i = 0;i<real;i++){
        console.log(value,real);
        let block = document.createElement("div");
        


        block.style.cssText = `width:${Math.sqrt(360000/real)}px;flex-grow:1;`;
        clear.addEventListener("click",()=>{
            block.style.backgroundColor = "white";
        });
        block.addEventListener("mousedown",()=>{
            draw = true;
            if(rainbowbool==true){rainbowgen();}

            block.style.cssText = `width:${Math.sqrt(360000/real)}px;flex-grow:1;background-color:${color};`;

        });
        
            block.addEventListener("mousemove",()=>{
                if(draw==true){
                    if(rainbowbool==true){rainbowgen();}

                    block.style.cssText = `width:${Math.sqrt(360000/real)}px;flex-grow:1;background-color:${color};`;
        
                }
             else{console.log(draw);}
            });

            block.addEventListener("mouseup",()=>{
 
                draw = false;
            });
        
        main.appendChild(block);
    }
    



});



function getvalue(value){
    if(value == 1){
        real = 64+8;
    }
    else if(value == 2){
        real = 256+16;
    }
    else if(value == 3){
        real = 1024+32;
    }
    else if(value == 4){
        real = 4096+64;
    }
    
}



