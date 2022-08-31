import { useState } from "react";
import Loading from "./Loading";

function About() {
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-4xl text-center"> About </h3>
        <br />
        <Loading />
      </div>
    );
  } else
    return (
      <div className="m-auto flex flex-col justify-center items-center">
        <h3 className="text-4xl text-center "> About </h3>
        <br />
        <div className="bg-teal-200 shadow-md rounded px-6 mb-4 w-4/5 min-h-96 flex flex-col items-center">
          <h2 className="font-bold text-xl py-6 underline">
            What is NC-Games?
          </h2>
          <p className="pb-5">
            NC-Games is an application that serves news data in a similar manner
            to websites such as Reddit. It is a social website designed to The
            purpose of the site is to replicate an online community that
            facilitate board game ratings and discussion. Northcoders Games has
            game reviews which are divided into categories. Each review has user
            curated ratings which can be up or down voted using the API. Users
            can also add comments about a review. This site was created with the
            intention to consolidate my understanding of making a C.R.U.D
            application from a front end perspective.
          </p>
          <p className="font-semibold">
            This website has the functionality to:
          </p>
          <div className="w-4/5 flex flex-col items-center">
            <ul className="inline-block text-left">
              <li className="list-disc">Log in as a pre-determined user </li>
              <li className="list-disc">
                View board game categories and add to these categories
              </li>
              <li className="list-disc">
                View and filter reviews by different criteria, including
                pagination
              </li>
              <li className="list-disc">Add comments to reviews</li>
              <li className="list-disc">
                Upvote and downvote reviews and comments
              </li>
              <li className="list-disc">
                Delete your own reviews and comments
              </li>
            </ul>
          </div>
          <br />
        </div>
        <div className="bg-teal-300 shadow-md rounded px-6 py-6 mb-4 w-4/5 min-h-96 flex flex-col items-center">
          <h3 className="font-bold text-xl pb-5 underline"> Tailwind CSS</h3>
          <p className="pb-5">
            I created this project to focus on developing my CSS skills, in
            particular using a CSS framework for the first time - I chose
            Tailwind due to the rising popularity of this library. Tailwind and
            React were used to create all of the elements you can see on the
            website, including organising the grid of reviews.
          </p>
          <p className="pb-5">
            I created my own button component, which was then adapted slightly
            throughout the site to create a stylised theme. The colour pallete
            is minimal and simple to continue this theme.
          </p>
          <p>
            Overall, I found working with Tailwind intuitive, I am therefore
            looking to use this library further. My next step in this project
            will be to use Javascript and Tailwind to add animations to my site.
          </p>
        </div>
        <div className="bg-teal-200 shadow-md rounded px-6 py-6 mb-4 w-4/5 min-h-96 flex flex-col items-center">
          <h3 className="font-bold text-xl pb-6 underline">React Hooks </h3>
          <p className="pb-5">
            This site utilises React hooks: useState and useEffect that allows
            it to create and store variables. These variables can then be
            updated over time, and React will update our UI and the rendered
            html, whenever that state value is updated.
          </p>
          <p className="pb-5">
            UseState is used to track the variables that are just available on
            the current page, such as the cards in the binder and the users to
            log in as. UseState is also used to operate the search function,
            with the reset button setting state back to null.
          </p>
          <p>
            UseEffect is used to hold the current user logged it, as it is used
            across multiple pages of the website. This information determines
            who you post reviews and comments as, as well as which posts you can
            delete.
          </p>
        </div>
        <div className="bg-teal-300 shadow-md rounded px-6 py-6 mb-4 w-4/5 min-h-96 flex flex-col items-center">
          <h3 className="font-bold text-xl pb-6 underline">
            How to Interact with this Site
          </h3>
          <p className="pb-5">
            At the application's homepage, you will intially be sent to an About
            page, providing more detail about how to navigate the site and the
            purpose of it. From here you can use the dropdown navigation menu to
            navigate the site.
          </p>
          <p className="pb-5">
            The reviews page shows a number of reviews which can be flitered and
            navigated through pagination. Users can interact with selected
            articles by upvoting / downvoting and by posting comments, as well
            as posting a new review of a board game. The Categories page also
            shows all of the board game categories that are available, from here
            you can add a new category.
          </p>
          <p>
            The application has a default user logged in (tickle122), but this
            can be changed from the log in page, allowing you to post reviews
            and comments as a different user. The website also only shows the
            delete button on posts made by the user you are logged in as.
          </p>
        </div>
      </div>
    );
}

export default About;
