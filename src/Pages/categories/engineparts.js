import React, {useState} from 'react'
import Footer from '../../components/basic/footer'
import Searchbar from '../../components/basic/searchbar'
import Catitems from '../../components/basic/catitems'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import cat6 from '../../Assets/categories/cat6.svg'
import Item from "../../components/basic/item";

function Engineparts() {

  const [data,setData] = useState([]);
  return (
    <div>
        <div>
        <Header/>

        </div>
        <div>
        <Navbar data={data} setData={setData}/>
        </div>
        {
          data.length>0?(
               <div className='citems'>
                {data.map(item => (<Item
                        image={item.image}
                        // iname={item.moreInfo.replace(
                        //   "More Information for ",
                        //   ""
                        // )}
                        ides="Control Arm Bushing"
                        irat="4.5"
                        inum="(36,177)"
                        price=" $3.20"
                        data={item}
                      />))}
               </div>
          ):(
            <>
            
        <div className='ccon'>
            <div className='ct'>
              <div className='chead'>ENGINE PARTS & GASKETS</div>
              {/* <div className='des'>Premium Quality for Less! Products that meet OEM quality standards. Products are rigorously tested for sustained, trustworthy performance.
              </div> */}
              <div className='lists'>
                <ul>
                  <li>Graphite or MLS Head Gaskets with premium materials using the best thermal epoxy coatings for a stable sealing and heat resistant working on his second silicone coatings to achieve an efficient sealing.</li>
                  <li>Exhaust Manifold, rings and exhaust flat gaskets, all manufactured in expanded graphite which resists high temperatures and excellent compressibility to take absorb imperfections in the surfaces to be sealed.</li>
                  <li>Intake and various gaskets are made of synthetic fibers covering ASTM, about main charact</li>
                  
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="cimage" src={cat6} alt="engine & trans. mounts" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div>
            </>
          )
        }

        

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Engineparts