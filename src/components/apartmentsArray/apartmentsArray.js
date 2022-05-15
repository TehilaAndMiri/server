//import React, { useState } from 'react';
//import { useHistory } from "react-router-dom";
import { getApartmentsArray } from '../../API/apartmentsArray';
import {React ,useEffect, useState} from 'react';


export default function apartmentsArray() {
    const [data, setData] = useState([]);

    useEffect(() => {
      var apartments =  getApartmentsArray();
      setData(apartments)
    }, []);
  
    return (
        <div >
        <h1>Simple Inventory Table</h1>
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Unit Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td/>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
    );
    }
    // export default apartmentsArray;