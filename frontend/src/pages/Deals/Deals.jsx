import React, { useState, useRef } from "react";
import { Container, Pagination, Tab, Tabs, Button } from "react-bootstrap";
import { Navigator } from "../../components/navbar/Navigator";
import shark from '../../assets/shark.png'
import './deals.css'
import AddDealPage from "../AddDealPage/AddDealPage";
import DealCardList from "../../components/DealCardList/DealCardList";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const Deals = () => {

  function toggleVisibility() {
    setVisibility(!visible);
  }

  const [visible, setVisibility] = useState(false);

  const [dealCardList, setDealCardList] = useState([]);
  const [image, setImage] = useState("/images/avatar.jpg");
  const nameRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const paxRef = useRef();
  const infoRef = useRef();

  function addImage(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  function addDeal() {
    const name = nameRef.current.value;
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    const pax = paxRef.current.value;
    const info = infoRef.current.value;
    setDealCardList(deals => {
      return [...deals, { id: name, imgSrc: image, name: name, startDate: startDate, endDate: endDate, pax: pax, info: info }];
    })
  }

  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <section className="tw-px-12">
          <div className="d-flex justify-content-between">
            <div>
              <h1 className="tw-mt-8 tw-text-bold tw-mb-4" > Deals </h1>
              <Button onClick={toggleVisibility}>
                Add deal
              </Button>
              <h4 className="tw-mt-8 tw-text-bold" > Hi, user. </h4>
              <p className="tw-text-bold tw-mb-10 tw-text-blue-500  tw-text-lg" > We've got all the best deals lined up for your easy scrolling right below. Check them out just right below here!</p>
            </div>
            <div className="mt-5">
              <img className="img-fluid tw-animate-bounce" src={shark} alt="shark" width={150} height={150} />
            </div>
          </div>
          <Tabs fill defaultActiveKey="Current" id="uncontrolled-tab-example" className="tab-class" >
            <Tab eventKey="Current" title="Current">
              <div style={{ display: "flex", width: "100%", height: "5%" }}>
                <DealCardList dealCardList={dealCardList} />
              </div>
              <div style={{ height: "5%", display: visible ? undefined : "none", backgroundColor: "red" }} >
                <input accept="image/*" id="icon-button-file-2"
                  type="file" onChange={addImage} style={{ display: 'none' }} />
                <label htmlFor="icon-button-file-2" style={{ width: "100%", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <IconButton edge="start" color="primary" aria-label="upload picture" component="span" >
                    <PhotoCamera />
                  </IconButton>
                </label >
                <div>
                  <input placeholder="Deal Name" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={nameRef} type="text" />
                  <input placeholder="Start Date" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={startDateRef} type="text" />
                  <input placeholder="End Date" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={endDateRef} type="text" />
                  <input placeholder="Max pax" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={paxRef} type="text" />
                  <input placeholder="Additional Info" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={infoRef} type="text" />
                  <div style={{ display: "flex", justifyContent: 'center', alignContent: 'center', margin: "10px" }}>
                    <Button onClick={addDeal}>Add deal</Button>
                  </div>
                </div>
              </div>
              <Container />
              <div className="tw-mt-20"></div>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Tab>
            <Tab eventKey="Past" title="Past">
            </Tab>
            <Tab eventKey="art" title="Art">
            </Tab>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default Deals;
