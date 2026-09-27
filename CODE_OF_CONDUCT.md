# Assignment 3 Specifications
### Event Handling using JavaScript
In this assignment, you will practice event handling by adding enhancements to the Campus Event Guide website. You will add dynamic behavior with an interactive Save Event feature. A user can save an event, and it will be added to a saved events list at the bottom of the home page.

#### What Stays the Same
Your two-page Campus Event Guide from assignment 2, including the shared header and navigation.
Your semantic HTML, CSS Grid, Flexbox, and responsive layouts.
Your styling and event cards - no need to redesign or rearrange.

#### What You Will Add
Using JavaScript only, layer in the following features:

- Save Events
    - Each upcoming event card on index.html gets a Save Event button. This should happen when the page loads.
    - Clicking the button:
        - Highlights the event visually, for example with a border or background.
        - Adds the event to a summary list at the bottom of the home page.
        - Changes the button text to Remove Event.
- Remove Events
    - Clicking the button again:
        - Removes the event from the summary list.
        - Resets the visual highlight and button text.
- Saved Events Summary
    - At the bottom of index.html, dynamically display:
        - A list of all saved events.
        - Each event's name, date and time, and location.
        - A message when no events have been saved yet.
        - A list that updates live as events are saved or removed.

#### Implementation Notes
- The HTML should remain unchanged except to add the script import.
- Keep your JavaScript in a separate external file and load it with defer.
- Do not use inline JavaScript ("onClick") on an HTML element.
    - Use event listeners to listen for clicks and a page load.
- Use classList to manage visual states.
- Use createElement to add elements to the page.
    - Do not user innerHTML to add elements. 
- You may add new CSS rulesets for any NEW classes and ids into your stylesheet.

#### Add, commit and push your changes to your GitHub repository.
Use Menu shortcuts, or use the terminal within Visual Studio Code to type in commands.
Pushing to the repository will automatically redeploy your page with the new changes. 

#### Submission Instructions
Submit the link to your GitHub repository. We want to see your edit history. 
Make sure the link to your deployment is easily reachable from your repo.