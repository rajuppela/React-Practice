import './App.css';
import ImageComponent from './components/functional-components/images/image';
import EmpSalary from './components/functional-components/lists/conditional-render';
import EmpList from './components/functional-components/lists/list';
import TableComponent from './components/functional-components/tables/table';

function App() {
  return (
    <div className="App">
      {/* <ImageComponent/>
      <TableComponent/> */}
      <EmpList/>
      {/* <EmpSalary/> */}
    </div>
  );
}

export default App;
