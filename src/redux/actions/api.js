import axios from "axios";

const baseUrl = "http://localhost:4000/";
export default {
  postMessage(url = baseUrl + "postMessages/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
      addSingleComment: (id, text) =>
        axios.post(`${url}${id}/comments`, { text }),
    };
  },
};
