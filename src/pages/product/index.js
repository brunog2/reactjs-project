import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Products extends React.Component{
    state = {
        product: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState({ product: response.data });
        
    };

    

    render() {
        const { product } = this.state;

        return (
            <div className='product-info'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <a href={product.url}>Saiba mais</a>
            </div>
        );
    }
}

