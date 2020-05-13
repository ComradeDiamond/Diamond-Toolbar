contentBoard = document.getElementById("contents");

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
	section.className = "castleLearningSection";

	//Chemistry
	let chemDiv = new CreateItem("div", "chemDivCSS", "Chemistry");
	chemDiv.appendChild(document.createElement("br"));

	let crt = new CreateItem("span", "crtCSS", "Chemistry Reference Table", "https://cl.castlelearning.com/Review/CLO/Reference/Chem.htm", chemDiv);

	let chemCalc = new CreateItem("span", "chemCalcCSS", "Symbolab Chemistry Calculator", "https://www.symbolab.com/solver/chemistry-calculator", chemDiv);

	let studyGuideChem = new CreateItem("span", "studyGuideChemCSS", "Cat's Chem Study Guide", 
		"https://docs.google.com/document/d/1yu14gWXjYArPB2qg7E9Fq9z0ww_ORATGbOV8RXtG1yc/edit?usp=drive_open&ouid=0", chemDiv);

	//Physics
	let physicsDiv = new CreateItem("div", "physicsDivCSS", "Physics");
	physicsDiv.appendChild(document.createElement("br"));

	let physicsReferenceTable = new CreateItem("span", "physicsReferenceTableCSS", "Brainlet Reference Table", 
		"http://www.p12.nysed.gov/assessment/reftable/physics-rt/physics06tbl.pdf", physicsDiv);

	let betterPhysicsReferenceTable = new CreateItem("span", "physicsReferenceTableCSS", "Smart AP Physics Reference Table",
		"https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap-physics-1-equations-table.pdf", physicsDiv);

	let physicsCalc = new CreateItem("span", "physicsCalcCSS", "Tons of Physics Calculators", "https://www.omnicalculator.com/physics", physicsDiv);

	let physicsStudyGuides = new CreateItem("span", "physicsStudyGuidesCSS", "Physics Study Guides", 
		"https://drive.google.com/drive/folders/1L-CS-sh01Cta1fcaJcU5M7UKRXC93JK_?usp=sharing", physicsDiv);

	//Living Environment
	let livingDiv = new CreateItem("div", "livingDivCSS", "Living Environment");
	livingDiv.appendChild(document.createElement("br"));

	let sayvilleGuide = new CreateItem("span", "sayvilleGuideCSS", "Living Environment Powerpoints", "https://www.sayvilleschools.org/Page/5592", livingDiv);

	let livingLab = new CreateItem("span", "livingLabCSS", "Living Environment Lab Notes", 
		"https://www.slideshare.net/katiemc124/living-environment-part-d-review", livingDiv);

	let livingStudyGuide = new CreateItem("span", "livingStudyGuideCSS", "Cat's Study Guide", 
		"https://docs.google.com/document/d/15MSNL00C5ogb2FSyLNjT_7M9QK80kgt20XpdIx7XBGc/edit?usp=drive_web&ouid=103766347627934282235", livingDiv);

	//Extra Tools -- Google Search Function from OCI because I actually need that thing too. Hey, that's prob why OCI is a collaborator!
	let extraDiv = new CreateItem("div", "extraDivCSS", "Extra Tools that Might Help");
	extraDiv.appendChild(document.createElement("br"));

	let ociTool = new CreateItem("span", "ociToolCSS", "Oci Tool - Google the Questions");
	try {
		website = 'https://google.com/search?q=' + document.getElementsByClassName('rounded')[0].children[3].children[1].children[0].innerText;
	}
	catch(err) {
		return;
	}
	ociTool.addEventListener("click", function() {
		window.open(website, "_blank");
	})
	extraDiv.appendChild(ociTool);

	let discordHW = new CreateItem("span", "discordHWCSS", "Discord HW Help (Halp meh Void)", 
		"https://discordapp.com/channels/523606562195898371/523607864732811266", extraDiv);

	let googleClassroom = new CreateItem("span", "googleClassroomCSS", "Google Classroom - When you're done", "https://classroom.google.com/h", extraDiv);

	//Final appending
	section.appendChild(extraDiv);
	section.appendChild(chemDiv);
	section.appendChild(physicsDiv);
	section.appendChild(livingDiv);
	
	try {
		contentBoard.appendChild(section);
	}
	catch(err) {
		return;
	}
}
setTimeout(createElement, 1000);