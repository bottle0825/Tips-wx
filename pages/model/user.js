import request from "../widget/request"

export const userSendCode = (data) => request('/users/authorize/send_code', data);

export const userSetPhone = (data) => request('/users/authorize/set_phone', data);