import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: {
    span: 9
  },
  wrapperCol: {
    span: 6
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12
  }
}

class EditForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      phone: '',
      email: '',
      company: '',
      city: '',
      street: '',
      suite: ''
    }
  }

  componentDidMount () {
    const item =
      this.props.items !== 'None' && this.props.items !== null
        ? this.props.items.filter(item => item.id === Number(this.props.id))[0]
        : null

    if (item && item !== null) {
      this.setState({
        ...this.state,
        id: item.id,
        name: item.name,
        username: item.username,
        phone: item.phone,
        email: item.email,
        company: item.company.name,
        city: item.address.city,
        street: item.address.street,
        suite: item.address.suite
      })
    }
  }

  onChange (e) {
    const { name, value } = e.target
    const newState = this.state
    newState[name] = value
    this.setState(newState)
  }

  save () {
    const { edit } = this.props

    const data = {
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
        name: this.state.name
      }
    }

    edit(this.state.id, data)
  }

  onFinishFailed (errorInfo) {
    console.log('Failed:', errorInfo)
  }

  render () {
    const {
      name,
      username,
      phone,
      email,
      company,
      city,
      street,
      suite
    } = this.state

    const { disabled, loading, items } = this.props
    return (
      <div>
        {items ? (
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true
            }}
            onFinish={this.save.bind(this)}
            onFinishFailed={this.onFinishFailed}
          >
            <h2>Contact info:</h2>
            <div className="forms">
              <Form.Item label="Name">
                <Input
                  disabled={disabled}
                  name="name"
                  placeholder="name"
                  value={name}
                  required
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="UserName">
                <Input
                  disabled={disabled}
                  name="username"
                  placeholder="username"
                  required
                  value={username}
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="Phone">
                <Input
                  disabled={disabled}
                  name="phone"
                  placeholder="phone"
                  value={phone}
                  required
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  disabled={disabled}
                  name="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="Company">
                <Input
                  disabled={disabled}
                  name="company"
                  placeholder="company"
                  value={company}
                  required
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="City">
                <Input
                  disabled={disabled}
                  name="city"
                  placeholder="city"
                  required
                  value={city}
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="Street">
                <Input
                  disabled={disabled}
                  name="street"
                  placeholder="street"
                  value={street}
                  required
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="Suite">
                <Input
                  disabled={disabled}
                  name="suite"
                  placeholder="suite"
                  value={suite}
                  required
                  onChange={this.onChange.bind(this)}
                />
              </Form.Item>
            </div>
            <Form.Item {...tailLayout}>
              <Button loading={loading} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    )
  }
}

export default EditForm
