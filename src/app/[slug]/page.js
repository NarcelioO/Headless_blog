import getCategoryColor from "@/helpers/get-category-colors"
import Image from "next/image"
import fetchBlogs from "@/helpers/fetch-blogs"
import config from "@/config"

const BlogDetails = async (props)=> {

    const blogs = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`)
    if (blogs.data.length === 0) return null
    const blog = blogs.data[0]

    console.log('blogs',blogs.data[0])
    return(

    <div className="container pb-80">
        <div className="col col_9 mb-50">
            <div className={`h6 mb-10 c-${getCategoryColor(blog.attributes.Category)}`}>{blog.attributes.Category}</div>
            <h2>
            {props.params.slug}
            </h2>
        </div>
        
        <Image src={`${config.api}${blog.attributes.Thumbnail.data.attributes.formats.large.url}`} alt="Featured Image" width="1280" height="387" />

        
        <div className="row">
            <div className="col col_9">
               
                    {blog.attributes.Content}
                
            </div>
        </div>
    </div>
    
    )
}

export default BlogDetails