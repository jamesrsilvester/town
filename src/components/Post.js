import React, {Component} from 'react'

class Post extends Component {
  render() {
    return (
      <div className='row container'>
        <div className='col s12 white hoverable'>
          <div className='col m2'>
            <img src='https://i.imgur.com/rvOc3ov.jpg'/>
          </div>
          <div className='col m10'>
            <a href="https://sfbay.craigslist.org/sfc/apa/d/stunning-4br2ba-home-by-cable/6323902853.html">
              <h3>4 Bedroom House - $4500</h3>
            </a>
            <p>Anybody interested in checking out this place with me?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
