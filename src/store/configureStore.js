import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './reducers/RootReducer'
import { loadState } from './localStorage'
import { saveState } from './localStorage'

const persistedState = loadState();

export const store = createStore(RootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
	saveState({
		PostsReducer: {
			dismissed: store.getState().PostsReducer.dismissed,
			seen: store.getState().PostsReducer.seen,
		}
	});
});
