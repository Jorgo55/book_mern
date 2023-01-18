// import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import * as yup from "yup";
import React from "react";

const Form = () => {
  const [form, setForm] = useState({
    Title: "",
    image: "",
    Chapters: "",
    genre: "",
    volume1: "",
    volume2: "",
    volume3: "",
    description: "",
  });
  const [feErrors, setFeErrors] = useState("");
  const [beErrors, setBeErrors] = useState("");

  const navigate = useNavigate();

  // let formSchema = yup.object().shape({
  //   Title: yup
  //     .string()
  //     .min(6, "Title must be at least 6 characters")
  //     .required("Title is required"),
  //   genre: yup.string().required("genre is required"),

  //   description: yup
  //     .string()
  //     .min(6, "Description must be at least 6 characters")
  //     .required("Description is required"),
  // });


  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setErrors([]); // reset errors

  //   formSchema
  //     .validate(form, { abortEarly: false })
  //     .then(() => {
  //       // form is valid, submit form data using axios
  //       axios
  //         .post("http://localhost:8000/api/createBook", form)
  //         .then((response) => {
  //           console.log(response);
  //           navigate("/");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((error) => {
  //       // validateForm will throw an error if any field is invalid
  //       // the error object will contain a property for each invalid field, with the error message
  //       const validationErrors = error.inner.reduce((errors, fieldError) => {
  //         errors[fieldError.path] = fieldError.message;
  //         console.log(errors);
  //         return errors;
  //       }, []);
  //       setErrors(validationErrors);
  //     });
  // }

  const setChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (
      e.target.value.length < 3 &&
      (e.target.name === "Title" || e.target.name === "Description")
    ) {
      setFeErrors("(*) Mandatory fields can't be less than 3 characters!");
    } else {
      setFeErrors("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.Title === "" || form.description === "") {
      setFeErrors("(*) Mandatory fields can't be empty!");
    } else if (form.Title.length < 3 && form.Title === "") {
      setFeErrors("(*) Mandatory fields can't be less than 3 characters!");
    } else if (feErrors !== "") {
      navigate("/");
    } else {
      axios
        .post("http://localhost:8000/api/createBook", form)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data);
          setBeErrors(err.response.data.err.errors.Title.kind);
          console.log(err.response.data.err.errors.Title.kind);
          navigate("/");
          alert("This Pet Name already exists!")
        });
    }
  };

  return (
    <div className="container">
      {/* <NavLink to="/">Home</NavLink> */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="row">
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="exampleInputEmail1">Title *</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter Title"
              name="Title"
              onChange={setChange}

              // value={form.name}
            />
            {beErrors === "unique" ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                Name must be unique!
              </p>
            ) : (
              ""
            )}
             {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.description && beErrors.description.message}
              </p>
            ) : (
              ""
            )}{" "}
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label>Image</label>
            <input
              type="text"
              className="form-control"
              placeholder="url"
              name="image"
              onChange={setChange}
              // value={form.email}
            />{" "}
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label className="form-label">Chapters:</label>
            <select
              className="form-control"
              name="Chapters"
              onChange={setChange}
            >
              <option>Select a Chapter:</option>
              <option value="Chapter 1">Chapter 1</option>
              <option value="Chapter 2">Chapter 2</option>
              <option value="Chapter 3">Chapter 3</option>
            </select>
            {/* {errors.Chapters && <span>{errors.Chapters}</span>} */}
          </div>{" "}
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label className="form-label">Genre:</label>
            <select className="form-control" name="genre" onChange={setChange}>
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
                />
                <label htmlFor="scales">Volume 1</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="volume2"
                  onChange={setChange}
                />
                <label htmlFor="horns">Volume 2</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="volume3"
                  onChange={setChange}
                />
                <label htmlFor="horns">Volume 3</label>
              </div>
            </fieldset>
          </div>{" "}
          <div className="mb-3 col-md-12 col-lg-12 col-12">
            <label>Description *</label>
            <textarea
              name="description"
              className="form-control"
              cols="30"
              rows="5"
              onChange={setChange}
              // value={form.description}
            ></textarea>
            {beErrors ? (
              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                {beErrors.description && beErrors.description.message}
              </p>
            ) : (
              ""
            )}{" "}
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
      {feErrors ? (
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          {feErrors}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
