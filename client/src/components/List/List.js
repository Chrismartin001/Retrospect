import React from "react";
import "./List.scss";
import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <div>
      <article>
        <h2 className="websiteList-title">Website List</h2>
        {props.websiteVid.map((web, i) => {
          return (
            <section key={i} className="website-card">
              <h3>{web.title}</h3>
              <h4>{web.reviews.name}</h4>
              <p>{web.timestamp}</p>
              <p>{web.description}</p>
              <div className="card-bottom">
                <p>{web.likes}</p>
                <Link to={`/websites/${web.id}`}>
                  <button className="card-bottom__button">Reviews</button>
                </Link>
              </div>
            </section>
          );
        })}
      </article>
    </div>
  );
}
