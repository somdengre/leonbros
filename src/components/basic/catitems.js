import React, { useEffect, useState } from "react";
import Item from "../../components/basic/item";
import item1 from "../../Assets/hubbearing_items/item1.svg";
import item2 from "../../Assets/hubbearing_items/item2.svg";
import item3 from "../../Assets/hubbearing_items/item3.svg";
import item4 from "../../Assets/hubbearing_items/item4.svg";
import "./catitems.css";
function Catitems(props) {
  const [parts, setParts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currPage,setCurrPage] = useState(1);
  let currIndex = 0;
  const url = props.url;
  
  const loadMoreHandler = async() =>{
    try{
      // https://leonbros-backend.vercel.app

      let pageVal = currPage + 1;
      const currPageData = await fetch(`${url}/?page=${pageVal}`)
      .then((res) => res.json())
      const newData = [...parts,...currPageData.data]
      setParts(newData);
      setLoading(false);
      console.log("current page", pageVal)
      setCurrPage(pageVal)
      console.log("bbbb",newData)
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    try {
      fetch(`${url}/?page=1`)
        .then((res) => res.json())
        .then((res) => {
          setParts(res.data);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : error ? (
        <span>Error Occured</span>
      ) : (
        <div>
          {/* {parts.map((_, index) => { */}
            {/* return <></> */}
            {/* if (index === currIndex) {
              let i = 0;
              const temp = [];
              while (i < 4 && currIndex < parts.length) {
                const part = parts[currIndex];
                if (
                  part &&
                  part.image &&
                  part.moreInfo.length > 2 &&
                  part.features
                ) {
                  i++;
                  temp.push(part);
                }
                  currIndex++;
              }
              return ( */}
                <div className="citems">
                  {parts.map((part) => {
                    return (
                      <Item
                        image={part.image}
                        iname={part.moreInfo && part.moreInfo.replace(
                          "More Information for ",
                          ""
                        )}
                        ides="Control Arm Bushing"
                        irat="4.5"
                        inum="(36,177)"
                        price=" $3.20"
                        data={part}
                      />
                    );
                  })}
                </div>
              );
            {/* } */}
            {/* return <></>
          })} */}


          <div>
            <button className="catbtn" onClick={loadMoreHandler}>Load More</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Catitems;
