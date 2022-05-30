import React from "react";
import Header from "./components/header";
import Resume from "./components/Resume/index";
import GlobalStyle from "./styles/global";


const App = () => {
    return (
        <>  
            <Header />
            <Resume />
            <GlobalStyle/>
        </>
    );
};

export default App;