var holder;
holder = document.getElementById("holder");
var marginVal;
var marginValH;

for(let i = 0 ; i < 50; i++){
    var blank;
    blank = document.createElement("div");
    blank.style.width = "100%";
    if(i<25){
    blank.style.height = "300px"; 
    }else{
    blank.style.height = "100px"
    }

    var lie;
    lie = document.createElement("p");
    if(i%3){
        lie.innerText = "表現の自由を守れ";
    }else if(i%5){
        lie.innerText = "表現の自由を違反するな";
    }else if(i%7){
        lie.innerText = "表現の自由を返せ";
    }else{
        lie.innerText = "表現の自由を";
    }
    lie.style.position ="sticky";
    marginVal = Math.floor(Math.random()*80);
    marginVal.toString();
    marginVal = marginVal + "%";
    marginValH = Math.floor(Math.random()*80);
    marginValH.toString();
    marginValH = marginValH + "%";
    lie.style.marginLeft = marginVal;
    lie.style.top = marginValH;
    lie.style.fontSize = "24px";
    lie.style.fontFamily = 'Noto Serif JP';
    lie.style.fontWeight = "500";

    holder.appendChild(lie);
    holder.appendChild(blank);
}

var blank1000 = document.createElement("div");

blank1000.style.width ="100%";
blank1000.style.height = "500px";
holder.appendChild(blank1000);

var sizeVal;

for(let i = 0 ; i < 30; i++){
    var blank;
    blank = document.createElement("div");
    blank.style.width = "100%";
    if(i<10){
    blank.style.height = "100px"; 
    }else{
    blank.style.height = "50px"
    }

    var voice;
    voice = document.createElement("h1");

    if(i == 0){
        voice.innerText = "憲法21条違反";
    }else if(i == 1){
        voice.innerText = "表現の自由は憲法21条に書いてある";
    }else if(i == 2){
        voice.innerText = "表現の自由を守れ";
    }else if(i == 3){
        voice.innerText = "表現の自由を違反しているs";
    }else if(i == 4){
        voice.innerText = "表現の自由は?";
    }else if(i == 5){
        voice.innerText = "表現の自由を返せ";
    }else{
        voice.innerText = "表現の自由を!";
    }

    voice.style.position ="sticky";
    marginVal = Math.floor(Math.random()*80);
    marginVal.toString();
    marginVal = marginVal + "%";
    marginValH = Math.floor(Math.random()*80);
    marginValH.toString();
    marginValH = marginValH + "%";
    sizeVal = Math.floor(Math.random()*20) + 80;
    sizeVal.toString();
    sizeVal = sizeVal + "px";
    voice.style.marginLeft = marginVal;
    voice.style.top = marginValH;
    voice.style.fontSize = sizeVal;
    voice.style.fontFamily = 'Noto Sans JP';
    voice.style.fontWeight = "900";

    holder.appendChild(voice);
    holder.appendChild(blank);
}
