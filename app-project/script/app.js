  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCuqV60G7AELSkwq-hojVRonOO9F0gJzqM",
    authDomain: "appproject-15e8d.firebaseapp.com",
    databaseURL: "https://appproject-15e8d.firebaseio.com",
    projectId: "appproject-15e8d",
    storageBucket: "appproject-15e8d.appspot.com",
    messagingSenderId: "512021049925",
    appId: "1:512021049925:web:b1a25640c3fdeee136a92c",
    measurementId: "G-CJ5BCZV6CC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  
  let db = firebase.firestore();
  //Ler todos os dados de uma coleção
  /*db.collection("TurmaA").get().then((snapshot)=>{
      snapshot.forEach((doc)=>{
        let aluno = doc.data();
        console.log(aluno.nome);  
        console.log(doc.data());
      })
  })*/

  let docRef = db.collection("TurmaA").doc("mOt5Bt4ItfFfXXyofhQW");
  docRef.get().then((doc)=>{
      console.log(doc.data().nome);
  })
