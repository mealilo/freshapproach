import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

const Post = ({ post }) => {
  //const authorName = post.author ? post.author.name : 'Unknown author'
  // onclick login inside div  onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}
  return (
    <div>
          <h2>{post.title}</h2>
          <small> {post.description}</small>
          <small> {post.price}</small>
          <h1>hello</h1>

      <style jsx>{`
        div {
          color: blue;
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default Post