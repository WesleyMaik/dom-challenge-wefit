const menu = document.querySelector(".btn-group-vertical");

function setMenuToHorizontal(menu) {
	if (!menu) return;

	menu.classList.replace("btn-group-vertical", "btn-group-horizontal");
}

setMenuToHorizontal(menu);
