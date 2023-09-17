import Country from './featues/country/countrie';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './shared/header';
import {Outlet} from "react-router-dom"
function App(){
  return (
    <div>
    <Provider store={store}>
      <Header></Header>
        <Outlet></Outlet>
        </Provider>
    </div>
  )
}  
export default App;
