import React, { useEffect } from "react";
import {connect} from 'react-redux'
import {fetchTechs} from '../redux/actions/techs'
import TechItem from './TechItem'

const TechListModal = ({techs, fetchTechs}) => {

  useEffect((_) => {
    fetchTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techs: state.techs.techs
})

export default connect(mapStateToProps, {fetchTechs})(TechListModal);
