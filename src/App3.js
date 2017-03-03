import React, {Component} from 'react';
import './App.css';
import {products} from './seed';

export class ProductList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      products: []
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({products: products});
  }

	handleProductUpVote(productId){
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
	constructor(props) {
	  super(props); //if you have constructor super() will call Components constructor which binds this to your class
	
	  this.handleUpVote = this.handleUpVote.bind(this);
	  //inside render {this} = the Product Class but in our own custome functions {this} = null so we must bind
	  //it inside the constructor to point to the Product class
	}
	handleUpVote(){
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