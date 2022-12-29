import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useEffect } from 'react';


function DeleteModal(props) {
  const [studentInput, setStudentInput] = useState({
    fname: "",
    lname: "",
  });


  useEffect(() => {
    setStudentInput({
        fname: props.student.fname,
        lname: props.student.lname,
    });
    }, [props.student]);

   const studId = props.student.id;
  
   const deleteStudent = () => {
    axios.delete('http://localhost:8000/students/'+studId)
    .then((response) => {
        console.log(response);
        props.setStudentList(props.studentList.filter((student) => student.id !== studId));
        props.onHide();
    })
    .catch((error) => {
        console.log(error);
    });
    }

  return (
    <>
      <Modal {...props}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title  d-inline-flex align-items-center" id="exampleModalLabel"><i
                            className="bi bi-exclamation-triangle-fill text-danger"
                            style={{paddingRight:"5px", paddingBottom:"5px"}}></i>Oğrenciyi Sil</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                        aria-label="Close" onClick={props.onHide}></button>
                </div>
                <div id="deleteModalBody" className="modal-body">
                    <p id="deleteModalText" className="text-center">{studentInput.fname+" "+ studentInput.lname} Ogrenciyi silmek istediğinize emin misiniz?</p>
                </div>
                <div className="modal-footer">
                    <button id="delete-button-close" type="button" className="btn btn-secondary"
                        data-bs-dismiss="modal" onClick={props.onHide}>Vazgeç</button>
                    <button id="delete-btn-submit" type="button" className="btn btn-danger" onClick={()=>deleteStudent()}>Sil</button>
                </div>
            </div>
      </Modal>
    </>
  );
}

export default DeleteModal;