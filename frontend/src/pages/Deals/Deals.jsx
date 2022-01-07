import React from "react";
import { Container, Pagination, Tab, Tabs, Card, Button } from "react-bootstrap";
import { Navigator } from "../../components/navbar/Navigator";
import shark from '../../assets/shark.png'
import Collins from '../../assets/deals/collins.png'
import GongCha from '../../assets/deals/gong-cha.png'
import Kfc from '../../assets/deals/kfc.png'
import Kith from '../../assets/deals/kith.png'
import Macs from '../../assets/deals/macs.png'
import Marche from '../../assets/deals/marche.png'
import Popeyes from '../../assets/deals/popeyes.png'
import Shakeshack from '../../assets/deals/shakeshack.png'
import Starbucks from '../../assets/deals/starbucks.png'
import AddDealPage from "../AddDealPage/AddDealPage";
import DealCardList from "../../components/DealCardList/DealCardList";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import './deals.css'
import Footer from "../../components/footer/Footer";

const A_LOGOS = [
{
  img: Collins,
  type: 'Discount',
  description: 'Get 15% off on an order exceeding $50!',
  pax: '3',
  deadline: '10 Jan 2022'
}, 
{
  img: GongCha,
  type: 'Freebie',
  description: 'Get 1 free Pearl Milk Tea if you spend above $15!',
  pax: '3',
  deadline: '30 Jan 2022'
},
{
  img: Kfc,
  type: 'Freebie',
  description: 'Claim a FREE set of cheese fries for purchases exceeding just $15!!',
  pax: '2',
  deadline: '25 Feb 2022'
}
]

const B_LOGOS = [
  {
    img: Kith,
    type: 'Freebie',
    description: 'Get 1 free sandwich set on an order exceeding $30!',
    pax: '3',
    deadline: '01 Mar 2022'
  }, 
  {
    img: Macs,
    type: 'Discount',
    description: '50% OFF your McSpicy Meals if your purchases exceed $33.33!',
    pax: '3-4',
    deadline: '10 Mar 2022'
  },
  {
    img: Marche,
    type: 'Discount',
    description: 'Strike off 20% off the bill on any orders exceeding 75 bucks!',
    pax: '3-4',
    deadline: '20 Mar 2022'
  }
]

const C_LOGOS = [
  {
    img: Popeyes,
    type: 'Freebie',
    description: 'Get 1 free sandwich set on an order exceeding $30!',
    pax: '3',
    deadline: '25 Mar 2022'
  }, 
  {
    img: Shakeshack,
    type: 'Discount',
    description: '15% OFF your burgers if your purchases exceed $60!',
    pax: '3-4',
    deadline: '26 Mar 2022'
  },
  {
    img: Starbucks,
    type: 'Freebie',
    description: 'Redeem a free Matcha Ice Latte! On 1-to-1 purchase',
    pax: '2',
    deadline: '30 Mar 2022'
  }
]


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
    <>
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
          <Container> 
            <div className="tw-flex tw-flex-col tw-gap-8 tw-mx-auto">
              <div className="tw-flex tw-flex-row tw-gap-20 ">
                {
                  A_LOGOS.map((item, idx) => {
                    return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="h-50" variant="top" src={item.img}/>
                    <Card.Body>
                      <Card.Title>{item.type}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Button variant="primary">Check in!</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Deadline: <strong>{item.deadline} </strong></small>
                    </Card.Footer>
                    </Card>
                    )
                  })
                }
              </div>
              <div className="tw-flex tw-flex-row tw-gap-20 ">

              {
                  B_LOGOS.map((item, idx) => {
                    return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="h-50" variant="top" src={item.img}/>
                    <Card.Body>
                      <Card.Title>{item.type}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Button variant="primary">Check in!</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Deadline: <strong>{item.deadline} </strong></small>
                    </Card.Footer>
                    </Card>
                    )
                  })
              }
              </div>
              <div className="tw-flex tw-flex-row tw-gap-20 ">
              {
                  C_LOGOS.map((item, idx) => {
                    return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="h-50" variant="top" src={item.img}/>
                    <Card.Body>
                      <Card.Title>{item.type}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Button variant="primary">Check in!</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Deadline: <strong>{item.deadline} </strong></small>
                    </Card.Footer>
                    </Card>
                    )
                  })
                }

              </div>
            </div>
          </Container>
          </Tab>
          <Tab eventKey="Past" title="Past">
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
          <Tab eventKey="art" title="Art">
          </Tab>
        </Tabs>
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
        </section>
      </div>
    </div>
    </>
  );
};

export default Deals;
