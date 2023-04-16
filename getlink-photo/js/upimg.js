
   const file = document.getElementById("file")
   const img = document.getElementById("img")
   const url = document.getElementById("url")
   file.addEventListener("change", ev => {
       const formdata = new FormData()
       formdata.append("image", ev.target.files[0])
       fetch("https://api.imgur.com/3/image/", {
           method: "post",
           headers: {
               Authorization: "Client-ID 6db47bd7029562d"
           },
           body: formdata
       }).then(data => data.json()).then(data => {
           img.src = data.data.link
           url.innerText = data.data.link
       })
   })
 
 var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 6db47bd7029562d");

var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};

fetch("https://api.imgur.com/3/album/ryQCmre", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
