import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams("");
  const navigate = useNavigate();
  const [form, setForm] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getBook/${id}`)
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  function deleteHandler() {
    axios
      .delete(`http://localhost:8000/api/deleteOneBook/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-3 ">
      <Card sx={{ minWidth: 320 }}>
        <CardContent>
          {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
          <div className="add_btn">
            <NavLink to={`/edit/${form._id}`}>
              <button className="btn btn-primary mx-2">update</button>{" "}
            </NavLink>
            <button onClick={deleteHandler} className="btn btn-danger">
              delete
            </button>
          </div>
          <div className="d-flex">
            <div className="left_view">
              <h3 className="mt-3">
                Title: <span>{form.Title} </span>
              </h3>
              <div>
                <p>Image:</p>
                <img
                  alt=""
                  src={form.image}
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <p>
                Chapters: <span>{form.Chapters}</span>
              </p>
              <p>
                genre:
                <span> {form.genre}</span>
              </p>
            </div>
            <div className="right_view ">
              <p className="mt-3">
                Volumes: <span>{form.volume1 === "on" ? "volume 1" : ""}</span>
                <span> {form.volume2 === "on" ? "volume 2" : ""}</span>
                <span> {form.volume3 === "on" ? "volume 3" : ""}</span>
              </p>
              <p className="mt-3">
                Description:
                <span>{form.description}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
