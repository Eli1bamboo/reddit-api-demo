import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'https://www.reddit.com'
})

export default {
	getList() {
		return apiClient.get('/top.json', {
			params: {
				limit: 50
			}
		})
	}
}
