var React = require('react')
var ReactDOM = require ('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = function () {
	<div>
		MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
		React.createElement(MyTitle,{title: 'use props everywhere!', color: 'mediumaquamarine'}),
		ce(MyTitle,{title: 'Props are the best!', color: 'papayawhip'})
	
	</div>
		)
}

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
