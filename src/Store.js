import { createStore } from 'redux'

import rootrouter from './Reducer'

const store = createStore(rootrouter,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;