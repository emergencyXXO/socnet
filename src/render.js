import React from 'react';
import  {AddPost} from "./components/Store";
import ReactDOM from 'react-dom';
import App from './App';

let RerenderFunc = (store) => {
    ReactDOM.render(<App store={store} addPost={AddPost} />, document.getElementById('root'));
}

export default RerenderFunc;