
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCcRR-8JzwdftzyYOy_3pqr0iDE1Ei4l4A",
    authDomain: "siriusxp-1d049.firebaseapp.com",
    databaseURL: "https://siriusxp-1d049.firebaseio.com",
    projectId: "siriusxp-1d049",
    storageBucket: "siriusxp-1d049.appspot.com",
    messagingSenderId: "640101814778"
  };

  firebase.initializeApp(config);




  var db = firebase.firestore();
     var inputDate = document.getElementById("date");
     var inputName = document.getElementById("s_name");
     var inputRoll = document.getElementById("s_roll");
     var checkList = document.getElementById('check');
     var inputSxp = document.getElementById("sxp");
     var submitButton = document.getElementById("btn-submit");

     var row = document.createElement('tr');

      inputDate.innerHTML = new Date();
      console.log(inputDate);

      var checkBox = document.createElement('input');
      var checkBox1 = document.createElement('input');
      var titleBlock = document.createElement('span');
      var titleBlock1 = document.createElement('span');
      var wrapper = document.createElement('div');
      var wrapper1 = document.createElement('div');

     /*var checkBox = document.getElementById('check_1');
      var checkBox1 = document.getElementById('check_2');
      //var titleBlock = document.getElementById('span');
     // var titleBlock1 = document.getElementById('span');
      var wrapper = document.getElementById('div_1');
      var wrapper1 = document.getElementById('div_2');*/

db.collection("Student").orderBy('stdName').get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {

    var name_val = doc.data().stdName;
    var id_val = doc.data().stdRoll;
    window.value = doc.id;
    console.log(window.value);
    console.log(name_val,id_val);

    inputName = name_val;
    inputRoll = id_val;
    console.log(name_val,id_val);


    /*var student1 = doc.data().p_Counter;
    var student2 = doc.data().a_Counter;

    checkBox.setAttribute("data-id", window.value);
    checkBox.p_Counter = student1.p_Counter;
    wrapper.setAttribute("present",window.value);

    checkBox1.setAttribute("data-id", window.value);
    checkBox1.a_Counter = student2.a_Counter;
    wrapper1.setAttribute("absent",window.value);*/

   
    var student1 = doc.data().p_Counter;
    var student2 = doc.data().a_Counter;
  
    /*checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("data-id", window.value);
    checkBox.p_Counter = student1.p_Counter;
    titleBlock.innerHTML = "Present";
    wrapper.setAttribute("present",window.value);
    //wrapper.appendChild(checkBox);
    //wrapper.appendChild(titleBlock);
    //checkList.appendChild(wrapper);
    //checkBox.addEventListener('click', handleCheckToggle);
  
    checkBox1.setAttribute("type", "checkbox");
    checkBox1.setAttribute("data-id", window.value);
    checkBox1.a_Counter = student2.a_Counter;
    titleBlock1.innerHTML = "Absent";
    wrapper1.setAttribute("absent",window.value);
   //wrapper1.appendChild(checkBox1);
   // wrapper1.appendChild(titleBlock1); 
    //checkList.appendChild(wrapper1); */

  var sxp = doc.data().sxp;
  inputSxp = sxp;
  console.log(inputSxp);
   
  //appendCall();
 // checkBoxTrigger(doc);
  //console.log(checkList);
  //checkBoxWrapper();
  $("#table_body").append("<tr><td>" + inputName+ "</td><td>" + inputRoll + "</td><td>" + 
  
  
  checkBox.setAttribute("type", "checkbox"),
  checkBox.setAttribute("data-id", window.value),
  checkBox.p_Counter = student1.p_Counter,
  titleBlock.innerHTML = "Present",
  wrapper.setAttribute("present",window.value),
  wrapper.appendChild(checkBox),
  wrapper.appendChild(titleBlock),
  checkList.appendChild(wrapper),
  //checkBox.addEventListener('click', handleCheckToggle);

  checkBox1.setAttribute("type", "checkbox"),
  checkBox1.setAttribute("data-id", window.value),
  checkBox1.a_Counter = student2.a_Counter,
  titleBlock1.innerHTML = "Absent",
  wrapper1.setAttribute("absent",window.value),
 wrapper1.appendChild(checkBox1),
  wrapper1.appendChild(titleBlock1),
  checkList.appendChild(wrapper1)
  
  //wrapper.appendChild(checkBox),
  //wrapper.appendChild(titleBlock),
  //row.appendChild(wrapper).innerHTML,
  //wrapper.appendChild(row),
        //  checkList.innerHTML
 // wrapper1.appendChild(checkBox1),
 // wrapper1.appendChild(titleBlock1),
 // row.appendChild(wrapper1).innerHTML,
  //wrapper1.appendChild(row)
  + "</td><td>" + inputSxp + "</td></tr>"); 
  console.log(checkList);
});
}); 

//function appendCall() {
//$("#table_body").append("<tr><td>" + inputName+ "</td><td>" + inputRoll + "</td><td>"  + checkBoxTrigger(doc) + "</td><td>" + inputSxp + "</td></tr>"); 
//console.log(checkList.innerHTML);
//}

//submitButton.addEventListener("click", e => { 
  db.collection("Student").orderBy('stdName').get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {

    checkBox.addEventListener("click", change =>  {

    console.log("im in checklist Listner");
    

      if(checkBox.p_Counter){
        db.collection('Student').doc(id).update({
          
          sxp : sxp + 1
          
        });
        change.appendCall();
        console.log("Updated");
      }
      else{
        console.log("He is Absent");
      }

   }) 
  }) 
});
//alert("Updated");
//});
              
/*function checkBoxTrigger(doc) {





}*/

  

  //$("#check").append(checkBox.innerHTML,checkBox1.innerHTML);
  //checkBox1.addEventListener('click', handleCheckToggle1);
 
    /*titleBlock.innerHTML = doc.data().p_Name;
  console.log(titleBlock);
 
  titleBlock1.innerHTML = doc.data().a_Name;
console.log(titleBlock1);
 
  wrapper.setAttribute("present",window.value);
wrapper.appendChild(checkBox);
checkList.appendChild(wrapper);
  console.log(wrapper);

  wrapper1.setAttribute("absent",window.value);
  wrapper1.appendChild(checkBox1);
  checkList.appendChild(wrapper1);
 
  console.log(wrapper1);*/



/*function checkBoxWrapper() {
  wrapper.appendChild(checkBox);
  wrapper.appendChild(titleBlock);
  checkList.appendChild(wrapper);

  wrapper1.appendChild(checkBox1);
  wrapper1.appendChild(titleBlock1);
  checkList.appendChild(wrapper1);


}*/


//on check box click update box
/*function handleCheckToggle (e) {
  var targetElement = e.target; 
  var checked = targetElement.checked;
  var id = targetElement.dataset.id; 

  if(targetElement){
    db.collection('Student').doc(id).update({
      counter: checked,
      sxp : 1
    });
  }
}
*/

/*function handleCheckToggle1 (e) {
  var targetElement = e.target; 
  var checked = targetElement.checked;
  var id = targetElement.dataset.id; 

  if(targetElement){
    db.collection('Student').doc(id).update({
      counter: checked,
      sxp : 0
    });
   // var SXP = doc.data().sxp;
   // if(counter == true){
     // inputSxp.innerHTML = SXP+1;
    //}else {
      //inputSxp.innerHTML = 0;
    //}
  }
}*/

  /*var db = firebase.firestore();
  db.collection("Student").get().then((querySnapshot) => {
      if(querySnapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              //content += '<td>' + val.std + '</td>';
              content += '<td>' + val.stdName + '</td>';
              content += '<td>' + val.stdRoll + '</td>';
              //content += '<td>' + val.imagen + '</td>';
              //content += '<td>' + val.tipo + '</td>';
              content += '</tr>';
          });
          $('#ex-table').append(content);
      }
  });*/

      
     /*const stud = document.getElementById('table-std');

    function renderStudent(doc) {
      let tr_start = document.createElement('tr');
      let td_slno = document.createElement('td');
      let td_name = document.createElement('td');
      let td_roll = document.createElement('td');
      let td_att_status = document.createElement('td');
      let td_sxp = document.createElement('td');

      tr_start.setAttribute('data-id',doc.id);
      td_name.textContent = doc.data().stdName;
      td_roll.textContent = doc.data().stdRoll;
      console.log(td_name,td_roll);

      inputName.innerHTML = td_name;

      tr_start.appendChild(stdName);
      tr_start.appendChild(stdRoll);

      stud.appendChild(tr_start);


    }

    db.collection('Student').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        renderStudent(doc);
      })
    })  */
     
    /* db.collection("student").getCollections().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("doc:" + doc.stdName);
        });
    });*/
    
    /*db.collection("Student").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
       if(doc.exists) {
         var mydata = doc.data();
         inputName.innerHTML = mydata.stdName;
         inputRoll.innerHTML = mydata.stdRoll;
         console.log("document Data", doc.data());
       } else {
         console.log("No Such Data");
       }
     });
    });/*
     

     /*db.collection("Student").doc("one").get()
     .then(function(snap){
 
            const StudentName = snap.child("stdName").val();
            const StudentRoll = snap.child("stdRoll").val();

            $("#table_body").append("<tr><td>" + StudentName + "</td><td>" + StudentRoll + "</td></tr>")
        });*/
