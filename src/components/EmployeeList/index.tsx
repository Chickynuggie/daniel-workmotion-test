import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, Avatar, Pagination } from "antd";
import { getEmployees } from "../../redux/actions/employees";
import Employee from "../../models/Employee";
import State from "../../models/State";
import mocklogo from "../../assets/mocklogo_reduced.png";

const EmployeeList = (props: any) => {
  const { filteredEmployees, getEmployees } = props;

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const [page, updatePageNumber] = useState(1);
  const pageSize = 4;

  return (
    filteredEmployees && (
      <div className="employee-list">
        {filteredEmployees
          .slice((page - 1) * pageSize, page * pageSize)
          .map((employee: Employee) => (
            <Card
              key={employee.id}
              className="employee-card"
              cover={<img alt="workmotion cover image" src={mocklogo} />}
            >
              <Card.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
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
      </div>
    )
  );
};

const mapStateToProps = (state: State) => {
  const { filteredEmployees } = state.employees;

  return {
    filteredEmployees,
  };
};

export default connect(mapStateToProps, { getEmployees })(EmployeeList);
