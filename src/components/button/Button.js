import React from 'react'
import css from './button.module.css'

const Button = ({onClick}) => { 
    return (
        <button type='button' onClick={onClick} className={css.Button}>Load more</button>
    )

}

export default Button; 