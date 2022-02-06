import React from 'react';
import {Form, Col, Row, Input, Select} from 'antd';
import {connect} from 'react-redux';

const {Option} = Select;

const EmployeeForm = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[{required: true, message: 'Please enter first name'}]}
          >
            <Input placeholder="Please enter first name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{required: true, message: 'Please enter last name'}]}
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
              {required: true, message: 'Please select employee status'},
            ]}
          >
            <Select placeholder="Please select employee status">
              <Option value="ADDED">Added</Option>
              <Option value="IN-CHECK">In check</Option>
              <Option value="APPROVED">Approved</Option>
              <Option value="ACTIVE">Active</Option>
              <Option value="INACTIVE">Inactive</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(EmployeeForm);
