import { formatter } from "../util/investment.js";

export default function ResultTable({ formatedResult }) {
    let totalInterest = 0;
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="center">
            {formatedResult.map((result, index) => {
                return (
                <tr key={index}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(totalInterest += result.interest)}</td>
                    <td>{formatter.format(result.valueEndOfYear - totalInterest)}</td>
                </tr>
                );
            })}
        </tbody>
      </table>
    </>
  );
}
