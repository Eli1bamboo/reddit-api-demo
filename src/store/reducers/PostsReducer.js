const initState = {
	isLoading: false,
	dismissed: [],
	seen: [],
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
		case 'REMOVE_ITEM':
			console.log('removed')
			return {
				...state,
				dismissed: [...state.dismissed, action.postId]
			}
		case 'SEEN_ITEM':
			console.log('seen')
			return {
				...state,
				seen: [...state.seen, action.postId]
			}
		case 'UNSEEN_ITEM':
			console.log('unseen')
			return {
				...state,
				seen: state.seen.filter(item => item !== action.postId)
			}
		default:
			return state
	}
}

export default PostsReducer
