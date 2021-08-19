
const search=document.getElementById('city');
const cityname=document.getElementById('cityname');
const submit=document.getElementById('sub');
const temp=document.getElementById('temp');
const status=document.getElementById('status');


const get = async(event)=>{
    event.preventDefault(); // to clear search bar everytime
    let city=search.value;
    if(city==""){
        cityname.innerText="Please enter your city name"
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e85f3d2db75aa514ccfe2532a0e900de`;
            const response = await fetch(url);
            const data = await response.json();
            const arr= [data];

            console.log(data);
            temp.innerText=arr[0].main.temp;
            cityname.innerText=arr[0].name;
            status.innerText=arr[0].weather[0].main;
         
        }
        catch{
            cityname.innerText="Please enter city name Properly ";
        }
    }
}

submit.addEventListener('click', get);