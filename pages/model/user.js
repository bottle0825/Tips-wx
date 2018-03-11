import request from "../widget/request"

export const userSendCode = (data) => request('/users/authorize/send_code', data);

export const userSetPhone = (data) => request('/users/authorize/set_phone', data);

export const userFollowing = (data) => request('/users/following', data); 

export const userUnFollow = (data) => request('/users/unfollow', data); 

export const userGetFollowing = (data) => request('/users/getFollowing', data); 

export const userGetFollower = (data) => request('/users/getFollower', data); 