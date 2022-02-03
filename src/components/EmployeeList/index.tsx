import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";
import { getEmployees } from "../../redux/actions/employees";
import Employee from "../../models/Employee";
import State from "../../models/State";
import mocklogo from "../../assets/mocklogo_reduced.png";

const EmployeeList = (props: any) => {
  const { employees, getEmployees } = props;

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    employees && (
      <div className="employee-list">
        {employees.map((employee: Employee) => (
          <Card
            key={employee.id}
            className="employee-card"
            cover={
              <img alt="workmotion cover image" src={mocklogo} />
            }
          >
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={`${employee.firstName} ${employee.lastName}`}
              description={`${employee.status}`}
            />
          </Card>
        ))}
      </div>
    )
  );
};

const mapStateToProps = (state: State) => {
  const { employees } = state.employees;

  return {
    employees,
  };
};

export default connect(mapStateToProps, { getEmployees })(EmployeeList);
