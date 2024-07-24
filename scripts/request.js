export function request(URL, method, body) {
  let authorizedUser;
  switch (method) {
    case "GET":
      return handleGetRequest(URL, method);
    case "POST":
      return handlePostRequest(URL, method, body);
  }
}

function handleGetRequest(URL, method) {
  return fetch(URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

function handlePostRequest(URL, method, body) {
  return fetch(URL, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then((response) => response.json());
}
