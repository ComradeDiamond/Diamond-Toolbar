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
 
function removeAd() { //Removes the dumb advertisment you get on quizlet
	try
	{
		let getTheHeckOuttaHere = document.getElementsByClassName('SiteAd-houseSkyscraper');
		getTheHeckOuttaHere[0].remove();
	}
	catch
	{
		return;
	}
}

function createElement() { //Most of these are just normally done because it's just a directory in quizlet
	removeAd();

	let section = document.createElement("section");
	section.className = "quizletSectionCSS";

	let googleTranslate = new CreateItem("div", "childrenCSS", "Google Translate Them Vocab", "https://translate.google.com/", section);

	let microsoftTeams = new CreateItem("div", "childrenCSS", "Microsoft Teams", 
		"https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software", section);

	let castleLearning = new CreateItem("div", "childrenCSS", "Castle Learning", "https://cl.castlelearning.com/review/clo/account/logon", section);

	let googleMeets = new CreateItem("div", "childrenCSS", "Google Meet", "https://meet.google.com/", section);

	let discord = new CreateItem("div", "childrenCSS", "Discord Chat", "https://discordapp.com/channels/@me", section);

	let moodle = new CreateItem("div", "childrenCSS", "BTHS Moodle", "https://moodle.bths.edu/", section);

	let website = new CreateItem("div", "childrenCSS", "BTHS Website", "https://www.bths.edu/", section);

	let studyGuides = new CreateItem("div", "childrenCSS", "Cat's Study Guides", 
		"https://drive.google.com/drive/folders/18Y8gIuyliG7cjdmeHtaxrOCGKSfbJNSL", section);

	document.body.appendChild(section);
}

setTimeout(createElement,1000);