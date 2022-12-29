import React from 'react';
import {useState} from 'react';

function Pagination ({numItems, currPage, setNewPage, numItemsPerPage,firstItemIndex,lastItemIndex, setPageSize}){
    
    const numPages = Math.ceil(numItems / numItemsPerPage);
    const pageNums = [];
    
    
    for (let i = 1; i <= numPages; i++) {
        pageNums.push(i);
    }

    return (
        <div className="pagination-row d-flex justify-content-between">
            <div id="p-info" className="pagination-info">
                <p><span className="number-of-students">{numItems}</span> oğrenciden <span className="student-shown">{firstItemIndex+1 + "-" + lastItemIndex + " "}</span>
                arası gösteriliyor</p>
            </div>
        <div id="p-control" className="pagination-control d-flex gap-1">
            {
               pageNums.map((page) => {
                return(
                <button  key={page} className={page==currPage ? "btn-page btn btn-outline-primary btn-page-active" : "btn-page btn btn-outline-primary"} 
                onClick={(e) =>{ setNewPage(page)}}>{page} 
                </button>);
            }) 
            }
        </div>
        

        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input key={5} type="radio" className="btn-check page-size-radio" name="btnradio" id="btnradio1"
                autoComplete="off" onClick={()=>setPageSize(5)} />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">5</label>

            <input key={8} type="radio" className="btn-check page-size-radio" name="btnradio" id="btnradio2"
                onClick={()=>{setPageSize(8); currPage>=numPages ? setNewPage(1) : {} }} autoComplete="off" defaultChecked />
            <label className="btn btn-outline-primary page-size-radio" htmlFor="btnradio2">8</label>

            <input key={10} type="radio" className="btn-check" name="btnradio" id="btnradio3"
                onClick={()=>{setPageSize(10) ;currPage>=numPages ? setNewPage(1) : {}}} autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">10</label>
        </div>
    </div>
    );
}

export default Pagination;
