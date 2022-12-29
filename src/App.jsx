import Header from './components/header/Header'
import StudentTable from './components/table/StudentTable'
import TableHeader from './components/table/TableHeader';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';


function App() {


  const [studentList, setStudentList] = useState([]);
  
  const [currPage, setPage] = useState(1);
  const [numItemsPerPage,setNumItemsPP]= useState(8);

  

  useEffect(() => {
    axios.get('http://localhost:8000/students')
    .then((response) => {
      setStudentList(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div className="container-fluid m-1">
        <div className="row">
            <div className="col-12">
              <Header />
              <TableHeader studentList={studentList} setStudentList={setStudentList}/>
              <StudentTable
                studentList={studentList}
                currentPage={currPage}
                numItemsPerPage={numItemsPerPage}
                setStudentList={setStudentList}
              />


            </div>
        </div>
    </div>


  )
}

export default App
