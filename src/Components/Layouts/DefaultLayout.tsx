import * as React from 'react';

export type DefaultLayoutProps = {
    children?:React.ReactNode;
}
 
const DefaultLayout: React.SFC<DefaultLayoutProps> = ({children}) => {
    return children as unknown as JSX.Element;
}
 
export default DefaultLayout;