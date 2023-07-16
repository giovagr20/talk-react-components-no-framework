const URL = {
  uri: "https://reqres.in/api/users/",
};

export default async function getUserById(id) {
  return await fetch(`${URL.uri}${id}`);
};
