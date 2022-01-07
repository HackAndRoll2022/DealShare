from datetime import datetime, time, timedelta
from typing import List, Optional
from pydantic import BaseModel

class RegisterDetails(BaseModel):
    username: str
    password: str
    telegram: Optional[str]
    phone_number: int
    
class LoginDetails(BaseModel):
    username: str
    password: str

class User(BaseModel):
    id: int
    username: str
    password: str
    telegram: Optional[str]
    phone_number: int
    
class Combo(BaseModel):
    id: int
    description: str
    image: str
    start_date: datetime
    end_date: datetime
    type: str
    pax: int
    
class Vendor(BaseModel):
    id: int
    outlet: str
    location: str
    
class Match(BaseModel):
    id: int
    users: List[int] #[userid]
    combo_id: int
    vendor_id: int
    