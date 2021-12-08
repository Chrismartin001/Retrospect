import React from "react";
import axios from "axios";
import "./Review.scss";

export default function Reviews({ history }) {
  const uploadWebsite = (event) => {
    event.preventDefault();
    const newWebsite = {
      name: event.target.name.value,
      title: event.target.title.value,
      description: event.target.description.value,
      reviews: event.target.reviews,
    };
    axios
      .post("http://localhost:8080/websites", newWebsite)
      .then(() => console.log("Website posted"))
      .catch((err) => {
        console.log(err);
      });
    alert("Website uploaded");
    history.push("/");
  };

  return (
    <article className="upload">
      <h2 className="upload__title">Upload Website</h2>
      <div className="container1">
        <form onSubmit={uploadWebsite} id="Uploading" className="comment1">
          <label className="comment1__lable">WEBSITE NAME:</label>
          <input type="text" name="title" className="comment1__title" required placeholder="Add a title to your website" />
          <label className="comment1__lable">ADD BRIEF DESCRIPTION:</label>
          <input type="text" name="description" className="comment1__description" required placeholder="Add a description to your website" />
          <label className="comment1__lable">NAME:</label>
          <input type="text" name="title" className="comment1__title" required placeholder="Your Name" />
          <label className="comment1__lable">ADD REVIEW:</label>
          <input type="text" name="description" className="comment1__description" required placeholder="Add a Review" />

          <div className="comment1__overlay">
            <button form="Uploading" type="submit" className="comment1__button">
              Publish
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
