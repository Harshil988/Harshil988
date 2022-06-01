// import logo from './logo.svg';
// import './App.css';
import Contect from './Contect';
import Table from './Table';
import List from './List';
import Edit from './Edit';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div >
      <div>
        <Contect />

      </div>
      <Routes>
        <Route>
          <Route exact path="/" element={<Table />} />
          <Route path="/dashboard" element={<Contect />} />
          <Route path="/contectlist" element={<Table />} />
          <Route path="/newcontectlist" element={<List />} />
          <Route path="/Editlist/:id" element={<Edit />} />
          <Route path="*" element={<Contect />} />


        </Route>

      </Routes>


    </div>
  );
}

export default App;
