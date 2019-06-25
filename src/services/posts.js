import BaseService from "./";

export default class Posts extends BaseService {
  list = () => {
    return this.get(`/posts`);
  };
  show = (id: Number) => {
    return this.get(`/posts/${id}`);
  };
  create = (data: Object) => {
    return this.post(`/posts`, data);
  };
  edit = (id: Number, data: Object) => {
    return this.put(`/posts/${id}`, data);
  };
  delete = (id: Number) => {
    return this.del(`/posts/${id}`, {});
  };
}
