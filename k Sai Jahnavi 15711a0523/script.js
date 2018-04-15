function loadjson(file,callback) {
var rawfile =new XMLHttpRequest();
rawfile.overrideMimeType("application/json");
rawfile.open("GET",file,true);
rawfile.onreadystatechange=function () {
  if(rawfile.readyState===4 && rawfile.status=="200"){
    callback(rawfile.responseText);
  }
}
rawfile.send();
}
loadjson("resources/resume.json",function(text){
   var data=JSON.parse(text);
   console.log(data);
}); 
