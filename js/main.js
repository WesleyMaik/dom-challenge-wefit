const menu = document.querySelector(".btn-group-vertical");
const header = document.querySelector(".jumbotron");

function setMenuToHorizontal(menu) {
	if (!menu) return;

	menu.classList.replace("btn-group-vertical", "btn-group-horizontal");
}

function changeHeaderAlignment(header) {
	if (!header) return;

	header.classList.add("text-white");
	header.classList.add("bg-secondary");

	const texts = header.querySelectorAll("h1, p");
	const button = header.querySelector(".btn");

	texts.forEach((element) => {
		element.style.textAlign = "right";
	});

	const buttonStyles = {
		display: "block",
		width: "fit-content",
		marginLeft: "auto",
	};

	Object.keys(buttonStyles).forEach((style) => {
		button.style[style] = buttonStyles[style];
	});

	button.classList.replace("btn-primary", "btn-success");
}

setMenuToHorizontal(menu);
changeHeaderAlignment(header);
