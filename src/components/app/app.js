import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage, CartPage, NotFoundPage } from '../pages'
import { ShopHeaderContainer } from '../../containers'

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeaderContainer />
            <Switch>
                <Route path='/'
                    component={HomePage}
                    exact />
                <Route path='/cart'
                    component={CartPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </main>
    )
}

export default App