import Api from '../../Api'

export const getList = () => {
	return (dispatch) => {
		dispatch({ type: 'GETLIST_LOADING' })

		Api.getList()
			.then((response) => {
				const redditJson = response.data
				const results = redditJson.data.children.map(obj => obj.data)

				dispatch({ type: 'GETLIST_SUCCESS', results })
			})
			.catch((err) => {
				dispatch({ type: 'GETLIST_ERROR', err })
			})
	}
}