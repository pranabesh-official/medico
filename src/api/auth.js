import axios from "axios";
import { authenticate } from "../helpers/utils";

export const singIn = (email, password) => {
  const data = {
    email: email,
    pasword: password,
  };
  var config = {
    method: "post",
    url: "http://localhost:5000/api/users/singin",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        authenticate(response, () => {
          resolve(response.data);
        });
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};
