import { useState } from "react";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
const  StudentTable=({studentList, currentPage, numItemsPerPage} )=> {
    const [studentListState, setStudentList] = useState([]);
    const [currPage, setPage] = useState(currentPage);
    const setNewPage = (page) => {setPage(page)};

    const lastItemIndex=currPage*numItemsPerPage;
    const firstItemIndex=lastItemIndex-numItemsPerPage;
    const currentItems=studentList.slice(firstItemIndex, lastItemIndex);
    
    
    
    return ( 
            <div className="table-responsive">
                <table id="table-main" className="table-content table table-striped table-hover">
                    <thead className="table-secondary">
                    <tr className="w-100">
                        <th className="name-surname-col" scope="row">İsim Soyisim</th>
                        <th className="stud-id-col" scope="row">Öğrenci Numarası</th>
                        <th className="dep-col" scope="row">Bölüm</th>
                        <th className="btns-col" scope="row">Yetkiler</th>
                    </tr>
                    </thead>
                    <tbody>{currentItems.map((student) => ( 
                        <TableRow key={student.id} student={student} />
                    ))} 
                    </tbody>
                </table>
                <Pagination numItems={studentList.length} currPage={1} numItemsPerPage={8} setNewPage={setNewPage}/>
            </div>
     );
}

export default StudentTable;