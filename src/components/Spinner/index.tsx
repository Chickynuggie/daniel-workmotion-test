import React from "react";
import { Spin } from "antd";
import { connect } from "react-redux";
import State from "../../models/State";

const Spinner = (props: any) => {
  const { isSpinning } = props;

  return isSpinning ? (
    <div className="spinner">
      <Spin tip="Loading..." size="large"></Spin>
    </div>
  ) : null;
};

const mapStateToProps = (state: State) => {
  const { isSpinning } = state.spinner;
  return { isSpinning };
};

export default connect(mapStateToProps)(Spinner);
