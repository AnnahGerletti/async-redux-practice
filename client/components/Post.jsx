import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, author, created}) => (
  <div>{title}',  '
      {author}',  '
      {created}
    </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};


export default Post
