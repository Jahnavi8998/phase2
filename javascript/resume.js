var query=window.location.search.substring(1).split("?");
var parent;
query.map((data)=>{
  let splitdata=data.split("=");
  parent=parseInt(splitdata[1]);
});
var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;
indexedDB?console.log("Success"):console.log("browser not supported");
var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);
//upgradeneeded
request.onupgradeneeded=function(e){
 result=e.target.result;
 store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}
//success
request.onsuccess=function(e){
 console.log("reached successfully");
 result=e.target.result;
 var tx=result.transaction("resume","readwrite");
 store=tx.objectStore("resume");
var getExact=store.get(parent);
 getExact.onsuccess=function(get){
   console.log(e.target.result);
 }
}
