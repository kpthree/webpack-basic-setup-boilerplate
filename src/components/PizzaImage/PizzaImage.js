import React, { Component } from 'react';

import classes from './PizzaImage.css';
import PizzaImageLink from '../../assets/pizza.jpg'

class PizzaImage extends Component {
    render() {
        return (
            <div className={classes.PizzaImage}>
                <img className={classes.PizzaImg} src={PizzaImageLink} />
            </div>
        );
    }
}

export default PizzaImage;