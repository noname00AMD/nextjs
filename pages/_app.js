
import '../sass/app.sass'
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../store/reducers/rootReducer"
var store = configureStore({ reducer: rootReducer })
export default function App({ Component, pageProps }) {
  return (<>
    <Provider store={store}>

      <Component {...pageProps} />
    </Provider>

  </>)
}
