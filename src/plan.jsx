import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
function Tours(){
    var [k,setK]=React.useState([
        {
          id: 1,
          name: 'Pritam Ahire',
          job: 'web developer',
          image:
            'https://media.licdn.com/dms/image/C5103AQEOJPrf_VFaXA/profile-displayphoto-shrink_800_800/0/1565340799903?e=2147483647&v=beta&t=yvERZWmYhY_7ez_4KmHhpXzoScWGRGLOdvECA2TKixo',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'Srinivas',
          job: 'web designer',
          image:
            'https://media.licdn.com/dms/image/D5603AQHj0zu-uFsoSA/profile-displayphoto-shrink_800_800/0/1666027249363?e=2147483647&v=beta&t=x5te6S7T5VDpjhhhNPWVI1EvAQQR_kTZyCkYHLpihuA',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'Sangeetha',
          job: 'intern',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJL4VCOgsX0nJJzSQuRmj1bMjdAouJi51eg&usqp=CAU',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
      ]);
      console.log(k)
      return (<div>
        {
          k.map((f)=>{
            return(
              <div className="card" style={{width:"18rem"}}>
                <img src={f.image} className="card-img-top" style={{width:"200px"}}></img>
                <div className="card-body">
                 <h3 className="card-title"> {f.name}</h3>
                <p lass="card-text">{f.text}</p>              
                </div>
                </div>
            )
          })
        }
      </div>)

}
export default Tours;