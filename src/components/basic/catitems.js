import React, { useEffect, useState } from "react";
import Item from "../../components/basic/item";
import item1 from "../../Assets/hubbearing_items/item1.svg";
import item2 from "../../Assets/hubbearing_items/item2.svg";
import item3 from "../../Assets/hubbearing_items/item3.svg";
import item4 from "../../Assets/hubbearing_items/item4.svg";
import "./catitems.css";
function Catitems() {
  const [parts, setParts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let currIndex = 0;

  useEffect(() => {
    try {
      fetch("https://leonbros-backend.vercel.app/v1/items/getItems")
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
          {parts.map((_, index) => {
            {/* return <></> */}
            if (index === currIndex) {
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
              return (
                <div className="citems">
                  {temp.map((part) => {
                    return (
                      <Item
                        image={part.image}
                        iname={part.moreInfo.replace(
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
            }
            return <></>
          })}


          <div>
            <button className="catbtn">Load More</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Catitems;
