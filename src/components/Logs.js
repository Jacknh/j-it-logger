import React, { useEffect } from "react";
import {connect} from 'react-redux'
import LogItem from './LogItem'
import Preloader from './Preloader'
import {fetchLogs} from '../redux/actions/logs'

const Logs = ({fetchLogs, logs, loading}) => {

  useEffect(() => {
    fetchLogs();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    logs: state.logs.logs,
    loading: state.logs.loading
  }
}

export default connect(mapStateToProps, {fetchLogs})(Logs);
