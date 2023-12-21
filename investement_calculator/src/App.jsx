import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 6000,
    expectedReturn: 6,
    duration: 7,
  });
  const isInputValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isInputValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {isInputValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
