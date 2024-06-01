import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const isValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <UserInput userInput={userInput} handleChange={handleChange} />
      {isValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please input a duration more than 0</p>
      )}
    </main>
  );
}

export default App;
