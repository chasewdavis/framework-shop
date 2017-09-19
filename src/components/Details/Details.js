import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import "./Details.css"

import { addToCart } from "../../ducks/product";

export function Details( { addToCart, history, products, match } ) {

	const product = products.find( product => product.name === match.params.name ) 

	const {
		  description
		, id
		, logo
		, name
		, price
	} = product;

	function addToCartAndRedirect() {
		addToCart( id );
		history.goBack();
	}

	return (
		<div className="details">
			<Link to="/shop">
				<h3 className="details__back-to-shop">Back to shop</h3>
			</Link>
			<img
				alt={ product.name }
				className="details__logo"
				src={ product.logo }
			/>
		<h1 className="details__name">{ product.name }</h1>
			<p className="details__description">{ product.description }</p>
			<button
				className="details__buy"
				onClick={ addToCartAndRedirect }
			>
				Buy now for ${ product.price }!
			</button>
		</div>
	);
}

function mapStateToProps( state ) {
	return { products: state.products };
}

export default connect( mapStateToProps, { addToCart } )( Details );
