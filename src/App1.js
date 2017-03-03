import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export class ProductList extends Component {
  render() {
  	const product = window.Seed.products[0];
  	console.log(product);
    return (
    <div className="ui unstackable items">
      <Product 
      	id={product.id}
      	title={product.title}
      	description={product.description}
      	url={product.url}
      	votes={product.votes}
      	submitterAvatarUrl={product.submitterAvatarUrl}
      	productImageUrl={product.productImageUrl}/>
    </div>
    )
  }   
}

class Product extends Component {
	render(){
		return (
		<div className='item'>
        <div className='image'>
          <img alt="productImgUrl" src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a>
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

// class Product extends Component {
// 	render(){
// 		return (
// 			<div className="item">
// 				<div className="image">
// 					<img alt="aqua" src="./images/products/image-aqua.png" />
// 				</div>
// 				<div className="middle aligned content">
// 					<div className="description">
// 						<a>Fort Knight</a>
// 						<p>Authentic renaissance actors, delivered in just two weeks</p>
// 					</div>
// 					<div className="extra">
// 						<span>Submitted by:</span>
// 						<img className="ui avatar image" alt="daniel"
// 									src="images/avatars/daniel.jpg" />
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;
