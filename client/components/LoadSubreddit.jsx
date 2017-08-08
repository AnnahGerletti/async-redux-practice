import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state={
      subreddit:""
    }
  }
  handleChange(e){
    this.setState({
      subreddit: e.target.value
    })
  }
  render() {
    const {dispatch} = this.props
    console.log(this.props);
    return(
      <div>
        <div>
          Subredit type:  <input onChange={this.handleChange.bind(this)}
            value={this.state.subreddit} type='text' name='stuff' />
      </div>
        <button
          onClick={() => dispatch(fetchPosts(this.state.subreddit))}
          >Fetch Posts</button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
