COMMANDS = false;

//When clicked, change script div to whatever we feel like
document.addEventListener("DOMContentLoaded", () => {
	chrome.tabs.query({currentWindow: true, active: true}, tabs => {
		
		let script = chrome.extension.getBackgroundPage().changeInitialize(new URL(tabs[0].url).hostname, document);

		script.onload = () => {
			initialize();
		}

		document.head.appendChild(script);
	});
});

//Initializes all the DOM items. currObj should have 9 items.
function initialize()
{
	let fillArr = Array.from(document.getElementsByClassName("layContent"));

	fillArr.forEach((el, idx) => {
		var currObj = REDIRECTS[idx];

		el.children[0].src = currObj.image;
		el.children[1].innerText = currObj.name;

		el.addEventListener("click", () => {			
			window.open(currObj.link);
		});
	});

	if (COMMANDS)
	{
		for (var command of COMMANDS)
		{
			createCommand(command.execute, command.image, command.name, command.description);
		}
	}
	else
	{
		nothing();
	}
}

function createCommand(execute, image, name, description)
{
	let exBox = document.createElement("div");
	exBox.className = "exBox"; //LMAO x-box, speaking of which, buy Dogecoins
	exBox.addEventListener("click", () => {
		execute();
	});

	let exImg = document.createElement("img");
	exImg.src = image;
	exImg.className = "exImg";

	let wrapperDiv = document.createElement("div");
	let wrapperCover = document.createElement("div");
	wrapperCover.className = "cover";
	wrapperCover.innerText = name;

	let wrapperDescription = document.createElement("div");
	wrapperDescription.className = "description";
	wrapperDescription.innerText = description;

	wrapperDiv.appendChild(wrapperCover);
	wrapperDiv.appendChild(wrapperDescription);

	exBox.appendChild(exImg);
	exBox.appendChild(wrapperDiv);

	document.getElementById("exIntro").parentElement.appendChild(exBox);
}

//Creates the external command that shows when there's no external commands
function nothing()
{
	createCommand(() => {}, "https://i.imgur.com/6eaMVJR.png", "Nothing", "There's no external tools on this site.");
}