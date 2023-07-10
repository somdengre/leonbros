import React, {useState} from 'react'
import Footer from '../../components/basic/footer'
import Searchbar from '../../components/basic/searchbar'
import Catitems from '../../components/basic/catitems'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import cat4 from '../../Assets/categories/cat4.svg'
import Item from "../../components/basic/item";

function Suspenssion() {
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
              <div className='chead'>SUSPENSSION PARTS</div>
              <div className='des'>Premium Quality for Less! Products that meet OEM quality standards. Products are rigorously tested for sustained, trustworthy performance.
              </div>
              <div className='lists'>
                <ul>
                  <li>Direct replacement for trouble-free installation </li>
                  <li>Steel, iron, or aluminum construction ensures durability</li>
                  <li>Powder-coated or painted for long-lasting rust and corrosion resistance</li>
                  
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="cimage" src={cat4} alt="engine & trans. mounts" />
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

export default Suspenssion