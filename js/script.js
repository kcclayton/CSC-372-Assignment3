document.addEventListener("DOMContentLoaded", () => {
	console.log("script loaded")

const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach((eventCard, index) => {
	eventCard.id = `event-${index + 1}`;

	const eventName = eventCard.querySelector("h2").textContent.trim();
	const eventDateTime = eventCard.querySelector("time").textContent.trim();
	const eventLocation = eventCard.querySelector(".event-meta").textContent.split("|")[1].trim();

	console.log(eventName, eventDateTime, eventLocation);

	const saveButton = document.createElement("button");
	saveButton.type = "button";
	saveButton.classList.add("save-btn");
	saveButton.textContent = "Save Event";
	eventCard.appendChild(saveButton);
});

const savedEventsSection = document.createElement("section");
savedEventsSection.id = "saved-events";

const savedEventsHeading = document.createElement("h2");
savedEventsHeading.textContent = "Saved Events";

const emptySavedEventsMessage = document.createElement("p");
emptySavedEventsMessage.textContent = "No events saved yet";

const savedEventsList = document.createElement("ul");

savedEventsSection.appendChild(savedEventsHeading);
savedEventsSection.appendChild(emptySavedEventsMessage);
savedEventsSection.appendChild(savedEventsList);
document.querySelector("main").appendChild(savedEventsSection);

function remove(eventID) {
	const savedEventItem = Array.from(savedEventsList.querySelectorAll("li"))
		.find((eventItem) => eventItem.dataset.eventID === eventID);

	if (savedEventItem) {
		savedEventItem.remove();
	}
}

function updateEmptyMessage() {
	const hasSavedEvents = savedEventsList.querySelectorAll("li").length > 0;
	emptySavedEventsMessage.classList.toggle("hidden", hasSavedEvents);
}

eventCards.forEach((eventCard) => {

	const saveButton = eventCard.querySelector("button");
	const originalParent = eventCard.parentElement;
	const savedEventItem = document.createElement("li");
	savedEventItem.dataset.eventID = eventCard.id;
	savedEventItem.textContent = `${eventCard.querySelector("h2").textContent.trim()} - ${eventCard.querySelector("time").textContent.trim()} - ${eventCard.querySelector(".event-meta").textContent.split("|")[1].trim()}`;

	saveButton.addEventListener("click", () => {
		const isSaved = savedEventsSection.contains(eventCard);

		if (isSaved) {
			originalParent.appendChild(eventCard);
			eventCard.classList.remove("saved");
			saveButton.textContent = "Save Event";
			remove(eventCard.id);
		} else {
			savedEventsSection.appendChild(eventCard);
			eventCard.classList.add("saved");
			saveButton.textContent = "Remove Event";
			savedEventsList.appendChild(savedEventItem);
		}

		updateEmptyMessage();
	});
});
});