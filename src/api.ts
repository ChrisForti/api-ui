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

  // Validation for username and password
  if (!email || !password) {
    return null;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    // Handle HTTP errors
    const errorData = await response.json();
    throw new Error(errorData || "Login failed");
    return null;
  }
}
