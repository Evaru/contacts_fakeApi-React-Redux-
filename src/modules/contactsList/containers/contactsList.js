import React from "react";
import { ContactsListComponent } from "../../../components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ContactsListActions from "../../../actions";
import { Input, Spin, Row } from "antd";

const { Search } = Input;

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      search: ""
    };
  }

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  onchange = e => {
    this.setState({ ...this.state, search: e.target.value });
  };

  render() {
    const { items } = this.props;
    const { fetchRemoveItem, loading } = this.props;
    const { search } = this.state;
    let filterItems =
      items !== null
        ? items.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
        : null;

    return (
      <div>
        <Row>
          <Search
            placeholder="input search contact"
            enterButton="Search"
            size="large"
            onChange={this.onchange}
            onSearch={value => console.log(value)}
          />

          <div className="contacts">
            {filterItems && filterItems !== null && loading !== true ? (
              filterItems.map(item => {
                return (
                  <ContactsListComponent
                    key={item.id}
                    item={item}
                    onRemove={fetchRemoveItem}
                  />
                );
              })
            ) : (
              <Spin size="large" />
            )}
          </div>
        </Row>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ contacts }) => contacts,
    ContactsListActions
  )(ContactsList)
);
