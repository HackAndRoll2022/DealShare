from datetime import datetime, time, timedelta
from typing import List, Optional
from pydantic import BaseModel

class AuthDetails(BaseModel):
    username: str
    password: str

class User(BaseModel):
    id: int
    username: str
    password: str
    phone_number: Optional[int]
    
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
    