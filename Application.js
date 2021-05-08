import React from 'react';
import AuthProvider from "./FoodFinders/Store/Provider/AuthProvider";
import App from "./App";

const Application=()=>{
    return(
        <AuthProvider>
            <App/>
        </AuthProvider>

    )
}

export default Application;



