import {
    HomePage,
    CartPage,
    NotFoundPage
} from './components/pages'

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