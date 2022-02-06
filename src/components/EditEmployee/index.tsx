import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  Drawer,
  Form,
  Row,
  Col,
  Space,
  Button,
  notification,
  Modal,
} from 'antd';
import {
  clearFocusedEmployee,
  getEmployees,
} from '../../redux/actions/employees';
import EmployeeForm from '../EmployeeForm';
import {updateEmployee, deleteEmployee} from '../../api';
import State from '../../models/State';
import NewEmployee from '../../models/NewEmployee';
import {DeleteOutlined} from '@ant-design/icons';
import Employee from '../../models/Employee';

interface editEmployeeProps {
  focused: Employee,
  clearFocusedEmployee: Function,
  getEmployees: Function
}

const EditEmployee = (props: editEmployeeProps) => {
  const {focused, clearFocusedEmployee, getEmployees} = props;
  const [isDrawerOpen, showDrawer] = useState(!!focused);
  const [isModalOpen, showModal] = useState(false);
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    showDrawer(!!focused);
  }, [focused]);

  const handleOnClose = () => {
    clearFocusedEmployee();
    showDrawer(false);
  };

  const submit = (values: NewEmployee) => {
    updateEmployee(focused.id, values).then(() => {
      notification.success({
        message: 'Employee updated',
      });
      getEmployees();
      handleOnClose();
    });
  };

  const handleDeleteEmployee = () => {
    showModal(false);
    deleteEmployee(focused.id).then(() => {
      notification.success({
        message: 'Employee removed',
      });
      getEmployees();
      handleOnClose();
    });
  };

  return (
    <Drawer
      title="Edit employee"
      onClose={handleOnClose}
      width={720}
      destroyOnClose={true}
      visible={isDrawerOpen}
    >
      <Form
        layout="vertical"
        hideRequiredMark
        initialValues={props?.focused}
        onValuesChange={() => setDirty(true)}
        name="editEmployeeForm"
        onFinish={submit}
      >
        <EmployeeForm></EmployeeForm>
        <Row gutter={16}>
          <Col span={12}>
            <Space>
              <Button onClick={() => showDrawer(false)}>Cancel</Button>
              <Button htmlType="submit" type="primary" disabled={!isDirty}>
                Update details
              </Button>
            </Space>
          </Col>
        </Row>
        <div
          style={{
            margin: '30px 0 10px',
            borderBottom: '1px solid red',
            paddingBottom: '5px',
          }}
        >
          Danger zone
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Space>
              <Button
                type="primary"
                danger
                style={{marginTop: '15px'}}
                icon={<DeleteOutlined />}
                onClick={() => showModal(true)}
              >
                Delete employee
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
      <Modal
        title={`Are you sure you wish to permanently remove employee?`}
        visible={isModalOpen}
        onOk={handleDeleteEmployee}
        onCancel={() => showModal(false)}
        okText="Yes, obliterate"
        cancelText="Cancel"
      ></Modal>
    </Drawer>
  );
};

const mapStateToProps = (state: State) => {
  const {focused} = state.employees;
  return {focused};
};

export default connect(mapStateToProps, {clearFocusedEmployee, getEmployees})(
    EditEmployee,
);
