console.log("script loaded")

const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach((eventCard) => {
	const eventName = eventCard.querySelector("h2").textContent.trim();
	const eventDateTime = eventCard.querySelector("time").textContent.trim();
	const eventLocation = eventCard.querySelector(".event-meta").textContent.split("|")[1].trim();

	console.log(eventName, eventDateTime, eventLocation);

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

eventCards.forEach((eventCard) => {

	const saveButton = eventCard.querySelector("button");
	const originalParent = eventCard.parentElement;

	saveButton.addEventListener("click", () => {
		const isSaved = savedEventsSection.contains(eventCard);

		if (isSaved) {
			originalParent.appendChild(eventCard);
			saveButton.textContent = "Save Event";
		} else {
			savedEventsSection.appendChild(eventCard);
			saveButton.textContent = "Remove Event";
		}

		emptySavedEventsMessage.hidden = savedEventsSection.querySelectorAll(".event-card").length > 0;
	});
});