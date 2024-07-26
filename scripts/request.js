export function request(URL, method, body) {
  let authorizedUser;
  switch (method) {
    case "GET":
      return handleGetRequest(URL, method);
    case "POST":
      return handlePostRequest(URL, method, body);
  }
}

async function handleGetRequest(URL, method) {
  return await fetch(URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

async function handlePostRequest(URL, method, body) {
  return await fetch(URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then((response) => response.json());
}
