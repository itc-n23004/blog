import { getPostByslug } from 'lib/api'
import { client } from 'lib/api'
const Schedule = () => {
  return <h1>記事のタイトル</h1>
}
export default Schedulei({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
        <h1>{title}</h1>
    <Container>
  )
}

const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs'
  })

const getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDete,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  }
}
  try {
    const res = await resPromise
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {}
  }
}
export { getStaticProps }
