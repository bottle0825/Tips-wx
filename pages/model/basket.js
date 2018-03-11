import request from "../widget/request"

export const basketGetMsg = (data) => request('/basket/getMsg', data);

export const basketRecover = (data) => request('/basket/recover', data);

export const basketDelete = (data) => request('/basket/delete', data);