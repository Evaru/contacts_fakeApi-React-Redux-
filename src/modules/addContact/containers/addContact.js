import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { AddContact } from "../../../components";
import ContactsListActions from "../../../actions";

class addContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      item: {}
    };
  }
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    const { items, loading, fetchAddItem } = this.props;
    return <AddContact loading={loading} items={items} add={fetchAddItem} />;
  }
}

export default withRouter(
  connect(
    ({ contacts }) => contacts,
    ContactsListActions
  )(addContact)
);
