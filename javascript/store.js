function Submit(){
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
    var rollno=document.getElementById('rollno').value;
    var phonenumber=document.getElementById('phonenumber').value;
    var mailid=document.getElementById('mailid').value;
    var Degree =document.getElementById('Degree').value;
    var dcollege=document.getElementById('dcollege').value;
    var Branch=document.getElementById('Branch').value;
    var dmarks=document.getElementById('dmarks').value;
    var Inter=document.getElementById('Inter').value;
      var icollege=document.getElementById('icollege').value;
     var ibranch=document.getElementById('ibranch').value;
      var imarks=document.getElementById('imarks').value;
        var Board=document.getElementById('Board').value;
      var School=document.getElementById('School').value;
      var Medium=document.getElementById('Medium').value;
      var smarks=document.getElementById('smarks').value;
     var Skills=document.getElementById('Skills').value;


     var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;
     indexedDB?console.log("Success"):console.log("browser not supported");
    var request=indexedDB.open("DBMS",1);
    var result;
    var store;
    console.log(request);
    //upgradeneeded
    request.onupgradeneeded=function(e){
      result=e.target.result;
      store=result.createObjectStore("resume",{KeyPath:'Id',autoIncrement:true});
    }
    //success
    request.onsuccess=function(e){
      console.log("reached successfully");
      result=e.target.result;
      var tx=result.transaction("resume","readwrite");
      store=tx.objectStore("resume");
      store.put({
        co:career,
        Name:name,
        Rollno:rollno,
        PhoneNumber:phonenumber,
        Mailid:mailid,
        Education:[{
          Degree:Degree,
          college:dcollege,
          branch:branch,
          marks:dmarks
        },
        {
          Degree:idegree,
          college:icollege,
          branch:ibranch,
          marks:imarks
        },
        {
          Degree:Board,
          college:School,
          branch:Medium,
          marks:smarks
        }
      ],
      });
    }
    //error
    request.onerror=function(e){
      console.log("error"+e);
    }
}
