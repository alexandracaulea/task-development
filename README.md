# Task Development

[![Netlify Status](https://api.netlify.com/api/v1/badges/20d9297c-cda9-4efa-adac-7972ddae5dba/deploy-status)](https://app.netlify.com/sites/bucurestiul-in-culori/deploys)

**This was a code challenge for the company were I am currently a Web Developer Intern**. See the [webpage](https://bucurestiul-in-culori.netlify.app/).

I had to come up with a design to fulfill some requirements.

To brainstorm my ideas I used [Figma](https://www.figma.com/) as the design tool, [Parcel](https://parceljs.org/) as the bundler and [Netlify](https://www.netlify.com/) to host the webpage.

The requirements provided for this webpage were given in my native language.

## Requirements

Create a webpage in HTML, CSS and JavaScript that contains the following 4 components:

1. Title: "Bucureștiul în culori".
2. Text: "Bucureștiul, asemenea multor orașe din România, este văzut ca un oraș predominant gri și mohorât. De aceea, am hotărât să-l colorăm noi în viile culori ale curcubeului".
3. An interactive map:

- The width of the map should be 100% of the viewport width
- The height should be 50% of the viewport height
- Each sector should be highlighted in the colors of the rainbow: _Sector 1_ should be red with 50% opacity, _Sector 2_ should be orange with 50% opacity and so on.

4. A virtual profile with my data:

- Name
- Age
- Email address
- Phone number
- A picture of myself
- A few words about myself

## Even if these were not required by the challenge, I decided to do the following:

- Each sector was highlighted accurately with the coordinates found online.
- In order to avoid unnecessary requests to Google Maps API and to avoid the user downloading unnecessary information I decided to lazy load Google Maps.
- I decided to not provide my Google Maps API Key and restrict it as much as possible for security reasons.

## Installation

1. Clone this repository: `git clone https://github.com/alexandracaulea/task-development.git`.
2. Install project dependencies by running: `npm install`.

## Using this repository

1. For the development run: `npm run dev`.
2. To build run `npm run build`.

## Live Example

See the webpage: https://bucurestiul-in-culori.netlify.app/

<br /><br />

![Webpage gif](bucurestiul-in-culori.gif)
