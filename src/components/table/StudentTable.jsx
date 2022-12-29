import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
// import TableRow from "./TableRow";
import Pagination from "./Pagination";
import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";
import ViewModal from "../modals/ViewModal";
import DeleteModal from "../modals/DeleteModal";

const  StudentTable=({studentList,setStudentList} )=> {

    //pagination
    const [currPage, setPage] = useState(1);
    const [numberOfItemsPP,setNumItemsPP] = useState(8);
    const lastItemIndex=currPage*numberOfItemsPP;
    const firstItemIndex=lastItemIndex-numberOfItemsPP;
    const currentItems=studentList.slice(firstItemIndex, lastItemIndex);
    //modal states
    const [editModalShow, setEditModalShow] = useState(false);
    const [viewModalShow, setViewModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
   
    //modal triggers
    const [count, setCount] = useState(0);

    

    const [editStudent, setEditStudent] = useState({});
    const [viewStudent, setViewStudent] = useState({});
    const [deleteStudent, setDeleteStudent] = useState({}); 

    const [editTrigger, setEditTrigger] = useState(0);
    const [viewTrigger, setViewTrigger] = useState(0);
    const [deleteTrigger, setDeleteTrigger] = useState(0);

    useEffect(() => {
        if(count)
        setEditModalShow(true);
        setCount(count+1);

    }, [editStudent, editTrigger]);

    useEffect(() => {
        if(count)
        setViewModalShow(true);
        setCount(count+1);
    }, [viewStudent,viewTrigger]);

    useEffect(() => {
        if(count)
        setDeleteModalShow(true);
        setCount(count+1);
    }, [deleteStudent,deleteTrigger]);

    function getDepartment(dept){
        switch(dept){
            case 1:
                return "Bilgisayar Mühendisliği";
            case 2:
                return "Elektrik-Elektronik Mühendisliği";
            case 3:
                return "Endüstri Mühendisliği";
            case 4:
                return "İnşaat Mühendisliği";
            default:
                return "Bilinmiyor";
        }}

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
                        <td className="dep-col">{ getDepartment(parseInt(student.dept))}</td>
                        <td className="btns-col button-row d-flex gap-1">
                            <button id="edit" value={student} className="btn btn-primary btn-sm" onClick={(e)=>{setEditStudent(student); setEditTrigger(editTrigger+1)}}>Düzenle</button>
                            <button id="delete" value={student} className="btn btn-danger btn-sm" onClick={(e)=>{setDeleteStudent(student); setDeleteTrigger(deleteTrigger+1)}}>Sil</button>
                            <button id="view" value={student} className="btn btn-success btn-sm" onClick={(e)=>{setViewStudent(student);setViewTrigger(viewTrigger+1)}}>Yetkiler</button>
                        </td>
                    </tr>
                    ))} 
                    </tbody>
                </table>
                <Pagination numItems={studentList.length} currPage={currPage} numItemsPerPage={numberOfItemsPP} setPageSize={setNumItemsPP} setNewPage={setPage} firstItemIndex={firstItemIndex} lastItemIndex={lastItemIndex}/>
                <AddModal/>
                <EditModal student={editStudent} show={editModalShow} studentlist={studentList} setstudentlist={setStudentList}  onHide={() => setEditModalShow(false)}/> 
                <ViewModal student={viewStudent} show={viewModalShow} onHide={() => setViewModalShow(false)}/> 
                <DeleteModal student={deleteStudent} studentList={studentList} setStudentList={setStudentList} show={deleteModalShow} onHide={() => setDeleteModalShow(false)} setPage={setPage} numItemsPerPage={numberOfItemsPP} currPage={currPage} />
            
            </div>
            
     );
}

export default StudentTable;