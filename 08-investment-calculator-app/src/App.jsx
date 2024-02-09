import { useState } from "react";
import GroupInputs from "./components/GroupInputs";
import { calculateInvestmentResults } from "./util/investment.js";
import ResultTable from "./components/ResultTable.jsx";
import Error from "./components/Error.jsx";



function deriveResults(investment) {
  const results = calculateInvestmentResults(investment);
  const formatResult = results.map((result) => {
    return {
      year: result.year,
      interest: result.interest,
      valueEndOfYear: result.valueEndOfYear,
      annualInvestment: result.annualInvestment,
    };
  });

  // console.log("formatResult: ", formatResult);
  return formatResult;
}


function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const formatedResult = deriveResults(investment);
  
  function handleInputChange(event, identifier) {
    
    // console.log("---> Handle Input Change\n"+"identifier: ", identifier);
    // convert in case of number
    // check value is NaN OR NOT

    const value = isNaN(event.target.value) ? 0 : Number(event.target.value);
    console.log("value: ", value);
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [identifier]: value, // override the property that matches the identifier
      }});
    }
    
    function validateInvestment(investment) {
      if (!investment.duration) return <Error message="Duration must be greater than 0" />;
      if (!investment.expectedReturn) return <Error message="Expected return must be greater than 0" />;
      if (!investment.initialInvestment) return <Error message="Initial investment must be greater than 0" />;
      if (!investment.annualInvestment) return <Error message="Annual investment must be greater than 0" />;
    
      return <ResultTable formatedResult={formatedResult} />;
    }

  return (
    <>
    <GroupInputs onInputChange={handleInputChange} investment={investment} />
    
    {validateInvestment(investment)}
    </>
  );
}

export default App
