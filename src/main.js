import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

import vuetify from "./plugins/vuetify"; // path to vuetify export

import App from "./App.vue";
import router from "./routes";

Vue.use(vuetify);
Vue.use(VueRouter);

const buildQuery = (data, parentKey = null) => {
  let p = new URLSearchParams();
  let keys = Object.keys(data || {});
  for (let i in keys) {
    let k = keys[i];
    let f = parentKey ? `${parentKey}[${k}]` : k;
    if ("object" == typeof data[k]) {
      p = new URLSearchParams(p.toString() + "&" + buildQuery(data[k], f));
    } else {
      p.set(f, data[k]);
    }
  }
  return p.toString();
};

const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

Vue.prototype.$http = {
  buildQuery: buildQuery,
  get: function(url, params) {
    return this.request("get", url, params, null, {}, "json");
  },
  post: function(url, data) {
    return this.request(
      "post",
      url,
      null,
      data,
      {
        "Content-type": "application/x-www-form-urlencoded",
        "X-CSRFToken": getCookie('csrftoken'),
      },
      "json"
    );
  },
  put: function(url, data) {
    return this.request(
      "put",
      url,
      null,
      data,
      { "Content-type": "application/x-www-form-urlencoded" },
      "json"
    );
  },
  delete: function(url, params) {
    return this.request("delete", url, params, null, {}, "json");
  },
  text: function(url) {
    return this.request("get", url, null, null, {}, "text");
  },
  request: function(method, url, params, data, headers, responseType) {
    headers = headers || {};
    headers["X-Requested-With"] = "XMLHttpRequest";
    return axios({
      method: method,
      headers: headers,
      url: url,
      params: params || null,
      data: buildQuery(data),
      responseType: responseType || "json",
      withCredentials: true,
      maxRedirects: 0,
      timeout: 30000,
    });
  },
};

Vue.config.productionTip = false;

new Vue({
  vuetify: vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
