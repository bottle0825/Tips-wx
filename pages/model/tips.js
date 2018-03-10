import request from "../widget/request"

export const tipsGetMsg = (data) => request('/tips/getMsg', data);

export const tipsGetDetail = (data) => request('/tips/getDetail', data);

export const tipsDelete = (data) => request('/tips/delete', data);