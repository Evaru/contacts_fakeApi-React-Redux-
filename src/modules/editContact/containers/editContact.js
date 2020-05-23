import React from "react";
import { EditForm } from "../../../components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ContactsListActions from "../../../actions";
import { Spin } from "antd";

class editContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      item: {}
    };
  }
  componentDidMount() {
    const { fetchItem, match } = this.props;
    fetchItem(match.params.id);
  }

  render() {
    const { items, loading, disabled, match, fetchUpdateItem } = this.props;
    return !items && loading != false ? (
      <Spin size="large" />
    ) : (
      <EditForm
        id={match.params.id}
        loading={loading}
        disabled={disabled}
        items={items}
        edit={fetchUpdateItem}
      />
    );
  }
}

export default withRouter(
  connect(
    ({ contacts }) => contacts,
    ContactsListActions
  )(editContact)
);
