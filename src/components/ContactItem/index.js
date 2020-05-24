import React from 'react'
import { Link } from 'react-router-dom'
import { Skeleton, Card, Avatar, Tooltip, Popconfirm, message } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  MobileTwoTone
} from '@ant-design/icons'
const { Meta } = Card

function cancel (e) {
  message.error('Cansel')
}

const ContactItem = ({ id, name, phone, onRemove }) => (
  <div className="card">
    <Card
      actions={[
        <Tooltip placement="top" title="Edit">
          <Link to={`/contact/${id}/edit`}>
            <EditOutlined key="edit" />
          </Link>
        </Tooltip>,
        <Tooltip placement="top" title="More...">
          <Link to={`/contact/${id}`}>
            <EllipsisOutlined key="ellipsis" />
          </Link>
        </Tooltip>,
        <Popconfirm
          title="Are you sure delete this contact?"
          onConfirm={onRemove.bind(this, id)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <Avatar style={{ top: 5 }} src={process.env.PUBLIC_URL + '/avatar.png'} />
          }
          title={
            <h2>{name}</h2>
          }
          description={
            <div><MobileTwoTone/> {phone}</div>}
        />
      </Skeleton>
    </Card>
  </div>
)

export default ContactItem
