import axios from "axios";

const baseUrl = "";

export const postUser = async (data) => {
  const endpoint = `${baseUrl}/auth/register`
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

export const getUserByEmail = async (data) => {
  const endpoint = `${baseUrl}/auth/register`
  return await(
    axios.get(
      endpoint
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

export const loginUser = async (data) => {
  const endpoint = `${baseUrl}/auth/login`
  const post = {
    email: data.email,
    password: data.password
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