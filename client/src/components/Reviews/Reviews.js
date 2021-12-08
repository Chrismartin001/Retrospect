import React from "react";

export default function Reviews(props) {
  return (
    <div>
      {props.websiteVid.reviews.map((reviews, i) => {
        return (
          <section key={i} className="comment-Container">
            <hr className="dividers" />
            <div className="comment-card">
              <figure className="comment-card__avatar" />

              <h2 className="comment-card__name">{reviews.name}</h2>
              <p className="comment-card__date">
                {" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                }).format(reviews.timestamp)}
              </p>
            </div>
            <p className="comment-card__text">{reviews.review}</p>
          </section>
        );
      })}
    </div>
  );
}
