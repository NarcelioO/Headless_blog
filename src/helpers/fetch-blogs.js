import config from '@/config'

const fetchBlogs = async(params) =>{
  
    const reqOptions = {
      headers:{
        Authorization : `Bearer ${process.env.API_TOKEN}`
      }
    }
    
    const resquest = await fetch(`${config.api}/api/blogs?populate=*&${params}`,reqOptions)
    const response = await resquest.json()
  
    return response;
  }
  

  export default fetchBlogs