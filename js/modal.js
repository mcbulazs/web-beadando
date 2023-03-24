function openModal() {
    document.body.style.overflowY = "hidden"
    document.getElementById("modal").style.visibility = "visible"
}
function closeModal() {
    document.body.style.overflow = "scroll"
    document.getElementById("modal").style.visibility = "hidden"
}
function checkBoxChanged(id) {
    localStorage.setItem(id, document.getElementById(id).checked);
}

for (let i = 1; i < 8; ++i) {
    var string = "modalCheckbox"+i
    document.getElementById(string).checked = JSON.parse(localStorage.getItem(string));
}