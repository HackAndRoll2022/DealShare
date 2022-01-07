import {React, useState, useRef} from 'react'
import DealCardList from "../../components/DealCardList/DealCardList";
import {Button} from "react-bootstrap"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default function AddDealPage() {
    const [dealCardList, setDealCardList] = useState([]);
    const [image, setImage] = useState("/images/avatar.jpg");
    const nameRef = useRef();
    const startDateRef =  useRef();
    const endDateRef = useRef();
    const paxRef = useRef();
    const infoRef = useRef();

    function addImage(event) {
        console.log("add");
        setImage(URL.createObjectURL(event.target.files[0]));
        console.log("add"+image);
    }

    function addDeal() {
        const name = nameRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const pax = paxRef.current.value;
        const info = infoRef.current.value;
        console.log(image);
        setDealCardList(deals => {
            return [...deals, {id: name, imgSrc: image, name: name, startDate: startDate, endDate: endDate, pax: pax, info: info}];
        })
    }

    return (
        <div style ={{width:"100%", height:"100%"}}>
            <div style ={{display:"flex", width:"100%", height:"30%"}}>
                <DealCardList dealCardList={dealCardList}/>
            </div>
            <div>
            <input accept="image/*" id="icon-button-file-2"
                type="file" onChange={addImage} style={{ display: 'none' }} />
            <label htmlFor="icon-button-file-2" style={{width:"100%", height:"30px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <IconButton edge="start" color="primary" aria-label="upload picture" component="span" >
                <PhotoCamera />
            </IconButton>
            </label>
                <input placeholder="Deal Name" style ={{border: "1px solid #000", width:"100%", marginTop:"10px", textAlign:"center"}} ref={nameRef} type="text"/>
                <input placeholder="Start Date" style ={{border: "1px solid #000", width:"100%", marginTop:"10px", textAlign:"center"}} ref={startDateRef} type="text"/>
                <input placeholder="End Date" style ={{border: "1px solid #000", width:"100%", marginTop:"10px", textAlign:"center"}} ref={endDateRef} type="text"/>
                <input placeholder="Max pax" style ={{border: "1px solid #000", width:"100%", marginTop:"10px", textAlign:"center"}} ref={paxRef} type="text"/>
                <input placeholder="Additional Info" style ={{border: "1px solid #000", width:"100%", marginTop:"10px", textAlign:"center"}} ref={infoRef} type="text"/>
                <div style ={{display:"flex", justifyContent: 'center', alignContent: 'center', margin:"10px"}}>
                <Button onClick={addDeal}>Add deal</Button>
                </div>
            </div>
        </div>
    )
}
