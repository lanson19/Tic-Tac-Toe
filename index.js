letter = "X"

window.onclick = e => {
    boxId = e.target.id;
    if(e.target.tagName == "TD"){
        if(document.getElementById(boxId).innerHTML == " "){
            move(boxId);
        }
    }
}

const move = function(id){
    if(letter == "X"){
        document.getElementById(id).innerHTML = letter;
        letter = "O";
    }else{
        document.getElementById(id).innerHTML = letter;
        letter = "X";
    }
    checkWin();
}

const checkWin = function(){
    //horizontal Win Con
    if(getTextContent("b00") != " " && getTextContent("b00") == getTextContent("b01") && getTextContent("b01") == getTextContent("b02")){
        swal("You Won!", "","success", {
            buttons: ["Exit", "Play Again!"],
          });

        // window.location.href = "index.html";
    }else if(getTextContent("b10") != " " && getTextContent("b10") == getTextContent("b11") && getTextContent("b11") == getTextContent("b12")){
        setTimeout(() => {  alert("mid win"); }, 5);
    }else if(getTextContent("b20") != " " && getTextContent("b20") == getTextContent("b21") && getTextContent("b21") == getTextContent("b22")){
        setTimeout(() => {  alert("bot win"); }, 5);
    }else if(getTextContent("b00") != " " && getTextContent("b00") == getTextContent("b10") && getTextContent("b10") == getTextContent("b20")){ //vertical win con
        setTimeout(() => {  alert("left win"); }, 5);
    }else if(getTextContent("b01") != " " && getTextContent("b01") == getTextContent("b11") && getTextContent("b11") == getTextContent("b21")){
        setTimeout(() => {  alert("down win"); }, 5);
    }else if(getTextContent("b02") != " " && getTextContent("b02") == getTextContent("b12") && getTextContent("b12") == getTextContent("b22")){
        setTimeout(() => {  alert("right win"); }, 5);
    }else if(getTextContent("b00") != " " && getTextContent("b00") == getTextContent("b11") && getTextContent("b11") == getTextContent("b22")){ //diagnal win con
        setTimeout(() => {  alert("left right win"); }, 5);
    }else if(getTextContent("b02") != " " && getTextContent("b02") == getTextContent("b11") && getTextContent("b11") == getTextContent("b20")){
        setTimeout(() => {  alert("right left win"); }, 5);
    }
}

const getTextContent = function(id){
    return document.getElementById(id).textContent;
}

