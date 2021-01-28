const REDIRECTS = [
	{image: "Images/CatPhysics.png", name: "Cat Physics Guide", link: "https://drive.google.com/drive/folders/1L-CS-sh01Cta1fcaJcU5M7UKRXC93JK_?usp=sharing"},
	{image: "Images/CatBio.jpg", name: "Cat Biology Notes", link: "https://docs.google.com/document/d/15MSNL00C5ogb2FSyLNjT_7M9QK80kgt20XpdIx7XBGc/edit?usp=drive_web&ouid=103766347627934282235"},
	{image: "Images/CatChem.png", name: "Cat Chem Notes", link: "https://docs.google.com/document/d/1yu14gWXjYArPB2qg7E9Fq9z0ww_ORATGbOV8RXtG1yc/edit?usp=drive_open&ouid=0"},
	{image: "https://www.startupinspire.com/assets/startups/869/f839c546c42fd38131841aad6deaf966.png", name: "Physics Calcuator", link: "https://www.omnicalculator.com/physics"},
	{image: "https://www.symbolab.com/public/favicon.png", name: "Chem Calcuator", link: "https://www.symbolab.com/solver/chemistry-calculator"},
	{image: "https://pbs.twimg.com/profile_images/814290821096894464/rL7fbX2t_400x400.jpg", name: "Sayville Guide", link: "https://www.sayvilleschools.org/Page/5592"},
	{image: "https://r72.cooltext.com/rendered/cooltext375203407991260.png", name: "Mr G's Site", link: "https://mrgschemistrypage.weebly.com/resources1.html"},
	{image: "https://mma.prnewswire.com/media/948711/varsity_tutors_Logo.jpg?p=publish&w=200", name: "Varsity Tutors", link: "https://www.varsitytutors.com/ap_chemistry-help"},
	{image: "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/Calculator_5122x.png", name: "Web Calc", link: "https://web2.0calc.com/"},
	{image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png", name: "Discord", link: "https://discordapp.com/channels/523606562195898371/523607864732811266"},
];

const ociTool = () => {
	try 
	{
		chrome.tabs.executeScript({code: "return 'https://google.com/search?q=' + document.getElementsByClassName('rounded')[0].children[3].children[1].children[0].innerText;"}, (txt) => {
			window.open(txt);
		});
	}
	catch(err) 
	{
		console.log(err);
		return;
	}
}

const COMMANDS = [
	{execute: ociTool, image: "https://www.supercryptonews.com/wp-content/uploads/2020/07/doge.jpg", name: "OciTool", description: "Invented by Oci - this tool allows you to instantly google your Castle Learning questions if they exist."}
];