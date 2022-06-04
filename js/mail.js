const firebaseConfig = {
    apiKey: "AIzaSyB91tH9FSCIUhXW88rFLVu7udiWO28Ard8",
    authDomain: "contactform-yt.firebaseapp.com",
    databaseURL: "https://contactform-yt-default-rtdb.firebaseio.com",
    projectId: "contactform-yt",
    storageBucket: "contactform-yt.appspot.com",
    messagingSenderId: "509041990286",
    appId: "1:509041990286:web:49876c1c76cd9da4f387df"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB=firebase.database().ref("contactForm");

  document.getElementById("form-submit").addEventListener("submit",submitForm);

  document.getElementById("contact").addEventListener("submit",submitForm1);


  function submitForm(e){
      e.preventDefault();

      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
      var deparure = document.getElementById("deparure").value;
      var returne=document.getElementById("return").value;
      var round=document.getElementById("round").value;
      var oneway=document.getElementById("oneway").value;
     
      console.log(from,to,deparure,returne,round,oneway)
      saveMessages(from,to,deparure,returne,round,oneway);
  }
  
  function submitForm1(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    
   
    console.log(name,email,message);
    saveMessages1(name,email,message);
}


  const saveMessages=(from,to,deparure,returne,round,oneway)=>{
      var newContactForm=contactFormDB.push();
      newContactForm.set({
          from:from,
          to:to,
          deparure:deparure,
          returne: returne,
          round:round,
          oneway:oneway
      })
  }

  const saveMessages1=(name,email,message)=>{
    var newContactForm=contactFormDB.push();
    newContactForm.set({
        name:name,
        email:email,
        message:message
    })
  }

  const getElementVal=(id)=>{
      return document.getElementById(id).value;
  }