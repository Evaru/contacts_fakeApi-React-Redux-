import React from "react";
import "antd/dist/antd.css";
import { ContactItem } from "../";
import { Spin } from "antd";

const ContactsListComponent = ({ item, onRemove }) => {

  return (
    <div >
      {item && item !== "None" ? (
        <ContactItem key={item.id} {...item} onRemove={onRemove} />
      ) : (
        <Spin size="large" style={{ marginTop: "100px" }} />
      )}
    </div>
  );
};
export default ContactsListComponent;
