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
        checkWin();
    }else{
        document.getElementById(id).innerHTML = letter;
        letter = "X";
        checkWin();
    }
}

const checkWin = function(letter){
    var field1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
    var field2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
    var field3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
    var field4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
    var field5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
    var field6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
    var field7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
    var field8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
    var field9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
    if  ((field1==field2)&&(field2==field3)) { return field3; }
    else if ((field4==field5)&&(field5==field6)) { return field6; }
    else if ((field7==field8)&&(field8==field9)) { return field9; }
    else if ((field1==field4)&&(field4==field7)) { return field7; }
    else if ((field2==field5)&&(field5==field8)) { return field8; }
    else if ((field3==field6)&&(field6==field9)) { return field9; }
    else if ((field1==field5)&&(field5==field9)) { return field9; }
    else if ((field3==field5)&&(field5==field7)) { return field7; }
    return -1;
}