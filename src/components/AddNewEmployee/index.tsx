import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { Drawer, Form, Button, Col, Row, Input, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getEmployees } from "../../redux/actions/employees";
import NewEmployee from "../../models/NewEmployee";
import { createEmployee } from "../../api";

const { Option } = Select;

const AddNewEmployee = (props: any) => {
  const { getEmployees } = props;
  const [isDrawerOpen, showDrawer] = useState(false);
  const [form] = Form.useForm();

  const submit = (values: NewEmployee) => {
    values.id = uuidv4();
    createEmployee(values).then(resp => {
      getEmployees();
      showDrawer(false);
      form.resetFields();
    });
  };

  return (
    <div className="add-new-employee">
      <Button
        type="primary"
        onClick={() => showDrawer(!isDrawerOpen)}
        icon={<PlusOutlined />}
      >
        Add new employee
      </Button>
      <Drawer
        title="Add new employee"
        onClose={() => showDrawer(false)}
        width={720}
        visible={isDrawerOpen}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form layout="vertical" hideRequiredMark onFinish={submit} form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First name"
                rules={[{ required: true, message: "Please enter first name" }]}
              >
                <Input placeholder="Please enter first name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last name"
                rules={[{ required: true, message: "Please enter last name" }]}
              >
                <Input placeholder="Please enter last name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status"
                rules={[
                  { required: true, message: "Please select employee status" },
                ]}
              >
                <Select placeholder="Please select employee status">
                  <Option value="ADDED">Added</Option>
                  <Option value="IN-CHECK">In check</Option>
                  <Option value="APPROVED">Approved</Option>
                  <Option value="ACTIVE">Active</Option>
                  <Option value="INACTIVE">In check</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
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

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { getEmployees })(AddNewEmployee);
