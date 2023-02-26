import React, { useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function Product() {
const[product,setProduct]=useState();
  // fetch data 
  const fetchData = async () => {
      let result = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        },
    });
    result = await result.json();
    console.log(JSON.stringify(result));
    setProduct(result);
  };

  // post data
  const onSubmit = async (data) => {
    // let result = await fetch("http://localhost:5000/post", {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //     },
    // });
    // result = await result.json();
    // console.log(result);
   };
  return (
    <div className="container-fluid">
      <h2 className="mt-4">Product Details</h2>
      <div className="row mt-5">
        <div className="col-6 text-start fw-bold">
          <form>
            <div className="mb-3">
              <label className="form-label ">Product Id</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Product Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Prize</label>
              <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary me-5 px-5" onClick={onSubmit}>
              Add
            </button>
            <button type="submit" className="btn btn-primary px-5" onClick={fetchData}>
              Display
            </button>
          </form>
        </div>
        <div className="col-6">
          <MDBTable align="middle" responsive striped bordered hover>
            <MDBTableHead>
              <tr>
                <th scope="col" className="fw-bold">
                  Product Id
                </th>
                <th scope="col" className="fw-bold">
                  Product Name
                </th>
                <th scope="col" className="fw-bold">
                  Product Prize
                </th>
                <th scope="col" className="fw-bold">
                  Actions
                </th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>
                  <p className="text-muted mb-0">11</p>
                </td>
                <td>
                  <p className="text-muted mb-0">Laptop</p>
                </td>
                <td>
                  <p className="text-muted mb-0">25000</p>
                </td>
                <td>
                  <i className="bi bi-pencil-square me-3"></i>
                  <i className="bi bi-trash3-fill "></i>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
}
