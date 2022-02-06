import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Drawer, Form, Row, Col, Space, Button, notification } from "antd";
import { clearFocusedEmployee, getEmployees } from "../../redux/actions/employees";
import EmployeeForm from "../EmployeeForm";
import { updateEmployee } from "../../api";
import State from "../../models/State";
import NewEmployee from "../../models/NewEmployee";

const EditEmployee = (props: any) => {
  const { focused, clearFocusedEmployee, getEmployees } = props;
  const [isDrawerOpen, showDrawer] = useState(!!focused);
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    showDrawer(!!focused);
  }, [focused])

  const handleOnClose = () => {
    clearFocusedEmployee();
    showDrawer(false);
  };

  const submit = (values: NewEmployee) => {
    updateEmployee(focused.id, values).then(() => {
      notification.success({
        message: "Employee updated"
      });
      getEmployees()
      handleOnClose();
    })
  }

  return (
      <Drawer
        title="Edit employee"
        onClose={handleOnClose}
        width={720}
        destroyOnClose={true}
        visible={isDrawerOpen}
      >
        <Form layout="vertical" hideRequiredMark initialValues={props?.focused} onValuesChange={() => setDirty(true)} name="editEmployeeForm" onFinish={submit}>
          <EmployeeForm></EmployeeForm>
          <Row gutter={16}>
            <Col span={12}>
              <Space>
                <Button onClick={() => showDrawer(false)}>Cancel</Button>
                <Button htmlType="submit" type="primary" disabled={!isDirty}>
                  Submit
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Drawer>
  );
};

const mapStateToProps = (state: State) => {
  const { focused } = state.employees;
  return { focused };
};

export default connect(mapStateToProps, { clearFocusedEmployee, getEmployees })(EditEmployee);
