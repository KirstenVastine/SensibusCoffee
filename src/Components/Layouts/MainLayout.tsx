import * as React from 'react';
import MenuBar from '../MainPage/MenuBar';

export interface MainLayoutProps {
    
}
 
const MainLayout: React.SFC<MainLayoutProps> = (props) => {
    return ( 
        <>
            <MenuBar />
            {props.children}
        </>
     );
}
 
export default MainLayout;