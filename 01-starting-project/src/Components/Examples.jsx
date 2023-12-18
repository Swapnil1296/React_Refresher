import React, { useState } from "react";
import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import Section from "./Section";

const Examples = () => {
  //1. Only call hooks inside of a component.
  //2.Only call hooks on the top level.
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log("selected", selectedTopic);
  };

  // FOLLOWING IS ANOTHER WAY TO RENDER THE CONTENT CONDITIONALLY APART FROM
  // USING && LOGICAL OPERATOR WHICH CHECK IF THE GIVEN VALUE IS TRUE THEN
  //RENDER THE VALUE NEXT TO IT ex : !selectedTopic && <p>Please select a Topic.</p>
  // USING TERNARY OPERATOR ex : !selectedTopic ? <p>Please select a Topic.</p> : <div>components</div>
  // following method keeps code clean.
  let tableContent = <p>Please select a Topic.</p>;
  if (selectedTopic) {
    tableContent = (
      <div id="tab-content">
        {/* we are destructuring the object on the basis of key for example if the key is components
             it will render the value of that key here value of component key is a object
             which contains title, description & code, we are extracting that value. */}
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Section id="examples" title="Examples">
        <menu>
          <TabButtons
            onSelect={() => handleSelect("components")}
            isSelected={selectedTopic === "components"}
          >
            {/* the react will not render this text on the page because react doesn't know what
            to do with this text & where to render this text. */}
            {/* to render this content between the components tag , react provides special property
          called CHILDREN/ props.children, we can use this property to render anything on the page like 
          text , complex html structure or anything while passing it between the components tags
           you can also pass another custom components this method is called COMPONENT COMPOSITION */}
            Components
          </TabButtons>
          <TabButtons
            // or we can pass an anonymous function to it.
            // this will also work fine.
            onSelect={function () {
              handleSelect("jsx");
            }}
            isSelected={selectedTopic === "jsx"}
          >
            JSX
          </TabButtons>
          <TabButtons
            onSelect={() => handleSelect("props")}
            isSelected={selectedTopic === "props"}
          >
            Props
          </TabButtons>
          <TabButtons
            onSelect={() => handleSelect("state")}
            isSelected={selectedTopic === "state"}
          >
            State
          </TabButtons>
        </menu>
        {tableContent}
        {/*  WORKING WITH MULTIPLE JSX SLOTS 
        ## in the following component wrapper we are providing two children here 
        1. tableContent as children 
        2. & another is buttons as props
        ## then we are rendering the code written in the TabButtons wrapper in Tabs wrapper
              <Tabs buttons={<>
          <TabButtons
            onSelect={() => handleSelect("props")}
            isSelected={selectedTopic === "props"}
          >
            Props
          </TabButtons>
          <TabButtons
            onSelect={() => handleSelect("state")}
            isSelected={selectedTopic === "state"}
          >
            State
          </TabButtons></>}>
              {tableContent}
              </Tabs>*/}
      </Section>
    </>
  );
};

export default Examples;
