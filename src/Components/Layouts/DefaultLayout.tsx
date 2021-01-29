import * as React from 'react';
import { isLoggedIn } from '../../Utilities/helpers';

export type DefaultLayoutProps = {
    children?:React.ReactNode;
}
 
const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
    const preload = ():void =>{
        if(isLoggedIn()){
            localStorage.clear();
        }
    }
    preload();

    return children as unknown as JSX.Element;
}
 
export default DefaultLayout;