import React from 'react'
import Travel from './Travel'
const soja = [

    { destination:"Londres", 
      photo:'https://cdn.civitatis.com/reino-unido/londres/guia/distritos.jpg',
      country:"England", 
      distance:"500kms"
    },
    
    
    { destination:"Toronto", 
      photo:'https://www.clc.fr/medias/_cache/produits/472/imagePrincipale/1920_1440/panorama-sejour-linguistique-toronto.jpg',
      country:"Canada", 
      distance:"20000kms"
    },
    
    { destination:"Lima", 
      photo:'https://www.peruhop.com/wp-content/uploads/lima2019.jpg',
      country:"Peru", 
      distance:"20000kms"
    },
    { destination:"casablanca", 
      photo:'https://www.officetourismemaroc.com/src/img/villes/Casablanca/casablanca-settat-office-tourisme-maroc-casablanca.png',
      country:"Maroc", 
      distance:"2000kms"
    },
    ]

    const Travels = () =>(
        <div>
            {soja.map(chicken =>(
            <Travel {...chicken}/>
            ))}
        </div>
    )

    export default Travels