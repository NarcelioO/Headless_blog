//construir preparar toda a estrutura antes de requisitar os dados do strapi
//definir e contruir os componentes
//sistema de layout e responsividade, cores, fontes
//estilizar tudo
//


import Card from "@/components/card/card"
import config from "@/config"
import fetchBlogs from "@/helpers/fetch-blogs"

const Home = async () => {

  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs('filters[isFeatured][$eq]=true'),
    await fetchBlogs('filters[isFeatured][$eq]=false')
  ])

  console.log('blogs', blogs.data)

 return(
  
  <div className="container pb-80">
      {featuredBlogs.data.map(featuredBlog =>(
        <Card 
        key={featuredBlog.id}
        label={featuredBlog.attributes.Category}
        title={featuredBlog.attributes.Title}
        summary={featuredBlog.attributes.Summary}
        href={`/${featuredBlog.attributes.slug}`}
        imgSrc={`${config.api}${featuredBlog.attributes.Thumbnail.data.attributes.url}`}
        className="mb-30"
      />
      ))}

       
    
    <div className="row">
      {blogs.data.map(blog =>(
          <div className="col col_4" key={blog.id}>
              <Card
              label={blog.attributes.Category}
              title={blog.attributes.Title}
              summary={blog.attributes.Summary}
              href={`/${blog.attributes.slug}`}
              imgSrc={`${config.api}${blog.attributes.Thumbnail.data.attributes.url}`}
              className="mb-30"
              />
          </div>
      ))}
    </div>
    
  </div>
 
 )
}

export default Home