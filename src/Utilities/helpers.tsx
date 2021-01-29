export const isLoggedIn = (): boolean => localStorage.getItem("token") !== null;

export const getLoginToken = () : string =>  localStorage.getItem("token") || "";


