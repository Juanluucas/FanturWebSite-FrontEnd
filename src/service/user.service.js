import axios from "axios";

const baseUrl = "https://localhost:7190/api";

export const postUser = async (data) => {
  const endpoint = `${baseUrl}/User`
  const post = {
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    password: data.password
  }
  return await(
    axios.post(
      endpoint, post
    )
    .then(
      (res) => {
        return res
      }
    )
    .catch(
      (err) => {
        return err
      }
    )
  )
}

export const loginUser = async (userName, password) => {
  const endpoint = `${baseUrl}/Login`
  const post = {
    userName: userName,
    password: password
  }

  return (
    await axios.post(
      endpoint, post
    )
      .then(
        (res) => {
          console.log(res);
          return res;
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  )
}