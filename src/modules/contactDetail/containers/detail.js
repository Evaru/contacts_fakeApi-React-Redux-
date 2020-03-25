import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ContactDetail } from "../../../components";
import ContactsListActions from "../../../actions";
import { Spin } from "antd";

class FullContactsContainer extends React.Component {
  componentDidMount() {
    const { fetchItem, match } = this.props;
    fetchItem(match.params.id);
  }
  render() {
    const { item, loading } = this.props;
    return !item ? (
      <Spin size="large" />
    ) : (
      <div>
        {loading !== true ? (
          <ContactDetail item={this.props.item} />
        ) : (
          <Spin size="large" />
        )}
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ contacts }) => contacts,
    ContactsListActions
  )(FullContactsContainer)
);
