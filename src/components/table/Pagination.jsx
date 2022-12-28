import React from 'react';
import { render } from 'react-dom';

function Pagination ({numItems, currPage, setNewPage, numItemsPerPage}){
    const numPages = Math.ceil(numItems / numItemsPerPage);
    const pageNums = [];
    for (let i = 1; i <= numPages; i++) {
        pageNums.push(i);
    }
    const activeButtonClass = "btn-page btn btn-outline-primary btn-page-active";
    const inactiveButtonClass = "btn-page btn btn-outline-primary";
    return (
        <div className="pagination-row d-flex justify-content-between">
            <div id="p-info" className="pagination-info">
                <p><span className="number-of-students">{numItems}</span> oğrenciden <span className="student-shown">{numItemsPerPage*(currPage-1)+1 + "-" +"todo "  }</span>
                arası gösteriliyor</p>
            </div>
        <div id="p-control" className="pagination-control d-flex gap-1">
            {
                pageNums.map((page) => {
                    console.log(page);
                    return(<button key={page} className={currPage==page ? activeButtonClass : inactiveButtonClass} onClick={() => setNewPage(page)}>{page} </button>);
                })
            
            }
        </div>
        

        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check page-size-radio" name="btnradio" id="btnradio1"
                autoComplete="off" onclick="changePageSize(5)" />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">5</label>

            <input type="radio" className="btn-check page-size-radio" name="btnradio" id="btnradio2"
                onclick="changePageSize(8)" autoComplete="off" checked />
            <label className="btn btn-outline-primary page-size-radio" htmlFor="btnradio2">8</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                onclick="changePageSize(10)" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">10</label>
        </div>
    </div>
    );
}

export default Pagination;
