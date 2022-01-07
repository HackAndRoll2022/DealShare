import React from "react";
import { Container, Pagination, Tab, Tabs } from "react-bootstrap";
import { Navigator } from "../../components/navbar/Navigator";
import shark from '../../assets/shark.png'
import './deals.css'

const Deals = () => {
  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <section className="tw-px-12">
          <div className="d-flex justify-content-between">
          <div>
          <h1 className="tw-mt-8 tw-text-bold tw-mb-4" > Deals </h1>
          <h4 className="tw-mt-8 tw-text-bold" > Hi, user. </h4>
          <p className="tw-text-bold tw-mb-10 tw-text-blue-500  tw-text-lg" > We've got all the best deals lined up for your easy scrolling right below. Check them out just right below here!</p>
          </div>
          <div className="mt-5">
          <img className="img-fluid tw-animate-bounce" src={shark} alt="shark" width={150} height={150} />
          </div>
          </div>
          <Tabs fill defaultActiveKey="Current" id="uncontrolled-tab-example" className="tab-class" >
          <Tab eventKey="Current" title="Current">
          <Container  />
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
