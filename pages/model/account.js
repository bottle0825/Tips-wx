import request from "../widget/request"

export const accountAdd = (data) => request('/account/add', data);

export const accountGetDayMsg = (data) => request('/account/getDayMsg', data);

export const accountGetMonthMsg = (data) => request('/account/getMonthMsg', data);

export const accountGetYearMsg = (data) => request('/account/getYearMsg', data);