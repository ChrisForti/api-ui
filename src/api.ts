const apiUrl = "https://express-snippet-box-production.up.railway.app";

// assert types

export async function getSnippetById(id: number) {
  if (id < 1) {
    return null;
  }
  const endpoint = apiUrl + "/snippets/" + id;
  const response = await fetch(endpoint);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
}
// if you need a post request, you have to pass in a options object with a method of post.

export async function login(email: string, password: string) {
  const endpoint = apiUrl + "/login";
  const loginData = {
    email,
    password,
  };
  // need some validation for username and password

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(loginData),
  });
}
