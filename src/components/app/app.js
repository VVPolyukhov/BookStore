import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from '../../routes'
import { ShopHeaderContainer } from '../../containers'

const App = () => {
    return (
        <main role='main' className='container'>

            <ShopHeaderContainer />

            <Switch>
                {
                    routes.map(route => {
                        return (
                            <Route
                                key={route.path}
                                exact={route.isExact}
                                path={route.path}
                                component={route.component}
                            />
                        )
                    })
                }
            </Switch>

        </main>
    )
}

export default App