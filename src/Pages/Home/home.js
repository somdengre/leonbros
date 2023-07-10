import React,{useState} from 'react'
import Header from '../../components/basic/header'
import Navbar from '../../components/basic/navbar'
import Imageslider from '../../components/home/imageslider'
import Categories from '../../components/home/categories'
import About from '../../components/home/about'
import Searchbar from '../../components/basic/searchbar'
import Footer from '../../components/basic/footer'
import Item from "../../components/basic/item";




function Home() {
  const [data,setData] = useState([]);
  
  return (
    <div>
        <div><Header/></div>
      <div><Navbar data={data} setData={setData}/></div>  
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
              <div><Imageslider/></div>
              <div><Categories/></div>
              <div><About/></div>
            </>
          )
      }
      
      <div><Searchbar/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Home