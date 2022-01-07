from fastapi import FastAPI, Depends, HTTPException
from pymongo import MongoClient
from .auth import AuthHandler
from .schemas import AuthDetails, User
from .config import mongodb_uri
import uuid

app = FastAPI()

client = MongoClient(mongodb_uri, connect=False)

mydb = client['myFirstDatabase']

users = mydb['users']

auth_handler = AuthHandler()

@app.get("/")
def root():
    return "Hello World"

@app.post('/register', status_code=201)
def register(auth_details: AuthDetails):
    if users.find_one({"username": auth_details.username}):
        raise HTTPException(status_code=400, detail='Username is taken')
    if users.find_one({"phone_number": auth_details.phone_number}):
        raise HTTPException(status_code=400, detail='Phone number already exists')
    if (auth_details.telegram != '' and
        auth_details.telegram != None and
        users.find_one({"telegram": auth_details.telegram})):
        raise HTTPException(status_code=400, detail='Telegram already exists')
    hashed_password = auth_handler.get_password_hash(auth_details.password)
    mydb.users.insert_one({
        'id': uuid.uuid1(),
        'username': auth_details.username,
        'password': hashed_password,
        'phone_number': auth_details.phone_number,
        'telegram': auth_details.telegram,
    })
    return


@app.post('/login')
def login(username: str, password: str):
    user: User = None
    for x in users:
        if x['username'] == username:
            user = x
            break
    
    if (user is None) or (not auth_handler.verify_password(password, user['password'])):
        raise HTTPException(status_code=401, detail='Invalid username and/or password')
    
    token = auth_handler.encode_token(user['username'])
    return { 
            'token': token,
            'phone_number': user.phone_number, 
            'username': user.username, 
            'telegram': user.telegram 
            }

    
@app.get('/protected')
def protected(username=Depends(auth_handler.auth_wrapper)):
    return { 'name': username }
