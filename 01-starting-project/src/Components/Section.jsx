import React from "react";

const Section = ({ children, title, ...props }) => {
  // we have created a wraper component here but problem is that we
  // are not able to pass the css to the section file now as react doesn't automatically
  // provied css to its INNER ELEMENT.
  // to solve this we can pass id to this as prop but
  // there is another simpler way ...props
  // this automatically provides all the remaining props to the INNER ELEMENT where we executed it.

  return (
    //   in this case we want to pass a style id to section element
    // now you can pass anything to it custom style / className / onclick events
    // THIS IS CALLED PROP FORWARDING
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
