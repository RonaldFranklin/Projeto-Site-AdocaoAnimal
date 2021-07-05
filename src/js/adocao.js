function sumirCachorro(){
    let allBox = document.querySelectorAll(".cachorro");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "none";
            }
}

function aparecerCachorro(){
    let allBox = document.querySelectorAll(".cachorro");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "block";
            }
}

function sumirGato(){
    let allBox = document.querySelectorAll(".gato");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "none";
            }
}

function aparecerGato(){
    let allBox = document.querySelectorAll(".gato");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "block";
            }
}

function sumirCoelho(){
    let allBox = document.querySelectorAll(".coelho");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "none";
            }
}

function aparecerCoelho(){
    let allBox = document.querySelectorAll(".coelho");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "block";
            }
}

function sumirPassaro(){
    let allBox = document.querySelectorAll(".passaro");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "none";
            }
}

function aparecerPassaro(){
    let allBox = document.querySelectorAll(".passaro");
                for (let index = 0; index < allBox.length; index++) {
                allBox[index].style.display = "block";
            }
}


function tipo() {
    /*let allBox = document.querySelectorAll(".cachorro");
         for (let index = 0; index < allBox.length; index++) {
           allBox[index].style.display = "none";
       }*/
      
    if (document.getElementById('tipo').selectedIndex == 1){ /* APARECER CACHORRO */ 
        aparecerCachorro();
        sumirGato();
        sumirCoelho();
        sumirPassaro();
    } else if (document.getElementById('tipo').selectedIndex == 2){ /* APARECER GATO */ 
        aparecerGato();
        sumirCachorro();
        sumirCoelho();
        sumirPassaro();
    } else if(document.getElementById('tipo').selectedIndex == 3){
        aparecerPassaro();
        sumirGato();
        sumirCachorro();
        sumirCoelho();
    } else if(document.getElementById('tipo').selectedIndex == 4){
        aparecerCoelho();
        sumirPassaro();
        sumirCachorro();
        sumirGato();
    } else {
        aparecerCachorro();
        aparecerGato();
        aparecerCoelho();
        aparecerPassaro();
    }
    
 }

