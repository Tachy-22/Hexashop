export const userAccessToken = sessionStorage.getItem("userAccessToken");
export const stringifiedUser = sessionStorage.getItem("user");

export const user = JSON.parse(stringifiedUser);
