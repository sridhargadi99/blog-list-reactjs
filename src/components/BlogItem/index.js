// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eacListDetails} = props
  const {title, description, publishedDate} = eacListDetails
  return (
    <>
      <li className="blog-item-container">
        <div className="title-date-container">
          <h1 className="title-style">{title}</h1>
          <p className="date-style">{publishedDate}</p>
        </div>
        <p className="description-style">{description}</p>
        <hr className="hr-style" />
      </li>
    </>
  )
}

export default BlogItem
