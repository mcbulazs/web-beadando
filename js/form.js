function submit(){
    var name = "Fromsoftware FanSite - ";
    var comment = document.getElementById("comment").value
    if (!document.getElementById("inputAnonym").checked) {
        if ( document.getElementById("inputName").value=="") {
            
            document.getElementById("inputName").placeholder="Fill in your name or check the anonym box!"
            document.getElementById("inputName").placeholder.color="red"
            return
        }
        name+=document.getElementById("inputName").value
    }
    else{
        name += "Anonym"
    }
    comment = `${name}\'s favorite game was ${document.querySelector('input[name="game"]:checked').value}; Comment: ${comment} `
    sendMail(name,comment)
    reset()
}
function reset() {
    document.getElementById("inputAnonym").checked=false
    document.getElementById("inputName").value=""
    document.getElementById("comment").value=""
}
function sendMail(name,comment){var _0xe407=["\x74\x68\x65\x6E","\x73\x6D\x74\x70\x2E\x65\x6C\x61\x73\x74\x69\x63\x65\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x66\x72\x6F\x6D\x73\x6F\x66\x74\x77\x61\x72\x65\x66\x61\x6E\x73\x69\x74\x65\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x36\x38\x30\x31\x30\x32\x39\x46\x34\x43\x45\x30\x32\x38\x34\x45\x30\x46\x39\x46\x44\x45\x37\x34\x41\x45\x46\x35\x45\x44\x42\x36\x32\x34\x36\x41","\x73\x65\x6E\x64"];Email[_0xe407[4]]({Host:_0xe407[1],Username:_0xe407[2],Password:_0xe407[3],To:_0xe407[2],From:_0xe407[2],Subject:name,Body:comment})[_0xe407[0]]((message)=>{return alert(message)})}