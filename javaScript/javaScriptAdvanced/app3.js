//Axios

const btn =  document.querySelector("button");

const btn2  = document.querySelector("#image");


let url = "https://catfact.ninja/fact";

let url2 = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async ()=> {
    let data =  await getFacts();
    document.getElementById('fact').innerText = data;
});

btn2.addEventListener("click", async ()=> {
    let data = await getImage();
    
    document.querySelector(".container").innerHTML = `<img src = "${data}" width="200px" alt = "DOg" />`
})


async function getFacts(){
    try{
        let res = await axios.get(url);
        
        return res.data.fact;

    }catch(e){
        console.log("ERROR-", e);
        return "NO Fact Found"
    }
}


async function getImage(){
   try {
    let res = await axios.get(url2)
    return res.data.message;
   
   } catch (error) {
    return "/"
   }
}





const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        let res = await axios.get(url);
        console.log(res.data);
    }catch(e){
        console.log("Error", e);
    }
}



let url4 = "http://universities.hipolabs.com/search?name=";

let btn3 = document.getElementById("search");

btn3.addEventListener("click", async()=> {
    console.log("College Btn click");
    let country = document.getElementById("countryName").value;
     let colArr = await  getCollege(country);
      console.log(colArr);
     show(colArr)

})


function show(colArr){
    colArr.forEach((curEm)=> {
      let li = document.createElement('li');
      li.innerText = curEm.name;

         document.getElementById("res").append(li);
    })
}




async function getCollege(country){
try{
 let res =    await axios.get(url4 + country);
 console.log(res);
 return res.data;
}catch(e){
    console.log("Error", e);
    return [];
}
}


