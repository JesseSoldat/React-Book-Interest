import React, {Component} from 'react';
import './App.css';
import {products} from './seed';

export class ProductList extends Component {
  //ES7 property initializers
  //1 we can use arrow functions for custom component methods (binds this)
  //2 we can define the initial state outside of constructor()
    state = {
      products: []
    };
  //no need to set up a Constructor ES Class Fields & Static Properties ES7
  componentDidMount() {
    this.setState({products: products});
  }

	handleProductUpVote = (productId) => {
    //no need to bind this ES Class Fields & Static Properties ES7
		// console.log(productId + ' was voted up');
    const nextProducts = this.state.products.map((product) => {
      if(product.id === productId){
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product;
      }
    });
    // console.log(nextProducts);
    this.setState({
      products: nextProducts
    });
	}
  render() {
  	const productsSort = this.state.products.sort( (a,b) => (b.votes - a.votes));
  	//if return value of SORT is less than 0 {a} comes first greater than 0 {b} comes first
  	// products.sort( (a,b) => (b.votes - a.votes)); //works as well

  	//sort mutates the array that it was called on so we could map over products and get the same result
  	// console.dir(productsSort);
  	const productComponents = productsSort.map((product) => (
  		<Product 
      	key={'product-' +product.id}
      	id={product.id}
      	title={product.title}
      	description={product.description}
      	url={product.url}
      	votes={product.votes}
      	submitterAvatarUrl={product.submitterAvatarUrl}
      	productImageUrl={product.productImageUrl}
      	onVote={this.handleProductUpVote}
      />
  	));
  	
    return (
    <div className="ui unstackable items">
      {productComponents}
    </div>
    )
  }   
}

class Product extends Component {
	//no need to bind this ES Class Fields & Static Properties ES7
	handleUpVote = () => {
		this.props.onVote(this.props.id);
	}
	render(){
		return (
		<div className='item'>
        <div className='image'>
          <img alt="productImgUrl" src={this.props.productImageUrl} />
        </div>

        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              alt="submitterAvatarUrl"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>	
		)
	}
}