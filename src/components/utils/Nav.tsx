// import React, { useContext } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Layout, Menu } from "antd"; 
// import logo from "../../assets/logo-skinmed-variations-plan-de-travail-1.png";
// import { AuthContext } from "../../context/AuthContext";

// const { Header } = Layout; 

// const NavBarComponent = () => {
//     const { authenticated } = useContext(AuthContext);

//     return (
//         <Layout>
//             <Header className="App-header">
//                 <img src={logo} className="App-logo" alt="Skinmed Logo" />
//                 {authenticated && ( // Affiche le Menu seulement si l'utilisateur est connecté
//                     <Menu mode="horizontal" className="App-nav">
//                         <Menu.Item key="home">
//                             <Link to="/">Accueil</Link>
//                         </Menu.Item>
//                         <Menu.Item key="potentiel">
//                             <Link to="/potentiel">Potentiel</Link>
//                         </Menu.Item>
//                         <Menu.Item key="presentation">
//                             <Link to="/simulation">Présentation</Link>
//                         </Menu.Item>
//                     </Menu>
//                 )}
//             </Header>
//         </Layout>
//     );
// };
// export default NavBarComponent;


import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd"; 
import logo from "../../assets/logo-skinmed-variations-plan-de-travail-1.png";
import { AuthContext } from "../../context/AuthContext";

const { Header } = Layout;

const NavBarComponent = () => {
    const { authenticated, logout} = useContext(AuthContext); // Ajoute la fonction logout du contexte

    return (
        <Layout>
            <Header className="App-header">
                <img src={logo} className="App-logo" alt="Skinmed Logo" />
                {authenticated && ( // Affiche le Menu seulement si l'utilisateur est connecté
                    <>
                        <Menu mode="horizontal" className="App-nav">
                            <Menu.Item key="home">
                                <Link to="/">Accueil</Link>
                            </Menu.Item>
                            <Menu.Item key="potentiel">
                                <Link to="/potentiel">Potentiel</Link>
                            </Menu.Item>
                            <Menu.Item key="presentation">
                                <Link to="/simulation">Présentation</Link>
                            </Menu.Item>
                        </Menu>
                        <Button type="primary" className="logout-button" onClick={logout} >
                            Logout
                        </Button>
                    </>
                )}
            </Header>
        </Layout>
    );
};
export default NavBarComponent;
