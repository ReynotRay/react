const React = require('react')
const ReactDOM = require('react-dom')

const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <button to='/search' className='browse-all'> or Browse Allasdfa</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
