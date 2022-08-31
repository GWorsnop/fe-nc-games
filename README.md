# NC-Games: My front-end project

Hosted Site: https://gworsnop-nc-games.netlify.app/

(Chrome recommended. You can view NC-Games's mobile-first design by using Chrome DevTools)

---

## Introduction

### This repository contains the front-end NC-Games project. To see the backend repository, visit https://github.com/GWorsnop/nc-games 
### Or to view the hosted API, visit https://nc-games-gworsnop.herokuapp.com/

NC-Games is an application that serves news data in a similar manner to websites such as Reddit. It is a social website designed to The purpose of the site is to replicate an online community that facilitate board game ratings and discussion. Northcoders Games has game reviews which are divided into categories. Each review has user curated ratings which can be up or down voted using the API. Users can also add comments about a review. This site was created with the intention to consolidate my understanding of making a C.R.U.D application from a front end perspective.

### This website has the functionality to:

- Log in as a pre-determined user
- View board game categories and add to these categories
- View and filter reviews by different criteria, including pagination
- Add comments to reviews
- Upvote and downvote reviews and comments
- Delete your own reviews and comments

---

## How to use the site

At the application's homepage, you will intially be sent to an About page, providing more detail about how to navigate the site and the purpose of it. From here you can use the dropdown navigation menu to navigate the site.

The reviews page shows a number of reviews which can be flitered and navigated through pagination. Users can interact with selected articles by upvoting / downvoting and by posting comments, as well as posting a new review of a board game. The Categories page also shows all of the board game categories that are available, from here you can add a new category.

The application has a default user logged in (tickle122), but this can be changed from the log in page, allowing you to post reviews and comments as a different user. The website also only shows the delete button on posts made by the user you are logged in as.

---

## Running the project locally:

1. Fork this repository to your GitHub account

2. Clone your forked repository to your local machine

3. cd to the correct directory _(fe-nc-games)_ and run `npm start`

---

## Recommended Node Version:

- Node: v18.1.0
- It is recommended that you use this version or higher.
