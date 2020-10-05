import React from "react";
import "./nav.css";

export const Navi = () => {
  return (
    <div className="lists">
      <div className="next-to-1">
        <img className="icons" src={require('./aim.png')} />
        <span><a href="default.asp">Target Lists</a></span>
      </div>
      <div className="next-to-2">
        <img className="icons" src={require('./user.png')} />
        <span><a href="news.asp">Suppression Lists</a></span>
      </div>
    </div>

  );
};
