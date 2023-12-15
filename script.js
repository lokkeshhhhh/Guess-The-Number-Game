

const getTable = document.querySelector("#main-game-table");

for(let i=0; i<getTable.rows.length;i++){
    const getRows = getTable.rows[i];

    for(let j=0; j<getRows.children.length;j++){
        getRows.children[j].style.backgroundColor = "#" + getRows.children[j].className;
    }
}

document.querySelector("#change-values").addEventListener('click', function(){
    

    document.getElementById("rows").value = "";
    document.getElementById("columns").value = "";
    document.getElementById("guess-the-value").value = "";

    document.getElementById("seeanswer").innerHTML = "";
    document.getElementById("print-the-answer").innerHTML = "";


    const getRow1 = getTable.rows[0];
    const x = Math.round(Math.random() * 10);
    const d = Math.round(Math.random() * 10);
    const c = Math.round(Math.random() * 10);
    const b = Math.round(Math.random() * 10);
    const a = Math.round(Math.random() * 10);
    getRow1.children[0].style.backgroundColor = "#" + a + b + c + "d" + d + x;
    getRow1.children[1].style.backgroundColor = "#" + d + x + c + "e" + a + x;
    getRow1.children[2].style.backgroundColor = "#" + c + d + b + "e" + x + a;
    getRow1.children[3].style.backgroundColor = "#" + x + d + a + "e" + c + x;


    document.getElementById("lk1").innerHTML = x + 11;
    document.getElementById("lk2").innerHTML = a + 11;
    document.getElementById("lk3").innerHTML = b + 11;
    document.getElementById("lk4").innerHTML = d + 11;



    const getRow2 = getTable.rows[1];
    const p = Math.round(Math.random() * 10);
    const q = Math.round(Math.random() * 10);
    const r = Math.round(Math.random() * 10);
    const s = Math.round(Math.random() * 10);
    const t = Math.round(Math.random() * 10);
    getRow2.children[0].style.backgroundColor = "#" + p + r + q + "e" + t + s;
    getRow2.children[1].style.backgroundColor = "#" + q + s + p + "e" + r + t;
    getRow2.children[2].style.backgroundColor = "#" + r + s + p + "e" + t + q;
    getRow2.children[3].style.backgroundColor = "#" + t + r + q + "e" + p + s;


    document.getElementById("lk5").innerHTML = p + 11;
    document.getElementById("lk6").innerHTML = s + 11;
    document.getElementById("lk7").innerHTML = r + 11;
    document.getElementById("lk8").innerHTML = q + 11;


    const getRow3 = getTable.rows[2];
    const k = Math.round(Math.random() * 10);
    const l = Math.round(Math.random() * 10);
    const m = Math.round(Math.random() * 10);
    const n = Math.round(Math.random() * 10);
    const o = Math.round(Math.random() * 10);
    getRow3.children[0].style.backgroundColor = "#" + o + n + k + "e" + l + m;
    getRow3.children[1].style.backgroundColor = "#" + l + k + m + "e" + o + n;
    getRow3.children[2].style.backgroundColor = "#" + m + o + n + "e" + l + k;
    getRow3.children[3].style.backgroundColor = "#" + n + o + l + "e" + k + m;


    document.getElementById("lk9").innerHTML = k + 11;
    document.getElementById("lk10").innerHTML = m + 11;
    document.getElementById("lk11").innerHTML = l + 11;
    document.getElementById("lk12").innerHTML = o + 11;

    const getRow4 = getTable.rows[3];
    const x1 = Math.round(Math.random() * 10);
    const d2 = Math.round(Math.random() * 10);
    const c2 = Math.round(Math.random() * 10);
    const b2 = Math.round(Math.random() * 10);
    const a2 = Math.round(Math.random() * 10);
    getRow4.children[0].style.backgroundColor = "#" + a2 + b2 + c2 + "e" + d2 + x1;
    getRow4.children[1].style.backgroundColor = "#" + d2 + x1 + c2 + "e" + a2 + x1;
    getRow4.children[2].style.backgroundColor = "#" + c2 + d2 + b2 + "e" + x1 + a2;
    getRow4.children[3].style.backgroundColor = "#" + x1 + d2 + a2 + "e" + c2 + x1;


    document.getElementById("lk13").innerHTML = a2 + 11;
    document.getElementById("lk14").innerHTML = b2 + 11;
    document.getElementById("lk15").innerHTML = d2 + 11;
    document.getElementById("lk16").innerHTML = x1 + 11;

    document.getElementById("see-ans").style.pointerEvents = "none";

    document.getElementById("check").style.pointerEvents = "all";

})


document.querySelector("#check").addEventListener('click', function(){
    const rowInput = document.getElementById("rows").value - 1;
    const columnInput = document.getElementById("columns").value - 1;

    const getBoxv = getTable.rows[rowInput].children[columnInput].innerHTML;

    const guessedValue = document.getElementById("guess-the-value").value;


    if (getBoxv == guessedValue) {
        document.getElementById("print-the-answer").innerHTML = "You are genius ! ! !";
    } else {
        document.getElementById("print-the-answer").innerHTML = "You missed it ! ! !";
    }


    document.getElementById("see-ans").style.pointerEvents = "all";
})


document.getElementById("see-ans").style.pointerEvents = "none";

document.querySelector("#see-ans").addEventListener('click', function(){
    const rowInput = document.getElementById("rows").value - 1;
    const columnInput = document.getElementById("columns").value - 1;
    const getBoxv = getTable.rows[rowInput].children[columnInput].innerHTML;
    document.getElementById("seeanswer").innerHTML = getBoxv;

    document.getElementById("check").style.pointerEvents = "none";
    document.getElementById("see-ans").style.pointerEvents = "none";
})


document.querySelector("#open-popup").addEventListener('click', function(){
    document.getElementById("popupdiv").style.display = "block";
    document.getElementById("emptyy").classList.add('lokesh');
})

document.querySelector("#close-popup").addEventListener('click', function(){
    document.getElementById("popupdiv").style.display = "none";
    document.getElementById("emptyy").classList.remove('lokesh');
})

document.getElementById("emptyy").addEventListener('click', function () {
    document.getElementById("emptyy").classList.remove('lokesh');
    document.getElementById("popupdiv").style.display = "none";
    document.getElementById("toDodiv").style.display = "none";
});

document.querySelector("#open-todo").addEventListener('click', function(){
    document.getElementById("toDodiv").style.display = "block";
    document.getElementById("emptyy").classList.add('lokesh');
})

document.querySelector("#close-todo").addEventListener('click', function(){
    document.getElementById("toDodiv").style.display = "none";
    document.getElementById("emptyy").classList.remove('lokesh');
})



const darkModeButton = document.getElementById("dark-mode");
let isDarkMode = true;

darkModeButton.addEventListener('click', function () {
    if (isDarkMode) {
        darkModeButton.innerHTML = "Light Mode";
    } else {
        darkModeButton.innerHTML = "Dark Mode";
    }
    isDarkMode = !isDarkMode; 

    document.body.classList.toggle('darkmode');
});
