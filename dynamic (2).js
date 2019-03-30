function loadjson(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState ===4 && xhr.status =="200"){
  callback(xhr.responseText);
}
}
xhr.send();
}

loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);

})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h3");
  h2.textContent=p.name;
  left.append(h2);
   var h3=document.createElement("h3");
   h3.textContent=p.design;
   left.append(h3);
   var h4=document.createElement("h3");
   h4.textContent=p.email_id;
   left.append(h4);

   var h5=document.createElement("h3");
   h5.textContent=p.phone_no;
   left.append(h5);
 }
 var right=document.querySelector(".right");
 function career(c){
  var h1=document.createElement("h1");
   h1.textContent="Career objective";
   right.append(h1);
   var hr=document.createElement("hr");
   right.append(hr);
   var pa=document.createElement("p");
   pa.textContent=c.info;
   right.append(pa);
}
 function education(e){
   var h1=document.createElement("h1");
   h1.textContent="Education_details";
   right.append(h1);
   var hr=document.createElement("hr");
   right.append(hr);
   var table=document.createElement("table");
   // table.border="2";
   right.append(table);
   var tr1="<tr><th>s.no</th><th>institute</th><th>qualifucation</th><th>percentage</th><th>year_of_pasing</th></tr>";
   var tr2="";
   for( i=0;i<e.length;i++)
   {
     tr2=tr2+"<tr><td>"+e[i].s_no+"</td><td>"+e[i].institute+"</td><td>"+e[i].qualification+"</td><td>"+e[i].percentage+"</td><td>"+e[i].year_of_pasing+"</td></tr>";
   }
   table.innerHTML=tr1+tr2;
   right.append(table);
 }
function skills(s){
  var t=document.createElement("h1");
  t.textContent="skills";
  right.append(t);
 var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  right.append(ul);
}
