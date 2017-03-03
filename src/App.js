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
    return (
    <div className="ui unstackable items">
      <Product />
    </div>
    )
  }
}

class Product extends Component {
	render(){
		return (
			<div className="item">
				<div className="image">
					<img alt="aqua" src="./images/products/image-aqua.png" />
				</div>
				<div className="middle aligned content">
					<div className="description">
						<a>Fort Knight</a>
						<p>Authentic renaissance actors, delivered in just two weeks</p>
					</div>
					<div className="extra">
						<span>Submitted by:</span>
						<img className="ui avatar image" alt="daniel"
									src="images/avatars/daniel.jpg" />
					</div>
				</div>
			</div>
		);
	}
}

// export default App;
