function openModal() {
    document.body.style.overflowY = "hidden"
    document.getElementById("modal").style.visibility = "visible"
}
function closeModal() {
    document.body.style.overflow = "scroll"
    document.getElementById("modal").style.visibility = "hidden"
}
function checkBoxChanged(id) {
    console.log(id);
    localStorage.setItem(id, document.getElementById(id).checked);
    console.log(JSON.parse(localStorage.getItem(id)));
}

for (let i = 1; i < 8; ++i) {
    var string = "modalCheckbox"+i
    console.log(string);
    document.getElementById(string).checked = JSON.parse(localStorage.getItem(string));
}