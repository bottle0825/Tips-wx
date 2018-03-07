import request from "../widget/request"

export const noteGetMsg = (data) => request('/note/getMsg', data);

export const noteCreate = (data) => request('/note/create', data);