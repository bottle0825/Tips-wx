import request from "../widget/request"

export const saidGetMsg = (data) => request('/said/getMsg', data);

export const saidGetMsgOther = (data) => request('/said/getMsgOther', data);

export const saidCreate = (data) => request('/said/create', data);

export const saidDelete = (data) => request('/said/delete', data);