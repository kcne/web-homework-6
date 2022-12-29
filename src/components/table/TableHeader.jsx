import { useState } from "react";
import AddModal from "../modals/AddModal";
function TableHeader({studentList ,setStudentList}) {
    const [modalShow, setModalShow] = useState(false);
    
    return ( 
        <div className="table-content-heading d-flex justify-content-between mt-5 mb-2">
        <h3><b>Öğrenci Listesi</b></h3>
        <button type="button" className="btn btn-primary" onClick={() => setModalShow(true)}><i className="bi bi-person-plus"></i></button>
        <AddModal show={modalShow} onHide={() => setModalShow(false)} setStudentList={setStudentList} studentList={setStudentList}/>
        </div>
     );
     
}

export default TableHeader;