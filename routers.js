import React from 'react'
import { Route , IndexRoute  } from 'react-router'
import Main from './components/main'
import Default from './views/default/default'
import Hello from './views/hello/hello'
import C404 from './components/404'

export default function getRouters() {

    return (
        <Route path="/" component={Main}>
            <IndexRoute components={Default}/>
            <Route path="hello" components={Hello}/>
            <Route path="*" components={C404}/>
        </Route>
    ) 
}