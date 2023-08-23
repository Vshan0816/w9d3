const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken,
  };

  return await fetch(url, options);
}

export async function followUser(userId) {
  // Your code here

  return customFetch(`/users/${userId}/follow`, {
    method: "POST",
  });
}

export async function unfollowUser(userId) {
  // Your code here
  return customFetch(`/users/${userId}/follow`, {
    method: "DELETE",
  });
}
