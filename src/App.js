import React, { useState } from "react";
import "./App.css";
import plusIcon from "./plus.png";
import minusIcon from "./minus.png";
import deleteIcon from "./delete.png";

let currency = {
  dollar: "$",
  pound: "£",
  euro: "€",
  rupee: "₹",
};
function App() {
  const departmentOptions = [
    {value: '', text: '--Choose a Department--'},
    {value: 'Marketing', text: 'Marketing'},
    {value: 'Finance', text: 'Finance'},
    {value: 'Sales', text: 'Sales'},
    {value: 'HumanResource', text: 'Human Resources'},
    {value: 'IT', text: 'IT'},
  ];
  const typeOptions = [
    {value: 'Add', text: 'Add'},
    {value: 'Subtract', text: 'Subtract'},
  ];

  const [budget, setBudget] = useState(2000);
  const [currencyValue, setCurrencyValue] = useState("$");
  let [marketingValue, setMarketingValue] = useState(50);
  let [financeValue, setfinanceValue] = useState(300);
  let [salesValue, setsalesValue] = useState(70);
  let [humanResourceValue, sethumanResourceValue] = useState(40);
  let [itValue, setitValue] = useState(500);
  let [department, setDepartment] = useState();
  let [allocationType, setAllocationType] = useState("Add");
  let allocation = 0;
  let spentSoFar =
    marketingValue + financeValue + salesValue + humanResourceValue + itValue;
  let remainingBudget = budget - spentSoFar;
  let key = Object.keys(currency).find(
    (key) => currency[key] === currencyValue
  );

  const departmentChange = event => {
    setDepartment(event.target.value);
  };

  const typeChange = event => {
    setAllocationType(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">Company's Budget Allocation</header>
      <br></br>
      <div className="information">
        <div style={{ backgroundColor: "lightgrey" }} id="budget">
          Budget: &nbsp; {currencyValue}
          <input
            type="number"
            max={20000}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          ></input>
        </div>
        <div style={{ backgroundColor: "chartreuse" }}>
          Remaining: &nbsp;{currencyValue}
          {remainingBudget}
        </div>
        <div style={{ backgroundColor: "lightblue" }}>
          Spent So Far: &nbsp;{currencyValue}
          {spentSoFar}
        </div>
        <div
          className="dropdown"
          style={{ backgroundColor: "lightgreen", width: "15%" }}
        >
          <button className="dropbtn">
            Currency ({currencyValue} {key}) ⮟
          </button>
          <div class="dropdown-content">
            <span onClick={(e) => setCurrencyValue(currency.dollar)}>
              {currency.dollar} Dollar
            </span>
            <span onClick={(e) => setCurrencyValue(currency.pound)}>
              {currency.pound} Pound
            </span>
            <span onClick={(e) => setCurrencyValue(currency.euro)}>
              {currency.euro} Euro
            </span>
            <span onClick={(e) => setCurrencyValue(currency.rupee)}>
              {currency.rupee} Rupee
            </span>
          </div>
        </div>
      </div>
      <div className="allocation">
        <h2>Allocation</h2>
        <table>
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 10</th>
            <td></td>
          </tr>
          <tr>
            <td>Marketing</td>
            <td>
              {currencyValue}
              {marketingValue}
            </td>
            <td onClick={() => {
                if (remainingBudget > 9)
                  setMarketingValue((marketingValue += 10));
                console.log(marketingValue);
              }}>
              <img src={plusIcon}></img>
            </td>
            <td
              onClick={() => {
                if (marketingValue > 9)
                  setMarketingValue((marketingValue -= 10));
                console.log(marketingValue);
              }}
            >
              <img src={minusIcon}></img>
            </td>
            <td>
              <img src={deleteIcon}></img>
            </td>
          </tr>
          <tr>
            <td>Finance</td>
            <td>
              {currencyValue}
              {financeValue}
            </td>
            <td onClick={() => {
                if (remainingBudget > 9) setfinanceValue((financeValue += 10));
                console.log(financeValue);
              }}>
              <img src={plusIcon}></img>
            </td>
            <td
              onClick={() => {
                if (financeValue > 9) setfinanceValue((financeValue -= 10));
                console.log(financeValue);
              }}
            >
              <img src={minusIcon}></img>
            </td>
            <td>
              <img src={deleteIcon}></img>
            </td>
          </tr>
          <tr>
            <td>Sales</td>
            <td>
              {currencyValue}
              {salesValue}
            </td>
            <td onClick={() => {
                if (remainingBudget > 9) setsalesValue((salesValue += 10));
                console.log(salesValue);
              }}>
              <img src={plusIcon}></img>
            </td>
            <td
              onClick={() => {
                if (salesValue > 9) setsalesValue((salesValue -= 10));
                console.log(salesValue);
              }}
            >
              <img src={minusIcon}></img>
            </td>
            <td>
              <img src={deleteIcon}></img>
            </td>
          </tr>
          <tr>
            <td>Human Resource</td>
            <td>
              {currencyValue}
              {humanResourceValue}
            </td>
            <td onClick={() => {
                if (remainingBudget > 9)
                  sethumanResourceValue((humanResourceValue += 10));
                console.log(humanResourceValue);
              }}>
              <img src={plusIcon}></img>
            </td>
            <td
              onClick={() => {
                if (humanResourceValue > 9)
                  sethumanResourceValue((humanResourceValue -= 10));
                console.log(humanResourceValue);
              }}
            >
              <img src={minusIcon}></img>
            </td>
            <td>
              <img src={deleteIcon}></img>
            </td>
          </tr>
          <tr>
            <td>IT</td>
            <td>
              {currencyValue}
              {itValue}
            </td>
            <td  onClick={() => {
                if (remainingBudget > 9) setitValue((itValue += 10));
                console.log(itValue);
              }}>
              <img src={plusIcon}></img>
            </td>
            <td
              onClick={() => {
                if (itValue > 9) setitValue((itValue -= 10));
                console.log(itValue);
              }}
            >
              <img src={minusIcon}></img>
            </td>
            <td>
              <img src={deleteIcon}></img>
            </td>
          </tr>
        </table>
        <h2>Change Allocation</h2>
        <div className="changeAllocation">
          <div>
            Department
            <select value={department} onChange={departmentChange}>
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div>
            Allocation
            <select value={allocationType} onChange={typeChange}>
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div style={{ backgroundColor: "white", marginRight: "0px" }}>
            {currencyValue}
          </div>
          <input type="number" id="changeAllocation" defaultValue={0}></input>
          <button
            id="save"
            onClick={(e) => {
              // setchangeAllocation(changeAllocation = allocation);
              allocation = document.getElementById("changeAllocation").value;
              if (allocationType === "Add" && allocation<=remainingBudget) {
                if (department === "Marketing") setMarketingValue((marketingValue += Number(allocation)));
                else if (department === "Finance") setfinanceValue((financeValue += Number(allocation)));
                else if (department === "Sales") setsalesValue((salesValue += Number(allocation)));
                else if (department === "HumanResource") sethumanResourceValue((humanResourceValue += Number(allocation)));
                else setitValue((itValue += Number(allocation)));
              }
              else if(allocationType === "Subtract"){
                if (department === "Marketing" && Number(allocation)<=marketingValue) setMarketingValue((marketingValue -= Number(allocation)));
                else if (department === "Finance") setfinanceValue((financeValue -= Number(allocation)));
                else if (department === "Sales") setsalesValue((salesValue -= Number(allocation)));
                else if (department === "HumanResource") sethumanResourceValue((humanResourceValue -= Number(allocation)));
                else if(department === "IT") setitValue((itValue -= Number(allocation)));
                else alert("The value cannot exceed remianing funds in " + department);
              }
            else
              alert("The value cannot exceed remaining funds" + currencyValue + remainingBudget);
              console.log(marketingValue);
              console.log(allocationType);
              console.log(allocation);
              console.log(department);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
