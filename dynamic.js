function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}

loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
})
var child1=document.querySelector(".child1");
function profile(p){
  var h1=document.createElement("h1");
  h1.textContent="my profile";
  child1.append(h1);

  var image=document.createElement("img");
  image.src=p.image;
  child1.append(image);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  child1.append(h2);

  var h3=document.createElement("h3");
  h3.textContent=p.designation;
  child1.append(h3);

  var h4=document.createElement("h4");
  h4.textContent=p.phone_no;
  child1.append(h4);

  var h4=document.createElement("h4");
  h4.textContent=p.email;
  child1.append(h4);

  var h5=document.createElement("h5");
  h5.textContent=p.place;
  child1.append(h5);
}


loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
})
var child2=document.querySelector(".child2");
function career(c){
var h2=document.createElement("h2");
h2.textContent="career objective";
child2.append(h2);
var hr=document.createElement("hr");
child2.append(hr);
var h2=document.createElement("p");
h2.textContent=c.info;
child2.append(h2);
var hr=document.createElement("hr");
child2.append(hr);
}


loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  education_details(data.education_details);
})
var child2=document.querySelector(".child2");
function education_details(e){
 h2=document.createElement("h2");
h2.textContent="education details";
child2.append(h2);
var hr=document.createElement("hr");
child2.append(hr);
var table=document.createElement("table");
//child2.append(table);
var tr1="<tr><th>s_no</th><th>study</th><th>percentage</th><th>institute</th><th>year_of_passing</th></tr>";
var tr2="";
for(i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].s_no+"</td><td>"+e[i].study+"</td><td>"+e[i].percentage+"</td><td>"+e[i].institute+"</td><td>"+e[i].year_of_passing+"</td></tr>";
}
table.innerHTML=tr1+tr2;
child2.append(table);
var hr=document.createElement("hr");
child2.append(hr);
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  skills(data.skills);
})
var child2=document.querySelector(".child2");
function skills(s){
  var h2=document.createElement("h2");
  h2.textContent="skills";
  child2.append(h2);
  var hr=document.createElement("hr");
  child2.append(hr);
  var ul=document.createElement("ul");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  child2.append(ul);
}
