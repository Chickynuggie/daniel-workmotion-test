import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Pagination } from "antd";
import { getEmployees, setFocusedEmployee } from "../../redux/actions/employees";
import Employee from "../../models/Employee";
import State from "../../models/State";
import mocklogo from "../../assets/mocklogo_reduced.png";
import avatar from "../../assets/avatar.png";
import AddNewEmployee from "../AddNewEmployee";
import EditEmployee from "../EditEmployee";
import Employees from "../../models/Employees";
import EmployeeStates from "../../models/EmployeeStates";

interface EmployeeListProps {
  employees: Array<Employee>,
  getEmployees: Function,
  setFocusedEmployee: Function,
  activeFilter: string
}

const EmployeeList = (props: EmployeeListProps) => {
  const { employees, getEmployees, setFocusedEmployee, activeFilter } = props;

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  useEffect(() => {
    updatePageNumber(1);
  }, [activeFilter]);

  const [page, updatePageNumber] = useState(1);
  const pageSize = 8;
  const filteredEmployees = activeFilter
    ? employees.filter((employee: Employee) => employee.status === activeFilter)
    : employees;

  return (
    filteredEmployees && (
      <div className="employee-list">
        {filteredEmployees
          .slice((page - 1) * pageSize, page * pageSize)
          .map((employee: Employee) => (
            <Card
              onClick={() => setFocusedEmployee(employee)}
              key={employee.id}
              className="employee-card"
              cover={<img alt="workmotion cover" src={mocklogo} />}
            >
              <Card.Meta
                avatar={
                  <Avatar
                    src={`https://i.pravatar.cc/150?u=${employee.id}` || avatar}
                    className="employee-avatar"
                  />
                }
                title={`${employee.firstName} ${employee.lastName}`}
                description={`${employee.status}`}
              />
            </Card>
          ))}
        {filteredEmployees?.length > pageSize && (
          <div className="employee-pagination">
            <Pagination
              current={page}
              total={filteredEmployees?.length}
              defaultCurrent={1}
              pageSize={pageSize}
              onChange={(page) => updatePageNumber(page)}
            />
          </div>
        )}
        <AddNewEmployee></AddNewEmployee>
        <EditEmployee></EditEmployee>
      </div>
    )
  );
};

const mapStateToProps = (state: State) => {
  const { employees } = state.employees;
  const { activeFilter } = state.filter;

  return {
    employees,
    activeFilter,
  };
};

export default connect(mapStateToProps, { getEmployees, setFocusedEmployee })(EmployeeList);
