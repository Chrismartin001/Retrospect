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
              <p>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                }).format(web.timestamp)}
              </p>
              <p>{web.description}</p>
              <div className="card-bottom">
                <h4>POSTED BY: {web.name}</h4>

                {/* <p>{web.likes}</p> */}
                {/* <Link to={`/reviews/${web.id}`}> */}
                {/* <button className="card-bottom__button">Reviews</button> */}

                {/* </Link> */}
              </div>
              <p className="toggle">{web.reviews}</p>
              <hr />
            </section>
          );
        })}
      </article>
    </div>
  );
}
