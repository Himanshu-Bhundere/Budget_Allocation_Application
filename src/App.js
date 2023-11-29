import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Company's Budget Allocation 
      </header>
      <div className='information'>

      </div>
      <div className='allocation'>
        <table>
          <th>
            <td>Department</td>
            <td>Allocated Budget</td>
            <td>Increase by 10</td>
            <td>Decrease by 10</td>
          </th>
        </table>
      </div>
    </div>
  );
}

export default App;
