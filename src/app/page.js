import Card from "@/components/card/card"
const Home = ()=> {
 return(
  <div className="container pb-80">
    <Card
      label="Product Reviews"
      title="Proin ullamcorper turpis tellus elementum etiam."
      summary="Lorem ipsum dolor sit amet consectetur.
      Et tempor integer faucibus semper malesuada facilisi magna aliquet."
      href="#"
      className="mb-30"
    />
    <div className="row">
      <div className="col col_4" >
      <Card
      label="Opnions"
      title="Proin ullamcorper turpis tellus elementum etiam."
      summary="Lorem ipsum dolor sit amet consectetur.
      Et tempor integer faucibus semper malesuada facilisi magna aliquet."
      href="#"
      className="mb-30"
    />
      </div>
      <div className="col col_4" >
      <Card
      label="Product Reviews"
      title="Proin ullamcorper turpis tellus elementum etiam."
      summary="Lorem ipsum dolor sit amet consectetur.
      Et tempor integer faucibus semper malesuada facilisi magna aliquet."
      href="#"
      className="mb-30"
    />
      </div>
      <div className="col col_4" >
      <Card
      label="Travel Guides"
      title="Proin ullamcorper turpis tellus elementum etiam."
      summary="Lorem ipsum dolor sit amet consectetur.
      Et tempor integer faucibus semper malesuada facilisi magna aliquet."
      href="#"
      className="mb-30"
    />  
      </div>
    </div>
    
  </div>
 
 )
}

export default Home