console.log("script loaded")

const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach((eventCard) => {
	const saveButton = document.createElement("button");
	saveButton.type = "button";
	saveButton.textContent = "button";
	eventCard.appendChild(saveButton);
});