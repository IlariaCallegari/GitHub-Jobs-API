# GitHub Jobs API web app solution

This was a solution to the GitHub Job API web app challenge on Frontend Mentor.

ATTENTION: The GitHub Job API has been deprecated. This app is no longer working, but you can still see the original code. Go to [DevJobs App](https://github.com/IlariaCallegari/dev-job-app) to see the refactor code to fetch data from a JSON file instead. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

## My process

### Built with

- Semantic HTML5 markup
- CSS-in-JS
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- Costum elements from [Material UI](https://material-ui.com/)
- [React-Router-DOM](https://reactrouter.com/)

### What I learned
This project was quite a challenge! I struggled a fair bit and took me a few weeks to get to the end of it- I am sure, there are probably more polished and orthodox ways of tackling some of the obstacles I encountered, but nonetheless I am proud of this app.
- I faced some troubles in fetching the data from the GitHub Job API because of restrictive cross-origin specifications. This gave me the opportunity to learn more about CORS and what can be done to overcome these restrictive policies. 
- I had to learn how to polish and use the data that were returning from the API, and I’ve created a few helper functions for this - have a look at them in the utils/helpers.js file. 
- I had to deploy the project in Vercel a few times, because of errors happening at building time. This gave me the opportunity to understand better how the development and production processes differ.


## Author

- Website - [Ilaria Callegari](https://www.ilariacallegari.com)
- GitHub - [@ilariacallegari](https://github.com/IlariaCallegari/)