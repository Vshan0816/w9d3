const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken,
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response;
    } else {
      throw response;
    }
  } catch (error) {
    console.log(error);
  }
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
