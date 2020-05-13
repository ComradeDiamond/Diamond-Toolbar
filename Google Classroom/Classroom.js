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

	let classroomSection = document.createElement("section");
	classroomSection.className = "classroomSectionCSS";
	classroomSection.innerHTML = "Diamond Toolkit";

	let pupilpath = new CreateItem("div", "pupilpathCSS", "Pupilpath (sigh)", "https://pupilpath.skedula.com/", classroomSection);

	let translate = new CreateItem("div", "translateCSS", "Google Translate", "https://translate.google.com/", classroomSection);

	let deltaMath = new CreateItem("div", "deltaMathCSS", "Delta Math", "https://www.deltamath.com/student", classroomSection);

	let microsoftTeams = new CreateItem("div", "microsoftTeamsCSS", "Imagine using Microsoft Teams", 
		"https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software", classroomSection);

	let castleLearning = new CreateItem("div", "castleLearningCSS", "Castle Learning", "https://cl.castlelearning.com/review/clo/account/logon", classroomSection);

	let googleMeets = new CreateItem("div", "googleMeetsCSS", "Google Meet", "https://meet.google.com/", classroomSection);

	let discord = new CreateItem("div", "discordCSS", "Discord Chat", "https://discordapp.com/channels/@me", classroomSection);

	let moodle = new CreateItem("div", "moodleCSS", "BTHS Moodle", "https://moodle.bths.edu/", classroomSection);

	let website = new CreateItem("div", "websiteCSS", "BTHS Website", "https://www.bths.edu/", classroomSection);

	let studyGuides = new CreateItem("div", "studyGuidesCSS", "Cat's Study Guides (Comprehensive)", 
		"https://drive.google.com/drive/folders/18Y8gIuyliG7cjdmeHtaxrOCGKSfbJNSL", classroomSection);

	let collegeboard = new CreateItem("div", "collegeBoardCSS", "AP Central College Board", "https://apcentral.collegeboard.org/", classroomSection);

	document.body.appendChild(classroomSection);
}

setTimeout(createElement, 1000);