const initState = {
	isLoading: false
}

const PostsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GETLIST_ERROR':
			console.log('error')
			return {
				...state,
				isLoading: false,
				getError: null
			}

		case 'GETLIST_LOADING':
			console.log('loading')
			return {
				...state,
				isLoading: true,
				getError: null
			}

		case 'GETLIST_SUCCESS':
			console.log('success')
			return {
				...state,
				results: action.results,
				isLoading: false,
				getError: null
			}
		default:
			return state
	}
}

export default PostsReducer
