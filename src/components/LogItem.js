import React from "react";
import Moment from "react-moment";
import {connect} from 'react-redux'
import {deleteLog, setCurrent} from '../redux/actions/logs'

const LogItem = ({ log, deleteLog, setCurrent }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by {' '}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={() => deleteLog(log.id)}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, {deleteLog, setCurrent})(LogItem);