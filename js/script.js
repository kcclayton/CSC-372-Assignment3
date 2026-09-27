console.log("script loaded")

const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach((eventCard) => {
	const saveButton = document.createElement("button");
	saveButton.type = "button";
	saveButton.textContent = "Save Event";
	eventCard.appendChild(saveButton);
});

const savedEventsSection = document.createElement("section");
savedEventsSection.id = "saved-events";

const savedEventsHeading = document.createElement("h2");
savedEventsHeading.textContent = "Saved Events";

const emptySavedEventsMessage = document.createElement("p");
emptySavedEventsMessage.textContent = "No events saved yet";

savedEventsSection.appendChild(savedEventsHeading);
savedEventsSection.appendChild(emptySavedEventsMessage);
document.querySelector("main").appendChild(savedEventsSection);