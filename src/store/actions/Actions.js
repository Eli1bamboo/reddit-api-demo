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

export const dismissPost = (postId) => {
	return (dispatch) => {

		dispatch({ type: 'REMOVE_ITEM', postId })
	}
}

export const seenPost = (postId) => {
	return (dispatch) => {

		dispatch({ type: 'SEEN_ITEM', postId })
	}
}


export const setPosts = (posts) => {
	return (dispatch) => {

		dispatch({ type: 'SET_POSTS', posts })
	}
}


export const setListPage = (list) => {
	return (dispatch) => {

		dispatch({ type: 'SET_LIST', list })
	}
}