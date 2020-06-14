import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

import './shop-header.css'

const ShopHeader = ( { numItems, orderTotal } ) => {
    return (
        <header className='shop-header row'>
            
            <Link to='/'>
                <div className='logo text-dark'>Книжный магазин</div>
            </Link>

            <Link to='/cart'>
                <Button animated='vertical'
                        color='blue'
                        className='shopping-cart-button'>
                    <Button.Content hidden>Перейти в корзину</Button.Content>
                    <Button.Content visible>
                        [{numItems}] &nbsp;- &nbsp; 
                        <Icon name='shop'/>
                        &nbsp; Итого: <b>{orderTotal} руб.</b>
                    </Button.Content>
                </Button>
            </Link>

        </header>
    )
}

export default ShopHeader