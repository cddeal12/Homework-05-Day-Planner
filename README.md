Deployed Here: https://cddeal12.github.io/Homework-05-Day-Planner/

# Homework-05-Day-Planner
This project is a page with a simple 9-5 day planner. Each hour has a field which can be typed in and a save button to save the text that is entered. The page will automatically display the date, and it will color-code the fields based on the time. Fields for times that have already passed are in grey, fields for future times are in green, and the current time will be in red. All tasks that are written down are stored locally so they will persist through leaving or reloading the page.

## Method
For this project, I decided to create the appropriate elements in the html itself, so as to not run into any problems with an iterating loop trying to create complicated elements. As part of this process I avoided clutter by only coding for the first block of text, and adding the rest when the website functionality was able to handle them all. For readability afterwards, all of the elements that make up the page's content are nested inside a collapsible container, which also helps to handle bootstrap grid layout. 

An array containing every field for inputting text is defined inside the script to allow them all to be iterated on, something that is useful for changing their styles based on the time when the page first loads.

Each of the buttons contains an ID of only a number, 0-8 representing their position on the page. This ID is used to index the array of text-fields when the button is pressed. This way each button only saves the text input for its own coresponding text-field.
