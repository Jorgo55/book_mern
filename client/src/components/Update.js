import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Update = () => {
  const [form, setForm] = useState({
    Title: "",
    Image: "",
    Chapters: "",
    genre: "",
    Volumes: "",
    description: "",
  });

  // const setChange = (e) => {
  //   console.log(e.target.value);
  //   const { name, value } = e.target;
  //   setForm((pre) => {
  //     return {
  //       ...pre,
  //       [name]: value,
  //     };
  //   });
  // };

  // const navigate = useNavigate();
  function setChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/editBook/${id}`, {
        ...form,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  const { id } = useParams("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getBook/${id}`).then((res) => {
      console.log(res.data);
      setForm(res.data);
    });
  }, [id]);
  return (
    <div className="container">
      {/* <NavLink to="/">Home</NavLink> */}
      <form onSubmit={submitHandler} className="mt-4">
        <div className="row">
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter Title"
              name="Title"
              onChange={setChange}
              value={form.Title}
            />
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label>Image</label>
            <input
              type="text"
              className="form-control"
              placeholder="url"
              name="image"
              onChange={setChange}
              value={form.image}
            />{" "}
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label className="form-label">Chapters:</label>
            <select
              className="form-control"
              name="Chapters"
              onChange={setChange}
              value={form.Chapters}
            >
              <option>Select a Chapter:</option>
              <option value="Chapter 1">Chapter 1</option>
              <option value="Chapter 2">Chapter 2</option>
              <option value="Chapter 3">Chapter 3</option>
            </select>
          </div>{" "}
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label className="form-label">Genre:</label>
            <select
              className="form-control"
              name="genre"
              onChange={setChange}
              value={form.genre}
            >
              <option>Select a genre:</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Comedy">Comedy</option>
            </select>
          </div>{" "}
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <fieldset>
              <legend>Volume:</legend>
              <div>
                <input
                  type="checkbox"
                  id="scales"
                  name="volume1"
                  onChange={setChange}
                  value={form.volume1 === "on" ? "volume 1" : ""}
                />
                <label htmlFor="scales">Volume 1</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="volume2"
                  onChange={setChange}
                  value={form.volume2 === "on" ? "volume 2" : ""}
                />
                <label htmlFor="horns">Volume 2</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="volume3"
                  onChange={setChange}
                  value={form.volume3 === "on" ? "volume 3" : ""}
                />
                <label htmlFor="horns">Volume 3</label>
              </div>
            </fieldset>
          </div>{" "}
          <div className="mb-3 col-md-12 col-lg-12 col-12">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              cols="30"
              rows="5"
              onChange={setChange}
              value={form.description}
            ></textarea>
          </div>
          <button
            type="submit"
            // onClick={{ addUser }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
