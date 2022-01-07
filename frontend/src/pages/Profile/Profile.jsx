import React, { useState, useEffect } from 'react'
import { Navigator } from "../../components/navbar/Navigator";
import './Profile.css';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


export default function Profile() {
  const [image, setImage] = useState("/images/avatar.jpg");
  const [state, toggleState] = useState(false);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [telegram, setTelegram] = useState();
  const IMAGE_STORAGE_KEY = "IMAGE.KEY";
  const NAME_STORAGE_KEY = "NAME.KEY";
  const PHONE_STORAGE_KEY = "PHONE.KEY";
  const TELEGRAM_STORAGE_KEY = "TELEGRAM.KEY";

  function handleChange(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  function changeAllUIStates(event) {
    console.log({state});
    toggleState(!state);
  }

  useEffect (()=> {
    const storedImage = localStorage.getItem(IMAGE_STORAGE_KEY);
    if (storedImage) {
      setImage(storedImage);
    } else {
      setImage("/images/avatar.jpg");
    }
  }, []);


  useEffect (()=> {
    localStorage.setItem(IMAGE_STORAGE_KEY, image)
  }, [image]);

  
  useEffect (()=> {
    const storedName = localStorage.getItem(NAME_STORAGE_KEY);
    if (storedName) {
      setName(storedName);
    } else {
      setName("");
    }
  }, []);

  useEffect (()=> {
    localStorage.setItem(NAME_STORAGE_KEY, name)
  }, [name]);

  useEffect (()=> {
    const storedPhone = localStorage.getItem(PHONE_STORAGE_KEY);
    if (storedPhone) { 
      setPhone(storedPhone);
    } else {
      setPhone("");
    }
  }, []);

  useEffect (()=> {
    localStorage.setItem(PHONE_STORAGE_KEY, phone)
  }, [phone]);

  useEffect (()=> {
    const storedTelegram = localStorage.getItem(TELEGRAM_STORAGE_KEY);
    if (storedTelegram) { 
      setTelegram(storedTelegram);
    } else {
      setTelegram("");
    }
  }, []);

  useEffect (()=> {
    localStorage.setItem(TELEGRAM_STORAGE_KEY, telegram)
  }, [telegram]);

  function handleNameTextInput(event) {
    const name = event.target.value;
    setName(name);
  }

  function handlePhoneTextInput(event) {
    const phone = event.target.value;
    setPhone(phone);
  }

  function handleTelegramTextInput(event) {
    const telegram = event.target.value;
    setTelegram(telegram);
  }

  return (
    <>
      <Navigator />
      <div style={{
        display: 'block',
        margin: 'auto',
        width: 400,
        flexWrap: 'wrap',
      }}>

        <div style={{ width: '100%', float: 'left', margin: '20px' }}>
          <img src={image} alt="avatar" />
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="contained-button-file"
        />
        <input accept="image/*" id="icon-button-file"
          type="file" onChange={handleChange} disabled={state} style={{ display: 'none' }} />
        <label htmlFor="icon-button-file" >
          <IconButton edge="start" color="primary" aria-label="upload picture" component="span" disabled={state} >
            <PhotoCamera style={{
              height: "25%", width: "25%"
            }} />
          </IconButton>
        </label>
        <label style={{width: "100%", margin:"15px"}}><input value={name} onChange={handleNameTextInput} placeholder="Name" style={{ border: "1px solid #000", display:"flex", textAlign:"center", height:"40px", width:"100%" }} type="text" disabled={state}/></label>
        <label style={{width: "100%", margin:"15px"}}><input value={phone} onChange={handlePhoneTextInput} placeholder="Phone" style={{ border: "1px solid #000", textAlign:"center", height:"40px", width:"100%" }} type="text" disabled={state}/></label>
        <label style={{width: "100%", margin:"15px"}}><input value={telegram} onChange={handleTelegramTextInput} placeholder="Telegram Handle" style={{ border: "1px solid #000", textAlign:"center", height:"40px", width:"100%" }} type="text" disabled={state}/></label>
        <div className="center" style={{width: "400px", margin:"15px"}}>
          <Button variant="contained" color="secondary" component="span" onClick={changeAllUIStates}>
            Edit
          </Button>
        </div>
      </div>
    </>
  );
}
