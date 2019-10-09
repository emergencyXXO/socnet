import * as axios from 'axios/index';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {
		'API-KEY': '8ebe5dbb-b80a-4d2a-bd2a-c3c6ac269af8',
	},
});

export const UserApi = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`/users?page=${currentPage}&count=${pageSize}`);
	},
};

export const FollowApi = {
	unfollow(id = 1) {
		return instance.delete(`/follow/${id}`).then(response => response.data);
	},

	follow(id = 1) {
		return instance.post(`/follow/${id}`, {}).then(response => response.data);
	},
};

export const AuthApi = {
	me() {
		return instance.get(`/auth/me`).then(response => response.data);
	},
	login(email, password, rememberMe = false) {
		return instance.post(`/auth/login`, { email, password, rememberMe }).then(response => response.data);
	},

	logout() {
		return instance.delete(`/auth/login`).then(response => response.data);
	},
};

export const ProfileApi = {
	getProgileInfo(userId) {
		return instance.get(`/profile/${userId}`).then(response => response.data);
	},
	getStatus(userId) {
		return instance.get(`/profile/status/${userId}`);
	},
	updateStatus(status) {
		return instance.put(`/profile/status`, { status: status }).then(response => response.data);
	},
};
