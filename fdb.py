

import firebase_admin
from firebase_admin import credentials,db

cred = credentials.Certificate("key.json")
firebase_admin.initialize_app(cred,{"databaseURL":"https://ticket-booking-176ed-default-rtdb.firebaseio.com/"})

fdb=db.reference("/")

fdb.update({"from":"Punjab"})

data=fdb.get()

print(data)
