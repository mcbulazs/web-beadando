document.getElementById("SoulsLikePage").onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}
document.getElementById("GamesPage").onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}
document.getElementById("CompanyPage").onmousemove = (e) => {

	const x = e.pageX - e.target.offsetLeft
	const y = e.pageY - e.target.offsetTop

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}
document.getElementById("SoulsLikePage").onmouseleave = (e) => {
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