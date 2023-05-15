document.getElementById("SoulslikePage").onmousemove = (e) => {
	gradient(e)
}
document.getElementById("GamesPage").onmousemove = (e) => {
	gradient(e)
}
document.getElementById("CompanyPage").onmousemove = (e) => {
	gradient(e)	
}
function gradient(e) {
	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop
	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
}
document.getElementById("SoulslikePage").onmouseleave = (e) => {
	e.target.style.setProperty('--x', `${ 0 }px`)
	e.target.style.setProperty('--y', `${ 50 }px`)
}
document.getElementById("GamesPage").onmouseleave = (e) => {
	e.target.style.setProperty('--x', `${ 0 }px`)
	e.target.style.setProperty('--y', `${ 50 }px`)
}
document.getElementById("CompanyPage").onmouseleave = (e) => {
	e.target.style.setProperty('--x', `${ 0 }px`)
	e.target.style.setProperty('--y', `${ 50 }px`)
}
var a = true
function colorChange() {
	if (a) {
		document.getElementById("main").classList.add("Amber")
		a = false
	}else{
		a=true
		document.getElementById("main").classList.remove("Amber")
	}
	
}