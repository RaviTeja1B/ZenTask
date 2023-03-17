let cDiv1=document.createElement("div")
document.body.appendChild(cDiv1)
cDiv1.setAttribute("class","container1")
cDiv1.setAttribute("id","div1")

let cDiv2=document.createElement("div")
cDiv1 .appendChild(cDiv2)
cDiv2.setAttribute("class","container2")
cDiv2.setAttribute("id","div2")

let inputElSearch=document.createElement("input")
inputElSearch.setAttribute("type","search")
inputElSearch.setAttribute("class","inputElS")
inputElSearch.setAttribute("id","inputEl_Search")
inputElSearch.setAttribute("placeholder","SearchHere")
cDiv2.appendChild(inputElSearch)

let buttonEl=document.createElement("button")
cDiv2.appendChild(buttonEl)
buttonEl.textContent="Search"
buttonEl.setAttribute("id","buttonEl_Search")




let cDiv3=document.createElement("div")
cDiv1.appendChild(cDiv3)
cDiv3.setAttribute("class","container3")
cDiv3.setAttribute("id","div3")

let cDiv4=document.createElement("div")
cDiv3.appendChild(cDiv4)
cDiv4.setAttribute("id","div4")


let buttonElAll=document.createElement("button")
cDiv4.appendChild(buttonElAll)
buttonElAll.textContent="All"
buttonElAll.setAttribute("id","allElButton")

let table1=document.createElement("table")
console.log(cDiv4.appendChild(table1))

let tableHead=document.createElement("thead")
table1.appendChild(tableHead)


let arr=["S.No","I.D","Name","Type","URL","PhoneNumber"]
  for (let i in arr){
      let tableHdata=document.createElement("th") 
      tableHead.appendChild(tableHdata)
      tableHdata.textContent=arr[i]
      tableHdata.setAttribute("id",("text"+[i]))
    }

let tableBody=document.createElement("tbody")
table1.appendChild(tableBody)
tableBody.id="table_body"




let url="https://api.openbrewerydb.org/breweries"
let users={}
async function getData(){
    try {
         users;
        const data=await fetch(url,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
         },
        })
        users=await data.json()
        console.table(users)



//Logic to Search the Data in Search Box
let searchBox=document.querySelector("#inputEl_Search")
searchBox.addEventListener("keyup",function(){
    let textEntered=searchBox.value
    console.log(textEntered)
//Logic to Populate the data
    let filterData=[]
    if(textEntered!=""){
//Populate data of the given
        filterData=users.filter((value)=>{
            return value.brewery_type.toLowerCase().includes(textEntered.toLowerCase()||value.phone.includes(textEntered)||value.name.toLowerCase().includes(textEntered.toLowerCase()))

        })

    displayData(filterData)
    }
    else{
        alert("please enter a valid cradentials")
      }

})



        //All Data Button

            let allData=document.getElementById("allElButton")
            allData.addEventListener("click",()=>{
            console.log("ravi")
            displayData(users)
        })

        let displayData=(users)=>{
                //select the table body using the table-body id
              

        let tableBody=document.querySelector("#table_body")
        let tableRow="";
   
       users.forEach((value,index)=>{
            tableRow+=`
            <tr>
                <td>${index+1}</td>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.brewery_type}</td>
                <td>${value.website_url}</td>
                <td>${value.phone}</td>
            <tr>`
          console.log( tableBody.innerHTML=tableRow)
           tableBody.style.color="blue"
          
        })
        }


    } catch (error) {
        console.log(error);
    }
   
}

getData()















