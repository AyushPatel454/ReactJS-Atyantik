import Input from "./Input";

export default function GroupInputs({investment, onInputChange}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input name="INITIAL INVESTMENT" value={investment.initialInvestment} onInputChange={onInputChange} identifier="initialInvestment" />
        <Input name="ANNUAL INVESTMENT" value={investment.annualInvestment} onInputChange={onInputChange} identifier="annualInvestment" />
      </div>

      <div className="input-group">
        <Input name="EXPECTED RETURN" value={investment.expectedReturn} onInputChange={onInputChange} identifier="expectedReturn" />
        <Input name="DURATION" value={investment.duration} onInputChange={onInputChange} identifier="duration" />
      </div>
    </div>
  );
}
