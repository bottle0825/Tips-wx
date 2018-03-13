import request from "../widget/request"

export const wordAdd = (data) => request('/word/add', data);

export const wordGetMsg = (data) => request('/word/getMsg', data);

export const wordChangeStatus = (data) => request('/word/changeStatus', data);