import { useState } from "react";
// import TableRow from "./TableRow";
import Pagination from "./Pagination";
import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";
const  StudentTable=({studentList, currentPage, numItemsPerPage} )=> {
    const [currPage, setPage] = useState(currentPage);
    const [numberOfItemsPP,setNumItemsPP] = useState(numItemsPerPage);
    

    const lastItemIndex=currPage*numberOfItemsPP;
    const firstItemIndex=lastItemIndex-numberOfItemsPP;
    const currentItems=studentList.slice(firstItemIndex, lastItemIndex);

    const [editModalShow, setEditModalShow] = useState(false);
    const [tempStudent, setTempStudent] = useState({});

    
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
                        <tr key={student.id}>
                        <td className="name-surname-col">{student.fname+" "+student.lname}</td>
                        <td className="stud-id-col">{student.num}</td>
                        <td className="dep-col">{student.dept}</td>
                        <td className="btns-col button-row d-flex gap-1">
                            <button className="btn btn-primary btn-sm" >Düzenle</button>
                            <button className="btn btn-danger btn-sm">Sil</button>
                            <button className="btn btn-success btn-sm">Yetkiler</button>
                        </td>
                    </tr>
                    ))} 
                    </tbody>
                </table>
                <Pagination numItems={studentList.length} currPage={currPage} numItemsPerPage={numberOfItemsPP} setPageSize={setNumItemsPP} setNewPage={setPage} firstItemIndex={firstItemIndex} lastItemIndex={lastItemIndex}/>
                <AddModal/>
                {/* <EditModal/>  */}
            
            </div>
            
     );
}

export default StudentTable;