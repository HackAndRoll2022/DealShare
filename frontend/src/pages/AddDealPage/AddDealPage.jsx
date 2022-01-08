import React, { useState } from "react";
import DealCardList from "../../components/DealCardList/DealCardList";
import { Button, Modal } from "react-bootstrap"
import { IconButton, TextField } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import { Hidden } from '@material-ui/core';
import { Navigator } from "../../components/navbar/Navigator";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const AddDealModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ 'width': 200 }}>
        Add Deal
      </Button>
      <Modal show={show} onHide={handleClose} centered backdrop="static"
        keyboard={false}>
        <Modal.Header>
          <Modal.Title>Success! </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <h5> The deal has been posted successfully to the DealShare team for verification.</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" href="/home">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const AddDealPage = () => {
    const [dealCardList, setDealCardList] = useState([]);
    const [image, setImage] = useState("/images/avatar.jpg");
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [pax, setNumPax] = useState(null)
    const [info, setInfo] = useState("");
    const navigate = useNavigate();

    function addImage(event) {
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    function addDeal() {
        setDealCardList(deals => {
            return [...deals, { id: name, imgSrc: image, name: name, startDate: startDate, endDate: endDate, pax: pax, info: info }];
        })
        navigate("/home");
    }

    return (
      <div>
        <Navigator />
        <div
          className="tw-h-screen tw-flex tw-flex-col"
          style={{
            margin: "auto",
            width: "50%",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <DealCardList dealCardList={dealCardList} />
          </div>
          <input
            accept="image/*"
            id="icon-button-file-2"
            type="file"
            onChange={addImage}
            style={{ display: "none" }}
          />
          <label
            htmlFor="icon-button-file-2"
            style={{
              width: "100%",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <IconButton
              edge="start"
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <div>
            <TextField
              className="mb-5"
              id="nameRef"
              label="Deal Name"
              variant="outlined"
              size="medium"
              style={{ width: "100%" }}
              onChange={setName}
            />
            <TextField
              className="mb-5"
              id="startDate"
              label="Start Date"
              variant="outlined"
              size="medium"
              style={{ width: "100%" }}
              onChange={setStartDate}
            />
            <TextField
              className="mb-5"
              id="endDate"
              label="End Date"
              variant="outlined"
              size="medium"
              style={{ width: "100%" }}
              onChange={setEndDate}
            />
            <TextField
              className="mb-5"
              id="numOfPax"
              label="No. of Pax"
              variant="outlined"
              size="medium"
              style={{ width: "100%" }}
              onChange={setNumPax}
            />
            <TextField
              className="mb-5"
              id="additional"
              label="Additional Info"
              variant="outlined"
              size="large"
              style={{ width: "100%" }}
              onChange={setInfo}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <AddDealModal />
              {/* <Button onClick={addDeal}>Add deal</Button> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
    
        // <div style={{ width: "100%", height: "50%" }}>
        //     <div style={{ display: "flex", width: "100%"}}>
        //         <DealCardList dealCardList={dealCardList} />
        //     </div>
        //     <div>
        //         <input accept="image/*" id="icon-button-file-2"
        //             type="file" onChange={addImage} style={{ display: 'none' }} />
        //         <label htmlFor="icon-button-file-2" style={{ width: "100%", height: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        //             <IconButton edge="start" color="primary" aria-label="upload picture" component="span" >
        //                 <PhotoCamera />
        //             </IconButton>
        //         </label >
        //         <div>
        //             <input placeholder="Deal Name" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={nameRef} type="text" />
        //             <input placeholder="Start Date" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={startDateRef} type="text" />
        //             <input placeholder="End Date" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={endDateRef} type="text" />
        //             <input placeholder="Max pax" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={paxRef} type="text" />
        //             <input placeholder="Additional Info" style={{ border: "1px solid #000", width: "100%", marginTop: "10px", textAlign: "center" }} ref={infoRef} type="text" />
        //             <div style={{ display: "flex", justifyContent: 'center', alignContent: 'center', margin: "10px" }}>
        //                 <Button onClick={addDeal}>Add deal</Button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
}

export default AddDealPage;