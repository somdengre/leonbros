import React, { useState } from "react";
import "./item.css";
import star from "../../Assets/hubbearing_items/star.svg";
import item1 from "../../Assets/hubbearing_items/item1.svg";
import cross from "../../Assets/cross.svg";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const features = props.data.features.split("\n");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          data-dismiss="modal"
          className="pcross"
          onClick={() => props.setShow(false)}
        >
          <img className="picross" src={cross} alt="close" />
        </div>
        <div className="pcontain">
          <div className="pimg">
            <img className="pimage" src={props.data.image} alt="hub bearing" />
          </div>
          <div className="pinfo">
            <div className="phead">
              {props.data.moreInfo.replace("More Information for ", "")}
            </div>
            <div className="pcat">Category: Control Arm Bushing</div>
            <div className="prat">
              <div className="istar">
                <div className="istars">4.5</div>
                <div className="star">
                  <img className="imgstar" src={star} alt="hub bearing" />
                </div>
              </div>
              <div className="prnum">(36177)</div>
            </div>
            <div className="pcont">
              Kit; Includes Forward & Rearward Bushing
            </div>
            <div className="pfeat">
              <div className="pfhead">{features[0]}:</div>
              <div className="pcontent">
                <ul>
                  {features.map((data, idx) => {
                    if (idx == 0 && data.length == 0) return <></>;
                    return <li>{data}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="pnums">{props.data.oem}</div>
            <div className="pabt">
              Closeout Inventory Warranty Information:Wholesaler Closeout items
              have a 30 day warranty (but still are covered by our Return
              Policy).
            </div>
            <div className="pprice">$3.20</div>
          </div>
        </div>

        <div className="pguide">
          Buyer’s Guide: QUICK STEER K6395 Control Arm Bushing
        </div>

        <div className="pres">
          Results may be incomplete due to size of result set
        </div>

        <div className="ptable">
          <div className="light">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="dark">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="dark">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="light">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="dark">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="light">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="dark">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
          <div className="light">
            <div className="pl">CADILLAC</div>
            <div className="pm">ESCALADE</div>
            <div className="pr">1999-2000</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Item(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="item-container">
      <div onClick={() => setModalShow(true)}>
        <div className="it">
          <div className="ii">
            <img className="iimage" src={props.image} alt="hub bearing" />
          </div>
          <div className="iname">{props.iname}</div>
          <div className="ides">{props.ides}</div>
          <div className="irat">
            <div className="istar">
              <div className="istars">{props.irat}</div>
              <div className="star">
                <img className="imgstar" src={star} alt="hub bearing" />
              </div>
            </div>
            <div className="inum">{props.inum}</div>
          </div>
          <div className="iprice">{props.price}</div>
        </div>
      </div>
      <div className="modalContainer">
        <MyVerticallyCenteredModal
          setShow={setModalShow}
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={props.data}
        />
      </div>
    </div>
  );
}

export default Item;
