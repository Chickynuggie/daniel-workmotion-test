import React, { useState } from "react";
import { connect } from "react-redux";
import { Drawer, Button, Row, Col, Space, Form, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  getEmployees,
  clearFocusedEmployee,
} from "../../redux/actions/employees";
import EmployeeForm from "../EmployeeForm";
import NewEmployee from "../../models/NewEmployee";
import { createEmployee } from "../../api";
import { v4 as uuidv4 } from "uuid";

import State from "../../models/State";

const AddNewEmployee = (props: any) => {
  const { getEmployees } = props;
  const [isDrawerOpen, showDrawer] = useState(false);

  const submit = (values: NewEmployee) => {
    values.id = uuidv4();
    createEmployee(values).then((resp) => {
      notification.success({
        message: "Success!",
        description: "Employee successfully created",
      });
      showDrawer(false);
      getEmployees();
    });
  };

  return (
    <div className="add-new-employee">
      <Button
        type="primary"
        onClick={() => showDrawer(true)}
        icon={<PlusOutlined />}
      >
        Add new employee
      </Button>
      <Drawer
        title="Add new employee"
        onClose={() => showDrawer(false)}
        destroyOnClose={true}
        width={720}
        visible={isDrawerOpen}
      >
        <Form
          layout="vertical"
          onFinish={submit}
          hideRequiredMark
          name="addEmployeeForm"
        >
          <EmployeeForm></EmployeeForm>
          <Row gutter={16}>
            <Col span={12}>
              <Space>
                <Button onClick={() => showDrawer(false)}>Cancel</Button>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  const { focused } = state.employees;
  return { focused };
};

export default connect(mapStateToProps, { getEmployees, clearFocusedEmployee })(
  AddNewEmployee
);
