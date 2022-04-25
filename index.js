function switchtab() {
    let check = document.getElementById("checked");
    let text = document.getElementById('textbo');
    let item = document.getElementById('textbox');
    let but = document.getElementById('textbu');
    if (check.checked == true) {
        text.style.display = "block";
        item.style.display = "none";
        but.style.display = "block";
    } else {
        text.style.display = "none";
        item.style.display = "block";
        but.style.display = "none";

    }
}


function todolist() {
    var it = document.getElementById("textbox").value;
    var id = document.getElementById("textbo").value;
    var ig = document.getElementById("textbu").value;
    if (it === "" || id === "" || ig === "") {
        alert("Please enter the task.....")
    } else {
        store();
        clr();
    }
}
getValues();

function store() {
    let tit = document.getElementById("textbox").value;
    let des = document.getElementById("textbo").value;
    let tag = document.getElementById("textbu").value;
    let info = {
        "titel": tit,
        "desbr": des,
        "tags": tag,
        "ischecked": false
    }
    console.log(tag)
    let info1 = []
    let dslist = JSON.parse(localStorage.getItem('task'));
    if (dslist != null) {
        dslist.push(info);
        localStorage.setItem('task', JSON.stringify(dslist));
    } else {
        info1.push(info);
        localStorage.setItem('task', JSON.stringify(info1));
    }
    console.log(info1);
    let to = document.getElementById('countlist').getElementsByTagName('li').length; {
        document.getElementById('total').value = to;
    }
    getValues();
}

function getValues() {
    let taskl = JSON.parse(localStorage.getItem("task"));
    let answer = "";
    let displaytitle = document.querySelector(".taslfg");
    taskl.forEach((info1, index) => {
        answer += ` <b><li id="${index}listn" class= "lists"><input type="checkbox"class="checkboxjs" id="${index}checkboxjs" onclick="cross(${index})">${(info1.titel)}<butto  onclick="delet(${index})" class="dlbutton" id="${index}dle"><i class="fa-solid fa-trash-can"></i></button></li></b>`
        answer += `<h6>${info1.desbr}</h6>`;
        answer += ` <button id="tagbu" class="tabu">${info1.tags}</button>`;

    })
    displaytitle.innerHTML = answer;
    taskl.forEach((info1, index) => {
        document.getElementById(index + 'checkboxjs').checked = info1.ischecked
        let ch = document.getElementById(index + 'checkboxjs');
        let bu = document.getElementById(index + 'dle');
        let gh = document.getElementById(index + 'listn');
        if (ch.checked == true) {
            // alert("are you sure!")
            bu.style.display = "block";
            bu.style.textDecoration = "underline";
            gh.style.textDecoration = "line-through";
            gh.style.fontStyle = "italic";
            gh.style.color = "green";
        } else {
            bu.style.display = "none";
            gh.style.textDecoration = "none";
            gh.style.fontStyle = "normal";
            gh.style.color = "black";
        }
    })
    let to = document.getElementById('countlist').getElementsByTagName('li').length; {
        document.getElementById('total').value = to;
    }

}

function delet(index) {
    alert("task deleted successfully")
    let taskl = JSON.parse(localStorage.getItem("task"));
    let deleting = "";
    console.log(index)
    taskl.splice(index, 1)
    localStorage.setItem('task', JSON.stringify(taskl));
    console.log(deleting);
    getValues();
}

function cross(index) {
    let taskl = JSON.parse(localStorage.getItem("task"));
    taskl[index].ischecked = !taskl[index].ischecked
    localStorage.setItem('task', JSON.stringify(taskl));
    let ch = document.getElementById(index + 'checkboxjs');
    let bu = document.getElementById(index + 'dle');
    let gh = document.getElementById(index + 'listn');
    if (ch.checked == true) {
        // alert("are you sure!")
        bu.style.display = "block";
        bu.style.textDecoration = "none";
        gh.style.textDecoration = "line-through";
        gh.style.fontStyle = "italic";
        gh.style.color = "green";
    } else {
        bu.style.display = "none";
        gh.style.textDecoration = "none";
        gh.style.fontStyle = "normal";
        gh.style.color = "black";
    }
}

function clr() {
    let tec = document.getElementById("textbox").value = "";
    let tdc = document.getElementById("textbo").value = "";
    let ttc = document.getElementById("textbu").value = "";
}
addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addbutton").click();
    }
});