let CreateItem = function(domName, classNameVar, innerHTMLVar, windowLink, divApply) {

	let temp = document.createElement(domName);
	temp.className = classNameVar;
	temp.innerHTML = innerHTMLVar;
	
	if (windowLink != undefined) //When an argument name is not present, it returns undefined. 
	{ 
		temp.addEventListener("click", function() {
			window.open(windowLink, "_blank");
		})
	}
	if (divApply != undefined)
	{
		divApply.appendChild(temp);
	}
	return temp;
}

function createElement() {
	let section = document.createElement("section");
	section.className = "deltamathSection";

	let desmos = new CreateItem("div", "desmosCSS", "Desmos - An advanced graphing calculator", "https://www.desmos.com/calculator", section);

	let mathway = new CreateItem("div", "MathwayCSS", "Mathway - Expert algebra solver", "https://www.mathway.com/Algebra", section);

	let symbolabStats = new CreateItem("div", "symbolabStatsCSS", "Symbolab Statistics - Summations and all that wack stuff", 
		"https://www.symbolab.com/solver/statistics-calculator", section);

	let symbolabGeometry = new CreateItem("div", "symbolabGeometryCSS", "Symbolab Geometry - New Beta Symbolab feature", "https://www.symbolab.com/geometry", section);

	let discordHW = new CreateItem("div", "discordHWCSS", "Discord HW Help - When you are truely stuck, the best way is to directly consult the scholars", 
		"https://discordapp.com/channels/523606562195898371/523607864732811266", section);

	let scientificCalculator = new CreateItem("div", "scientificCalculatorCSS", "Clickable Scientific Calculator", "https://web2.0calc.com/", section);

	document.body.appendChild(section);
}

setTimeout(createElement,1000);