import React from 'react';
import {useState} from 'react';

const TableRow = ({student}) => {
    const {id, fname, lname, num, dept} = student;

    return (
        <tr key={id}>
            <td className="name-surname-col">{fname+" "+lname}</td>
            <td className="stud-id-col">{num}</td>
            <td className="dep-col">{dept}</td>
            <td className="btns-col button-row d-flex gap-1">
                <button className="btn btn-primary btn-sm">Düzenle</button>
                <button className="btn btn-danger btn-sm">Sil</button>
                <button className="btn btn-success btn-sm">Yetkiler</button>
            </td>
        </tr>
    );
}

export default TableRow;
