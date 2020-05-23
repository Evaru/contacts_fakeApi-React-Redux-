import React from "react";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 9
  },
  wrapperCol: {
    span: 6
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12
  }
};

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      street: "",
      suite: ""
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      name: "",
      username: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      street: "",
      suite: ""
    });
  }
  onChange(e) {
    const { name, value } = e.target;
    let newState = this.state;
    newState[name] = value;
    this.setState(newState);
  }

  save() {
    const { add } = this.props;
    const data = {
      ...this.data,
      id: this.state.id,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      address: {
        city: this.state.city,
        street: this.state.street,
        suite: this.state.suite
      },
      company: {
        name: this.state.company
      }
    };

    add(data);
    this.componentDidMount();
  }

  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  render() {
    const {
      name,
      username,
      phone,
      email,
      company,
      city,
      street,
      suite
    } = this.state;
    
    return (
      <div>
        <Form
          {...layout}
          initialValues={{
            remember: true
          }}
          onFinish={this.save.bind(this)}
          onFinishFailed={this.onFinishFailed}
        >
          <h2>Add contact:</h2>
          <div className="forms">
            <Form.Item
              label="Name"
            >
              <Input
                name="name"
                placeholder="name"
                required
                value={name}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="UserName"
            >
              <Input
                name="username"
                placeholder="username"
                required
                value={username}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="Phone"
            >
              <Input
                name="phone"
                placeholder="phone"
                required
                value={phone}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="Email"
            >
              <Input
                name="email"
                placeholder="email"
                required
                value={email}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="Company"
            >
              <Input
                name="company"
                placeholder="company"
                required
                value={company}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="City"
            >
              <Input
                name="city"
                placeholder="city"
                required
                value={city}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="Street"
            >
              <Input
                name="street"
                placeholder="street"
                required
                value={street}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
            <Form.Item
              label="Suite"
            >
              <Input
                name="suite"
                placeholder="suite"
                required
                value={suite}
                onChange={this.onChange.bind(this)}
              />
            </Form.Item>
          </div>
          <Form.Item {...tailLayout}>
            <Button
              loading={this.props.loading}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddContact;
