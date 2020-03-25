import { contactsApi } from "../utils/api";
import { message } from "antd";

const ContactsListActions = {
  setUsers: items => ({
    type: "USERS:SET_ITEMS",
    payload: items
  }),
  fetchUsers: id => dispatch => {
    contactsApi.get(id).then(({ data }) => {
      dispatch(ContactsListActions.setUsers(data));
    });
  },
  setItems: items => ({
    type: "CONTACTS:SET_ITEMS",
    payload: items
  }),
  setItem: item => ({
    type: "CONTACTS:SET_ITEM",
    payload: item
  }),
  fetchItem: id => dispatch => {
    dispatch({ type: "LOADING" });
    contactsApi
      .get(id)
      .then(({ data }) => {
        dispatch({ type: "LOADED" });
        dispatch(ContactsListActions.setItem(data));
      })
      .catch(error => {
        message.error(error);
      });
  },
  fetchItems: id => dispatch => {
    contactsApi
      .get(id)
      .then(({ data }) => {
        dispatch(ContactsListActions.setItems(data));
      })
      .catch(error => {
        message.error(error);
      });
  },
  removeItem: id => ({
    type: "CONTACTS:REMOVE_ITEM",
    payload: id
  }),
  fetchRemoveItem: id => dispatch => {
    dispatch({ type: "LOADING" });
    contactsApi
      .remove(id)
      .then(() => {
        dispatch(ContactsListActions.removeItem(id));
        dispatch({ type: "LOADED" });
        message.success("Deleted");
      })
      .catch(error => {
        message.error(error);
      });
  },
  updateItem: item => ({
    type: "CONTACTS:EDIT_ITEM",
    payload: item
  }),
  fetchUpdateItem: (id, body) => dispatch => {
    dispatch({ type: "DISABLING" });
    dispatch({ type: "LOADING" });
    contactsApi
      .update(id, body)
      .then(({ data }) => {
        dispatch(ContactsListActions.updateItem(data));
        dispatch({ type: "DISABLED" });
        dispatch({ type: "LOADED" });

        message.success("Update!");
      })
      .catch(error => {
        message.error(error);
      });
  },
  addItem: item => ({
    type: "CONTACTS:ADD_ITEM",
    payload: item
  }),
  fetchAddItem: body => dispatch => {
    dispatch({ type: "LOADING" });
    contactsApi
      .add(body)
      .then(({ data }) => {
        dispatch(ContactsListActions.addItem(data));
        dispatch({ type: "LOADED" });
        message.success("Add!");
      })
      .catch(error => {
        message.error(error);
      });
  }
};

export default ContactsListActions;
