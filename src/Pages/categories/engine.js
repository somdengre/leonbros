import React,{useState} from 'react'
import Catitems from '../../components/basic/catitems'
import Searchbar from '../../components/basic/searchbar'
import Footer from '../../components/basic/footer'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import cat2 from '../../Assets/categories/cat2.svg'
import Item from "../../components/basic/item";


function Engine() {

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
            <> <div className='ccon'>
            <div className='ct'>
              <div className='chead'>HUB BEARING</div>
              <div className='des'>AGQP hub assemblies are performance-proven and
                    quality-tested. Their application-specific design
                    enhancements provide:
              </div>
              <div className='lists'>
                <ul>
                  <li>Decreased noise and vibration for smooth performance</li>
                  <li>Reduced bearing temperatures, which improves service for life</li>
                  <li>Protection against entry of water and other contaminants, preventing premature failure</li>
                </ul>
              </div>
            </div>
            <div className='cim'>
            <img className="cimage" src={cat2} alt="hub bearing" />
            </div>
        </div>
        <div className='line'></div>

        <div><Catitems/></div> </>
          )
        }
        

        <div><Searchbar/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Engine