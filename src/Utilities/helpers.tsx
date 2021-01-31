export const isLoggedIn = (): boolean => localStorage.getItem("token") !== null;

export const getLoginToken = () : string =>  localStorage.getItem("token") || "";

export const formatDateForCard = (rawDate:string):string => `${rawDate.slice(0,10)} ${rawDate.slice(12, 16)}`;


