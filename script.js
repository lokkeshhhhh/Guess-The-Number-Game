
//             ***** Guess The Value Game *****


const getTable = document.querySelector("#main-game-table");

// insert random values to the table cells
for (let i = 0; i < getTable.rows.length; i++) {
    const getRows = getTable.rows[i];
    for (let j = 0; j < getRows.children.length; j++) {
        getRows.children[j].style.backgroundColor = "#" + getRows.children[j].className;

        getRows.children[j].innerHTML = Math.round(Math.random() * 10) + 11;
    }
}

// change the cell's values and background color
document.querySelector("#change-values").addEventListener('click', function () {

    document.getElementById("rows").value = "";
    document.getElementById("columns").value = "";
    document.getElementById("guess-the-value").value = "";

    document.getElementById("seeanswer").innerHTML = "";
    document.getElementById("print-the-answer").innerHTML = "";


    
// create random colors and set to them in cells
    for (let j = 0; j < getTable.rows.length; j++) {
        for (let i = 0; i < getTable.rows[j].children.length; i++) {
            let color = '#';
            let hexes = '0123456789ABCDEF';
            let numValue;
            for (let i = 0; i < 6; i++) {
                color += hexes[Math.round(Math.random() * 15)]
                numValue = Math.round(Math.random() * 10);
            }

            getTable.rows[j].children[i].style.backgroundColor = color;
            getTable.rows[j].children[i].innerHTML = numValue + 11;

        }
    }

// set pointer events to none and all
    document.getElementById("see-ans").style.pointerEvents = "none";
    document.getElementById("check").style.pointerEvents = "all";

})



// check your result
document.querySelector("#check").addEventListener('click', function () {
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



// see the original answer
document.querySelector("#see-ans").addEventListener('click', function () {
    const rowInput = document.getElementById("rows").value - 1;
    const columnInput = document.getElementById("columns").value - 1;
    const getBoxv = getTable.rows[rowInput].children[columnInput].innerHTML;
    document.getElementById("seeanswer").innerHTML = getBoxv;

    document.getElementById("check").style.pointerEvents = "none";
    document.getElementById("see-ans").style.pointerEvents = "none";
})


// open instructions
document.querySelector("#open-popup").addEventListener('click', function () {
    document.getElementById("popupdiv").style.display = "block";
    document.getElementById("emptyy").classList.add('lokesh');
})


// close instructions
document.querySelector("#close-popup").addEventListener('click', function () {
    document.getElementById("popupdiv").style.display = "none";
    document.getElementById("emptyy").classList.remove('lokesh');
})



document.getElementById("emptyy").addEventListener('click', function () {
    document.getElementById("emptyy").classList.remove('lokesh');
    document.getElementById("popupdiv").style.display = "none";
    document.getElementById("toDodiv").style.display = "none";
});



// what-to-do
document.querySelector("#open-todo").addEventListener('click', function () {
    document.getElementById("toDodiv").style.display = "block";
    document.getElementById("emptyy").classList.add('lokesh');
})


// close pop-up
document.querySelector("#close-todo").addEventListener('click', function () {
    document.getElementById("toDodiv").style.display = "none";
    document.getElementById("emptyy").classList.remove('lokesh');
})


// dark-mode
const darkModeButton = document.getElementById("dark-mode");
let isDarkMode = true;



// dark-mode text- on or off
darkModeButton.addEventListener('click', function () {
    if (isDarkMode) {
        darkModeButton.innerHTML = "Light Mode";
    } else {
        darkModeButton.innerHTML = "Dark Mode";
    }
    isDarkMode = !isDarkMode;

    document.body.classList.toggle('darkmode');
});
