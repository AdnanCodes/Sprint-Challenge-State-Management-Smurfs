import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const SmurfsGet = props => {
  console.log("Smurfs in my Village(State) right now : ", props.smurfs);
  return (
    <div>
      <h4>Check the Console for state and press the button for state update</h4>
      <button onClick={() => props.getData()}>
        Click here to get some Smurfs
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfsGet);
