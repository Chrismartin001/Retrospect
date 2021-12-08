import React from "react";

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((rev, i) => {
        return (
          <section key={i} className="website-card">
            <h4>{rev.name}</h4>
            <p>{rev.timestamp}</p>
            <p>{rev.review}</p>
            <div className="card-bottom"></div>
          </section>
        );
      })}
    </div>
  );
}
