import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Navigator } from "../../components/navbar/Navigator";
import './deals.css'

const Deals = () => {
  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <section className="tw-px-12">
          <h1 className="tw-mt-8 tw-text-bold tw-mb-10" >Ghost Marketplace</h1>
          <Tabs fill defaultActiveKey="trending" id="uncontrolled-tab-example" className="tab-class" >
          <Tab eventKey="trending" title="Trending">
          </Tab>
          <Tab eventKey="top" title="Top">
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
