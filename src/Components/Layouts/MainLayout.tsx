import * as React from 'react';
import { Redirect } from 'react-router-dom';
import MenuBar from '../MainPage/MenuBar';

export interface MainLayoutProps {
    
}
 
const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const isLoggedIn = ():boolean =>{
        return localStorage.getItem('token') !== null
    }
    
    return ( 
        isLoggedIn() ? (
            <>
            <MenuBar />
            {props.children}
        </>
        ):(
            <Redirect to="/login"/>
        )
     );
}
 
export default MainLayout;