import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import {  Link } from 'react-router-dom'
import "../components/Home.css";

const Home = () => {
  const [form, setForm] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllBooks")
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  // const { id } = useParams("");

  function deleteHandler() {
    axios
      .delete("http://localhost:8000/api/deleteBook")
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
    window.location.reload(false);
  }
  // const myData = this.state.contacts
  // .sort((a, b) => a.name.localeCompare(b.name))
  // .map((item, i) => <List key={i} data={item} />);

  return (
    <div className="main">
      <div className="add_btn mt-2">
        <NavLink to="/form" className="btn btn-primary ">
          Add Book
        </NavLink>
      </div>
      <div>
        <h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <br />
        <h2>Title:</h2>
        <h2 className="image">Image:</h2>

        <div>
          {form.map((user, index) => {
            return (
              <div key={index} className="d-flex justify-content-between">
                <h4 className="">{user.Title}</h4>
                <div>
                  <img
                    alt=""
                    src={user.image}
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div>
                  <NavLink to={`view/${user._id}`}>
                    <button className="btn btn-success details">details</button>
                  </NavLink>
                  {/* <NavLink to={`edit/${user._id}`}>
                    <button className="btn btn-primary">update</button>
                  </NavLink> */}
                  <button onClick={deleteHandler} className="btn btn-danger">
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
