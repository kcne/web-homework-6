import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function EditModal(props) {
  const [validated, setValidated] = useState(false);
  const [studentInput, setStudentInput] = useState({
    fname: "",
    lname: "",
    num: "",
    pob: "",
    dob: "",
  });

 
setStudentInput({
                    fname: props.student.fname,
                    lname: props.student.lname,
                    num: props.student.num,
                    pob: props.student.pob,
                    dob: props.student.dob,
                });

const studId = props.student._id;
  

  const handleInput = (e) => {
    setStudentInput({ ...studentInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    //send post request to server
    const response = axios.put('http://localhost:8000/students/'+ studId, studentInput)
    .then((response) => {
      // pass data to a parent component
      props.setStudentList([...props.studentList, response.data]);
    })
    .catch((error) => {
      console.log(error);
    });

    setValidated(true);
    props.onHide();
  };
  return (
    <>
      <Modal {...props}>
        <form id="add-student-form" className="modal-content was-validated" validated={validated} onSubmit={(e)=> handleSubmit(e)} noValidate>
          <div className="modal-header">
              <h5 className="modal-title d-inline-flex align-items-center gap-1" id="exampleModalLabel"><i
                      className="bi bi-exclamation-circle-fill text-primary"></i> Eklenecek oğrenci
                  belgeler</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                  aria-label="Close" onClick={props.onHide}></button>
          </div>
          <div className="modal-body container-fluid">
              <div className="modal-body row">
                  <div className="m-form-field col-lg-6 col-md-6 col-sm-12 col-12">
                      <label className="form-label bold" htmlFor="name-input">Isim</label>
                      <input id="name-input" name ="fname" type="text" className="form-control add-form-input"
                          placeholder="Cem" aria-label="Username" pattern="[a-zA-ZçÇğĞıİşŞöÖüÜ]{3,}"
                          required defaultValue={studentInput.fname} onInput={(e)=> handleInput(e)} />
                      <div className="invalid-feedback">
                          İsim en az 3 harf içermelidir.
                      </div>
                  </div>
                  <div className="m-form-field col-lg-6 col-md-6 col-sm-12 col-12">
                      <label htmlFor="surname-input" className="form-label">Soyisim</label>
                      <input id="surname-input" type="text"  name ="lname" className="form-control add-form-input"
                          pattern="[a-zA-ZçÇğĞıİşŞöÖüÜ]{3,}" placeholder="Kurt" aria-label="Surname"
                          defaultValue={studentInput.lname} onInput={(e)=> handleInput(e)}
                          required />
                      <div className="invalid-feedback">
                          Soyisim en az 3 harf içermelidir.
                      </div>
                  </div>
                  <div className="m-form-field col-lg-6 col-md-6 col-sm-12 col-12">
                      <label htmlFor="stud-id-input" className="form-label">Oğrenci Numarası</label>
                      <input id="stud-id-input" type="text" name ="num" className="form-control add-form-input"
                          pattern="^[0-9]{12}$" placeholder="152120161100" aria-label="StudentID"
                          defaultValue={studentInput.num} onInput={(e)=> handleInput(e)}
                          required />
                      <div className="invalid-feedback">
                          Oğrenci numarası 12 rakam içermelidir
                      </div>
                  </div>

                  <div className="m-form-field col-lg-6 col-md-6 col-sm-12 col-12">
                      <label htmlFor="dep-input" className="form-label">Bölüm:</label>
                      <select className="form-select" name ="dept" id="dep-input" placeholder="Bolum Seciniz" 
                      defaultValue={studentInput.dept} onInput={(e)=> handleInput(e)} required>
                          <option value="" defaultChecked>Bölüm Seçiniz</option>
                          <option value="1">Bilgisayar Müh.</option>
                          <option value="2">Elektrik-Elektronik Müh.</option>
                          <option value="3">Endüstri Müh.</option>
                          <option value="4">İnşaat Müh.</option>
                      </select>
                      <div className="invalid-feedback">
                          Bölüm seçiniz
                      </div>
                  </div>

                  <div className="m-form-field col-lg-6 col-md-6 col-sm-12 col-12">
                      <label htmlFor="" className="form-label">Doğum Yeri</label>
                      <input type="text" name ="pob" className="form-control add-form-input"
                          placeholder="Malatya" pattern="[a-zA-ZçÇğĞıİşŞöÖüÜ]{3,}"
                          aria-label="PlaceOfBirth" 
                          defaultValue={studentInput.pob} onInput={(e)=> handleInput(e)}
                          required/>
                      <div className="invalid-feedback">
                          Doğum yeri en az 3 harf içermelidir
                      </div>
                  </div>
                  <div className="m-form-field col-lg-6 col-md-6 col-sm-12 col-12">
                      <label htmlFor="" className="form-label">Doğum Tarihi</label>
                      <input id="date-of-birth" name ="dob" type="date" className="form-control add-form-input"
                          placeholder="Username" aria-label="Username" 
                          defaultValue={studentInput.dob} onInput={(e)=> handleInput(e)}
                           required />
                      <div className="invalid-feedback">
                          Doğum tarihini seçiniz
                      </div>
                  </div>
              </div>
              <div className="modal-footer">
                  <button id="add-student-close" type="button" className="btn btn-secondary"
                      onClick={props.onHide}>Kapat</button>
                  <button id="add-student" type="submit" htmlFor="add-student-form"
                      className="btn btn-primary">Kaydet</button>
              </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default EditModal;