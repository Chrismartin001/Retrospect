import React from "react";
import "./List.scss";

export default function List(props) {
  return (
    <div>
      <article>
        <h2>Website List</h2>
        {props.websiteVid.map((vid, i) => {
          return (
            <section key={i}>
              <h3>{vid.title}</h3>
              <h4>Person posting</h4>
              <p>Date posted</p>
              <p>Website description</p>
              <p>Rating</p>
            </section>
          );
        })}
      </article>
    </div>
  );
}
