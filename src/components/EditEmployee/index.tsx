import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Drawer, Form } from "antd";
import { clearFocusedEmployee } from "../../redux/actions/employees";
import EmployeeForm from "../EmployeeForm";

import State from "../../models/State";

const EditEmployee = (props: any) => {
  const { focused, clearFocusedEmployee } = props;
  const [isDrawerOpen, showDrawer] = useState(!!focused);

  useEffect(() => {
    showDrawer(!!focused);
  }, [focused])

  const form = Form.useForm();

  const handleOnClose = () => {
    clearFocusedEmployee();
    showDrawer(false);
  };

  return (
      <Drawer
        title="Edit employee"
        onClose={handleOnClose}
        width={720}
        destroyOnClose={true}
        visible={isDrawerOpen}
      >
        <Form layout="vertical" hideRequiredMark initialValues={props?.focused} name="editEmployeeForm">
          <EmployeeForm></EmployeeForm>
        </Form>
      </Drawer>
  );
};

const mapStateToProps = (state: State) => {
  const { focused } = state.employees;
  return { focused };
};

export default connect(mapStateToProps, { clearFocusedEmployee })(EditEmployee);
