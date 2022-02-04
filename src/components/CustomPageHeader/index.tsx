import { PageHeader, Menu } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import {
  setEmployeeFilter,
  clearEmployeeFilter,
} from "../../redux/actions/filter";
import { connect } from "react-redux";

const CustomPageHeader = (props: any) => {
  const { setEmployeeFilter, clearEmployeeFilter } = props;

  return (
    <>
      <PageHeader
        title="Workmotion"
        subTitle="Manage and maintain"
      ></PageHeader>
      <Menu mode="horizontal">
        <Menu.Item
          key="everyone"
          icon={<RightCircleOutlined />}
          onClick={clearEmployeeFilter}
        >
          Everyone
        </Menu.Item>
        <Menu.Item
          key="added"
          icon={<RightCircleOutlined />}
          onClick={() => setEmployeeFilter("ADDED")}
        >
          Added
        </Menu.Item>
        <Menu.Item
          key="inCheck"
          icon={<RightCircleOutlined />}
          onClick={() => setEmployeeFilter("IN-CHECK")}
        >
          In-check
        </Menu.Item>
        <Menu.Item
          key="approved"
          icon={<RightCircleOutlined />}
          onClick={() => setEmployeeFilter("APPROVED")}
        >
          Approved
        </Menu.Item>
        <Menu.Item
          key="active"
          icon={<RightCircleOutlined />}
          onClick={() => setEmployeeFilter("ACTIVE")}
        >
          Active
        </Menu.Item>
        <Menu.Item
          key="inactive"
          icon={<RightCircleOutlined />}
          onClick={() => setEmployeeFilter("INACTIVE")}
        >
          Inactive
        </Menu.Item>
      </Menu>
    </>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  setEmployeeFilter,
  clearEmployeeFilter,
})(CustomPageHeader);
