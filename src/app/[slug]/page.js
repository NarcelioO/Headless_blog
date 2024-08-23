import getCategoryColor from "@/helpers/get-category-colors"
import Image from "next/image"


const BlogDetails = (props)=> {
 return(
  <div className="container pb-80">
    <div className="col col_9 mb-50">
        <div className={`h6 mb-10 c-${getCategoryColor('Product Reviews')}`}>{'Product Reviews'}</div>
        <h2>
        Proin ullamcorper turpis tellus elementum etiam.
        </h2>
    </div>
    <Image src="/feature-img-1.png" alt="Featured Image" width="1280" height="387" />

    
    <div className="container pb-80">
        <div className="col col_9 mb-50">
        </div>
    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur. Turpis in mattis magnis non in etiam at ipsum.
        Viverra sapien amet egestas commodo iaculis amet sagittis. Vestibulum nisl et tempor tempor dictum posuere a.
        Auctor amet at laoreet in tincidunt quis sit vel. Quam diam pharetra sed facilisis venenatis. 
        Massa ac non rutrum ullamcorper felis.
    </p>
  </div>
 
 )
}

export default BlogDetails