letter = "X";
counter = 0;

window.onclick = e => {
    boxId = e.target.id;
    if(e.target.tagName == "TD"){
        if(document.getElementById(boxId).innerHTML == " "){
            move(boxId);
        }
    }
}

const move = function(id){
    if(letter == "X" && counter < 8){
        document.getElementById(id).innerHTML = letter;
        checkWin(getPlayerName(letter));
        letter = "O";
        counter++;
    }else if(letter == "O" && counter < 8){
        document.getElementById(id).innerHTML = letter;
        checkWin(getPlayerName(letter));
        letter = "X";
        counter++;
    }else{
        document.getElementById(id).innerHTML = letter;
        playAgain("Game was a Tie!", "info");
    }
}

const getPlayerName = function(letter){
    if(letter == "X"){
        return document.getElementById("player1-label").innerHTML;
    }else if(letter == "O"){
        return document.getElementById("player2-label").innerHTML;
    }
}

const checkWin = function(letter){
    //horizontal Win Con
    if(getTextContent("b00") != " " && getTextContent("b00") == getTextContent("b01") && getTextContent("b01") == getTextContent("b02")){
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b10") != " " && getTextContent("b10") == getTextContent("b11") && getTextContent("b11") == getTextContent("b12")){
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b20") != " " && getTextContent("b20") == getTextContent("b21") && getTextContent("b21") == getTextContent("b22")){
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b00") != " " && getTextContent("b00") == getTextContent("b10") && getTextContent("b10") == getTextContent("b20")){ //vertical win con
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b01") != " " && getTextContent("b01") == getTextContent("b11") && getTextContent("b11") == getTextContent("b21")){
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b02") != " " && getTextContent("b02") == getTextContent("b12") && getTextContent("b12") == getTextContent("b22")){
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b00") != " " && getTextContent("b00") == getTextContent("b11") && getTextContent("b11") == getTextContent("b22")){ //diagnal win con
        playAgain(letter + " wins!", "success");
    }else if(getTextContent("b02") != " " && getTextContent("b02") == getTextContent("b11") && getTextContent("b11") == getTextContent("b20")){
        playAgain(letter + " wins!", "success");
    }
}

const getTextContent = function(id){
    return document.getElementById(id).textContent;
}

const playAgain = function(input, type){
    swal(input, "", type, {
        buttons: {
            cancel: "Exit",
            catch: {
            text: "Play Again!",
            value: "play-again",
            },
            defeat: false,
        },
      })
      .then((value) => {
        switch (value) {
          case "play-again":
            window.location.replace("game");
            break;
       
          default:
            window.location.replace("/ ");
        }
      });
}