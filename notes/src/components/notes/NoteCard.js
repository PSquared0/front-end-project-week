import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const NoteCard = props => {
  return (
    <div className="container">
      <div className="card-action">
      </div>
      <Link to={"/note/"+ props.note._id}>  <div className="note-title">  
        <h3>{props.note.title}</h3>
      </div></Link>
      <div className="note-text">
        <h3>{props.note.textBody}</h3>
      </div>
      <div className="note-date">
        <Moment from="2018-11-19">2018-11-11T12:59-0500</Moment>
      </div>
    </div>
  );
};
export default NoteCard;