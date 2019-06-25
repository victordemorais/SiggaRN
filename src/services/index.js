import { API_URL } from "../configs/constants";

const POST_METHOD = "POST";
const PUT_METHOD = "PUT";
const DELETE_METHOD = "DELETE";

export default class BaseService {
  get(path: string) {
    return fetch(`${API_URL}${path}`)
      .then(response => response.json())
      .then(json => {
        return json;
      });
  }

  post(path: string, form: Object) {
    return fetch(`${API_URL}${path}`, this.body(POST_METHOD, form))
      .then()
      .then(response => {
        return response.json();
      });
  }

  put(path: string, form: Object) {
    return fetch(`${API_URL}${path}`, this.body(PUT_METHOD, form))
      .then(response => response.json())
      .then(response => {
        return response;
      });
  }

  del(path: string, form: Object) {
    return fetch(`${API_URL}${path}`, this.body(DELETE_METHOD, form))
      .then(response => response.json())
      .then(json => {
        return json;
      });
  }

  body(method: string, form: Object) {
    return {
      method,
      body: JSON.stringify(form)
    };
  }
}
