import { PageHeader, Menu } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

const CustomPageHeader = () => {
  return (
    <>
      <PageHeader
        title="Workmotion"
        subTitle="Manage and maintain"
      ></PageHeader>
      <Menu mode="horizontal">
        <Menu.Item key="everyone" icon={<RightCircleOutlined />}>
          Everyone
        </Menu.Item>
        <Menu.Item key="added" icon={<RightCircleOutlined />}>
          Added
        </Menu.Item>
        <Menu.Item key="inCheck" icon={<RightCircleOutlined />}>
          In-check
        </Menu.Item>
        <Menu.Item key="approved" icon={<RightCircleOutlined />}>
          Approved
        </Menu.Item>
        <Menu.Item key="active" icon={<RightCircleOutlined />}>
          Active
        </Menu.Item>
        <Menu.Item key="inactive" icon={<RightCircleOutlined />}>
          Inactive
        </Menu.Item>
      </Menu>
    </>
  );
};

export default CustomPageHeader;
