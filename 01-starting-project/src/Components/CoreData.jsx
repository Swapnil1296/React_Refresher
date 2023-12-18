import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";
import Section from "./Section";

const CoreData = () => {
  return (
    <>
      {" "}
      <Section id="core-concepts" title="Time to get started!">
        <h2></h2>
        {/* Below are the four different ways to pass data as props */}
        <ul>
          {/* way to pass hardcoded data */}
          {/* <CoreConcepts
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg}
            /> */}
          {/*  if the data is in array of object formate we can use belows methods called array destructuring */}
          {/* <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}
          {/* or we can use spread operator to pass by destructuring  the data */}
          {/* <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />  */}

          {/* or you can map the data like below by using the spread operators */}
          {/* {CORE_CONCEPTS &&
              CORE_CONCEPTS.map((conceptItems, index) => (
                <CoreConcepts {...CORE_CONCEPTS[index]} key={index} />
              ))} */}
          {/* or you can use following method to spread the data directly without extracting by number */}
          {CORE_CONCEPTS &&
            CORE_CONCEPTS.map((conceptItems, index) => (
              <CoreConcepts {...conceptItems} key={conceptItems.title} />
            ))}
        </ul>
      </Section>
    </>
  );
};

export default CoreData;
