# Project Overview

## Project Name

Carb Counter

## Project Description

Be able to go to a website and look up a food or meal you want to eat and submit it to recieve carbs and dietary information. 

## API and Data Sample

https://developer.edamam.com/edamam-docs-nutrition-api

This returns the nutritional analysis for the specified food text by extracting information from a short unstructured food text (usually an ingredient line and returns the following structured data for the text: quantity, measure and food,) and if available: diet, health and allergen labels for the text. With the built in food logging feature, this allows for change of context. For example, “rice” will normally be matched to raw rice while, with the food logging feature on, it will match to ready to eat ‘cooked rice.’

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  
https://lucid.app/lucidchart/0474b164-70b1-4b4a-bee3-e6b0df7e9397/view?page=0_0#### MVP/PostMVP
#### MVP 


- Find and use external api 
- Render data on page 
- code it all right.
- Allow user to save a log of info.

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second storage for multiple days.


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Aug 29-30| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|August 30| Project Approval | complete
|Aug 30-31| Core Application Structure (HTML, CSS, etc.) | Complete
|Aug 31-1| Pseudocode / actual code | complete
|Sep 1-2| Initial Clickable Model  | complete
|Sep 2-3| MVP | complete
|Sep 3-4| Presentations | complete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes
https://lucid.app/lucidchart/0474b164-70b1-4b4a-bee3-e6b0df7e9397/view?page=0_0#### MVP/PostMVP
## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

function processCarbs(response) {
  let ul = document.getElementById('nutrition');
  
    let li = document.createElement('li');
  ul.appendChild(li).innerHTML = `${response.data.totalNutrients['CHOCDF'].label} ${response.data.totalNutrients['CHOCDF'].quantity}`;

}

proud of this code because it took a while to for me to figure out how to use an API.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
