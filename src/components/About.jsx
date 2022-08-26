import { useState } from "react";

function About() {
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold"> About: </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-2xl font-bold pl-2">About page TBD</h3>
        <br />
      </div>
    );
}

export default About;
