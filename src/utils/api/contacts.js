import  {axios}  from '../core'

export default {
    get: id => axios.get(`/users${id ? '/' + id : ''}`),
    remove: id => axios.delete(`/users/${id}`),
    add: body => axios.post(`/users`,body),
    update: (id,body) => axios.put(`/users/${id}`,body),
  };
