/*I was supposed to use jquery and save tons of lines right here...
but it decided to be a brainlet and turn the console into Staten Island landfill */

function initialize() { //Gets the API link of the page
	var templink = window.location.href.split(`https://edpuzzle.com/assignments/`);

	try
	{
		var templink2 = templink[1].split(`/watch`);
		link = templink2[0];
	}
	catch(err)
	{
		console.log("Crisis averted! Now gimme a cookie!");
	}

}
function decodeHTML(toBeParsed) { //Converts foreign language HTML entities to readable english
	var useless = document.createElement("textarea");
	useless.innerHTML = toBeParsed;

	return useless.value;
}
function deHTMLify(toBeParsed) { //Convert something from HTML to not HTML
	var trash = decodeHTML(toBeParsed);
	trash = trash.replace(/<p>|<\/p>/gmiu, "");

	let boolean = (/<sub>|<\/sub>/gmiu.test(trash));

	if (boolean)
	{
		trash = trash.replace(/<sub>|<\/sub>/gmiu, "");
	} 
	return trash;
}
function findAnswer() {//Does the answer finding
	answerFound = false;
	let json = $.getJSON(`https://edpuzzle.com/api/v3/assignments/${link}`, function(data){ //async the server for the API (thank god that exists)
		let questionArray = data.medias[0].questions;

		for (i in questionArray) { //Parses through all the questions that exist

			questionAPI = deHTMLify(questionArray[i].body[0].html);
			
			try //If the question display is not available, immediately end the search
			{
				questionHTML = deHTMLify(document.querySelector('section[aria-label="Interaction statement"]').children[0].children[0].innerHTML);
			}
			catch(err)
			{
				break;
			}

			if (questionAPI == questionHTML) //If the question names match, then it starts looking for answers
			{
				if (questionArray[i].type == "open-ended") //If it is open ended, it shows teacher comments in hopes it has something
				{
					if (questionArray[i].feedback[0].html != "")
					{
						display(decodeHTML(questionArray[i].feedback[0].html));
					}
					else
					{
						display("Your teacher has not given any feedback. Wowowow how lazy is that");
					}
					answerFound = true;
					break;
				}
				else //If not, the server parses through every response to make sure it is true
				{
					let choiceArray = questionArray[i].choices;

					for (j in choiceArray) {
						if (choiceArray[j].isCorrect == true)
						{
							let answer = deHTMLify(choiceArray[j].body[0].html);
							display(`The correct answer is "${answer}"`);
							answerFound = true;
						}
					}
				}
			}
		}
		if (!answerFound) //Is the answer is not found, this alerts the player so
		{
			display("There's no question");
		}
	});
}
function display(text) { 
//Shows the user the results in the frontend. As of now we're alerting, but that will probably change soon for smth nicer
	alert(text);
}
function CreateButton() { //Creates a button that reveals edPuzzle answers
	let temp = document.createElement("button");
	temp.innerHTML = "Show multiple choice answer";
	temp.className = "revealButtonCSS";

	temp.addEventListener("click", findAnswer);

	document.body.appendChild(temp);
}

window.setTimeout(function(){
	initialize();
	CreateButton();
}, 1000);