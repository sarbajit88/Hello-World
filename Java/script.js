function change() {
    let element = document.getElementById("1");
    element.innerHTML = ("Hello Sarbajit");
    document.getElementById("1").style.color = "green";
    document.getElementById("1").style.fontSize = "xxx-large";
}
setTimeout(change, 2000);


function relode() {
    window.location.reload();
}
setTimeout(relode, 4000);