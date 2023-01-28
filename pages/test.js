import Post from '../components/Post'
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';

const Blog = props => {
  return (
    <div>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          {props.feed.map(post => (
            <div key={post.id} className="post">
                  <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 5rem;
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps = async () => {
  const feed = await prisma.listing.findMany({
      where: { producer_ID: 1 },
  })
  return {
    props: { feed: makeSerializable(feed) },
  }
}

export default Blog
