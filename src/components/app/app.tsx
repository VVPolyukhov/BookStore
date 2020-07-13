import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes, IRoute } from '../../routes'
import ShopHeaderContainer from '../shop-header'

const App : React.FC = () => {
    return (
        <main role='main' className='container'>

            <ShopHeaderContainer />

            <Switch>
                {
                    routes.map((route : IRoute) => {
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