import {
    HomePage,
    CartPage,
    NotFoundPage
} from './components/pages'

export type RouteType = {
    path: string
    isExact: boolean
    component: React.FC
}

export const routes = [
    {
        path: '/',
        isExact: true,
        component: HomePage
    },
    {
        path: '/cart',
        isExact: false,
        component: CartPage
    },
    {
        path: '*',
        isExact: false,
        component: NotFoundPage
    },
]