var div = React.DOM.div
var h1 = React.DOM.h1
//you create a class to be used for one set, expample think of reddit comment box and different
//webpages you can style it differently meaning the component will spit it out.
var MyTitle = React.createClass({
	//no need for functions such as render:funciton(){do this}
	render (){
		return(
			div(null, 
				h1({style:{color:this.props.color}},this.props.title)
			)
		)
	}	
})

//here we use component to display on webpage the specific class.  
var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
	div(null,
		//all of the three will work as the same.
		MyTitleFact({title: 'Props are great!', color:'rebeccapurple'}),
		React.createElement(MyTitle,{title: 'use props everywhere!', color:'mediumaquamarine'}),
		ce(MyTitle,{title: 'Props are the best!', color:'papayawhip'})
			)
		)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))