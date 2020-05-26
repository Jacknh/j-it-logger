import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTechs } from "../redux/actions/techs";

const TechSelectOptions = ({ techs, fetchTechs }) => {
  useEffect(() => {
    fetchTechs();
  }, []);

  return techs.map((t) => (
    <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
      {t.firstName} {t.lastName}
    </option>
  ));
};

const mapStateToProps = (state) => ({
  techs: state.techs.techs,
});

export default connect(mapStateToProps, { fetchTechs })(TechSelectOptions);
