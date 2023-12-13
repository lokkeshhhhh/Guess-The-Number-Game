


function darkMode() {
    document.body.classList.toggle('darkmode');
}

const darkModeButton = document.getElementById("dark-mode");
let isDarkMode = true;

darkModeButton.addEventListener('click', function () {
    if (isDarkMode) {
        darkModeButton.innerHTML = "Light Mode";
    } else {
        darkModeButton.innerHTML = "Dark Mode";
    }
    isDarkMode = !isDarkMode; 
});


const getBody = document.body.children[4];

const getEle = getBody.tBodies[0].rows[0];

getEle.children[0].style.backgroundColor = "#042f45";
getEle.children[1].style.backgroundColor = "#45042f";
getEle.children[2].style.backgroundColor = "#044539";
getEle.children[3].style.backgroundColor = "#210445";

const getEl = getBody.tBodies[0].rows[1];

getEl.children[0].style.backgroundColor = "#565640";
getEl.children[1].style.backgroundColor = "#454504";
getEl.children[2].style.backgroundColor = "#6f420f";
getEl.children[3].style.backgroundColor = "#530409";

const getE = getBody.tBodies[0].rows[3];

getE.children[0].style.backgroundColor = "#003477";
getE.children[1].style.backgroundColor = "#454504";
getE.children[2].style.backgroundColor = "#6f420f";
getE.children[3].style.backgroundColor = "#530409";

const geEle = getBody.tBodies[0].rows[2];

geEle.children[0].style.backgroundColor = "#042f45";
geEle.children[1].style.backgroundColor = "#45042f";
geEle.children[2].style.backgroundColor = "#044539";
geEle.children[3].style.backgroundColor = "#210445";




function llk() {

    "use strict";
    document.getElementById("rows").value = "";
    document.getElementById("columns").value = "";
    document.getElementById("guess-the-value").value = "";

    document.getElementById("seeanswer").innerHTML = "";
    document.getElementById("print-the-answer").innerHTML = "";


    const getE = getBody.tBodies[0].rows[3];
    const x = Math.round(Math.random() * 10);
    const d = Math.round(Math.random() * 10);
    const c = Math.round(Math.random() * 10);
    const b = Math.round(Math.random() * 10);
    const a = Math.round(Math.random() * 10);
    getE.children[0].style.backgroundColor = "#" + a + b + c + "d" + d + x;
    getE.children[1].style.backgroundColor = "#" + d + x + c + "e" + a + x;
    getE.children[2].style.backgroundColor = "#" + c + d + b + "e" + x + a;
    getE.children[3].style.backgroundColor = "#" + x + d + a + "e" + c + x;


    document.getElementById("lk1").innerHTML = x + 11;
    document.getElementById("lk2").innerHTML = a + 11;
    document.getElementById("lk3").innerHTML = b + 11;
    document.getElementById("lk4").innerHTML = d + 11;



    const getEle = getBody.tBodies[0].rows[2];
    const p = Math.round(Math.random() * 10);
    const q = Math.round(Math.random() * 10);
    const r = Math.round(Math.random() * 10);
    const s = Math.round(Math.random() * 10);
    const t = Math.round(Math.random() * 10);
    getEle.children[0].style.backgroundColor = "#" + p + r + q + "e" + t + s;
    getEle.children[1].style.backgroundColor = "#" + q + s + p + "e" + r + t;
    getEle.children[2].style.backgroundColor = "#" + r + s + p + "e" + t + q;
    getEle.children[3].style.backgroundColor = "#" + t + r + q + "e" + p + s;


    document.getElementById("lk5").innerHTML = p + 11;
    document.getElementById("lk6").innerHTML = s + 11;
    document.getElementById("lk7").innerHTML = r + 11;
    document.getElementById("lk8").innerHTML = q + 11;


    const getEl = getBody.tBodies[0].rows[1];
    const k = Math.round(Math.random() * 10);
    const l = Math.round(Math.random() * 10);
    const m = Math.round(Math.random() * 10);
    const n = Math.round(Math.random() * 10);
    const o = Math.round(Math.random() * 10);
    getEl.children[0].style.backgroundColor = "#" + o + n + k + "e" + l + m;
    getEl.children[1].style.backgroundColor = "#" + l + k + m + "e" + o + n;
    getEl.children[2].style.backgroundColor = "#" + m + o + n + "e" + l + k;
    getEl.children[3].style.backgroundColor = "#" + n + o + l + "e" + k + m;

    document.getElementById("lk9").innerHTML = k + 11;
    document.getElementById("lk10").innerHTML = m + 11;
    document.getElementById("lk11").innerHTML = l + 11;
    document.getElementById("lk12").innerHTML = o + 11;

    const geEle = getBody.tBodies[0].rows[0];
    const x1 = Math.round(Math.random() * 10);
    const d2 = Math.round(Math.random() * 10);
    const c2 = Math.round(Math.random() * 10);
    const b2 = Math.round(Math.random() * 10);
    const a2 = Math.round(Math.random() * 10);
    geEle.children[0].style.backgroundColor = "#" + a2 + b2 + c2 + "e" + d2 + x1;
    geEle.children[1].style.backgroundColor = "#" + d2 + x1 + c2 + "e" + a2 + x1;
    geEle.children[2].style.backgroundColor = "#" + c2 + d2 + b2 + "e" + x1 + a2;
    geEle.children[3].style.backgroundColor = "#" + x1 + d2 + a2 + "e" + c2 + x1;


    document.getElementById("lk13").innerHTML = a2 + 11;
    document.getElementById("lk14").innerHTML = b2 + 11;
    document.getElementById("lk15").innerHTML = d2 + 11;
    document.getElementById("lk16").innerHTML = x1 + 11;

    document.getElementById("klkl").style.pointerEvents = "none";

    document.getElementById("check").style.pointerEvents = "all";
}





function check() {

    const rowInput = document.getElementById("rows").value - 1;
    const columnInput = document.getElementById("columns").value - 1;

    const getBoxv = getBody.tBodies[0].rows[rowInput].children[columnInput].innerHTML;

    const guessedValue = document.getElementById("guess-the-value").value;


    if (getBoxv == guessedValue) {
        document.getElementById("print-the-answer").innerHTML = "You are genius ! ! !";
    } else {
        document.getElementById("print-the-answer").innerHTML = "You missed it ! ! !";
    }


    document.getElementById("klkl").style.pointerEvents = "all";
}



function lkk() {

    const rowInput = document.getElementById("rows").value - 1;
    const columnInput = document.getElementById("columns").value - 1;
    const getBoxv = getBody.tBodies[0].rows[rowInput].children[columnInput].innerHTML;
    document.getElementById("seeanswer").innerHTML = getBoxv;

    document.getElementById("check").style.pointerEvents = "none";
    document.getElementById("klkl").style.pointerEvents = "none";
}


function openPopup() {
    document.getElementById("popupdiv").style.display = "block";
    document.getElementById("emptyy").classList.add('lokesh');
}

function closePopup() {
    document.getElementById("popupdiv").style.display = "none";
    document.getElementById("emptyy").classList.remove('lokesh');
}

document.getElementById("emptyy").addEventListener('click', function () {
    document.getElementById("emptyy").classList.remove('lokesh');
    document.getElementById("popupdiv").style.display = "none";
    document.getElementById("toDodiv").style.display = "none";
});


function openTodo() {
    document.getElementById("toDodiv").style.display = "block";
    document.getElementById("emptyy").classList.add('lokesh');
}

function closeTodo() {
    document.getElementById("toDodiv").style.display = "none";
    document.getElementById("emptyy").classList.remove('lokesh');
}
