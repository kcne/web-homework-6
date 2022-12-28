function TableHeader() {
    return ( 
        <div className="table-content-heading d-flex justify-content-between mt-5 mb-2">
        <h3><b>Öğrenci Listesi</b></h3>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal"><i className="bi bi-person-plus"></i></button>
        </div>
     );
}

export default TableHeader;