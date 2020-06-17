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
  const TURMA ="TurmaA";
  let db = firebase.firestore();
  let auth = firebase.auth();

  /*//add usuarios:
  let newUserEmail = "pesado@hotmail.com";
  let newUserPassword = "123abc";
  auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword).then(user =>{
    console.log(user);
  }).catch(error => {console.log(error);})

  
  
  //add aluno
  db.collection(TURMA).add({
    nome: "Marcos",
    sobrenome: "Antônio",
    notas: {nota1: 9.6, nota2: 7.5}
  }).then((doc)=>{
    console.log("Documento inserido com sucesso", doc);
  }).catch(err => {
    console.log(err);
  })
  //add nota
  db.collection(TURMA).doc("alunonovo").update({
    sobrenome: "Ferreira",
    "notas.nota1":10
  },
  ).then(()=>{
    console.log("Documento inserido com sucesso");
  }).catch(err => {
    console.log(err);
  })

  //Ler todos os dados de uma coleção
  /*db.collection("TurmaA").get().then((snapshot)=>{
      snapshot.forEach((doc)=>{
        let aluno = doc.data();
        console.log(aluno.nome);  
        console.log(doc.data());
      })
  })*/
  //ler nome
  /*let docRef = db.collection("TurmaA").doc("mOt5Bt4ItfFfXXyofhQW");
  docRef.get().then((doc)=>{
      console.log(doc.data().nome);
  })
  // buscar alunos iguais a José
  db.collection("TurmaA").where("nome","==","José").get().then (snapshot=>{
    snapshot.forEach((doc)=>{
      let aluno = doc.data();
      console.log(aluno.nome, aluno.sobrenome);  
    })
  })*/

