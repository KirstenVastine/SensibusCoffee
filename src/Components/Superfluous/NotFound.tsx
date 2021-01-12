import * as React from 'react';
import { Component } from 'react';

export interface NotFoundProps {
    
}
 
export interface NotFoundState {
    
}
 
class NotFound extends React.Component<NotFoundProps, NotFoundState> {
    state = {}
    render() { 
        return ( <h1>NOT FOUND</h1> );
    }
}
 
export default NotFound;