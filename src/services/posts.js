import BaseService from "./";

export default class Posts extends BaseService {
  list = () => {
    return this.get(`/posts`);
  };
  show = (id: Number) => {
    return this.get(`/posts/${id}`);
  };
  create = data => {
    return this.post(`/posts/${id}`, data);
  };
}
