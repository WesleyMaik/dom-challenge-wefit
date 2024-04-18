const menu = document.querySelector(".btn-group-vertical");
const header = document.querySelector(".jumbotron");
const cardsRow = document
	.querySelectorAll(".row")
	.values()
	.find((row) => Boolean(row.querySelector(".card")));

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

function changeCardOrder(cardsRow) {
	if (!cardsRow) return;
	const title = cardsRow.querySelector(".col-lg-12");
	title.style.order = 0;

	const cards = cardsRow.querySelectorAll(".col-lg-3");
	const cardOrder = [2, 4, 3, 1];

	cards.forEach((card, index) => {
		card.style.order = cardOrder[index];

		if (cardOrder[index] == 2) {
			const button = card.querySelector(".btn");
			button.classList.replace("btn-primary", "btn-success");
		}
	});
}

setMenuToHorizontal(menu);
changeHeaderAlignment(header);
changeCardOrder(cardsRow);
