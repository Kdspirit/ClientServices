import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { TrendingVideoReducer } from './TrendingVideos/TrendingVideoReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store