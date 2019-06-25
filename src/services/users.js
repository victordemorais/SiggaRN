import BaseService from "./";

export default class Users extends BaseService {
  show = (id: Number) => {
    return this.get(`/users/${id}`);
  };
  list = () => {
    return this.get(`/users`);
  };
}
