let userImgs = document.querySelectorAll(".img-items")
let cpuImgs = document.querySelectorAll(".cpu-icon")
let userPoint = document.querySelector(".point-user")
let cpuPoint = document.querySelector(".point-cpu")
let refresh  = document.querySelector(".refresh")
let coverImg = document.querySelector(".cover")

let obj = ['Paper' , 'Rock' , 'Gheichii']

for(let i=0;i<=userImgs.length-1;i++){
    userImgs[i].addEventListener("click",e=>{
        for(let j=0;j<=userImgs.length-1;j++){
            if(i!==j){
                userImgs[j].classList.add('hidden')
                coverImg.innerHTML = `<h1>Choose Your ${obj[i]}</h1>` 
            }
        }
        randomForCpu = Math.floor(Math.random()*3);
        cpuSelectedItem(randomForCpu);
        logicGame(i,randomForCpu);

    })
}

function cpuSelectedItem(item){
    for(let i=0 ; i<=cpuImgs.length-1;i++){
        if(item == i){
            cpuImgs[i].classList.remove('hidden')
        }else{
            cpuImgs[i].classList.add('hidden')
        }
    }
}

let userCounter = 1;
let cpuCounter = 1;
function logicGame(user,cpu){
    if(userCounter == 5){
        alert("User Is Win")
        location.reload();
    }
    if(cpuCounter == 5){
        alert("Cpu Is Win")
        location.reload();
    }
    if(user !== cpu){
        if(user === 0){
            if(cpu === 1){
                userPoint.innerHTML = Number(userPoint.innerText)+1
                userCounter+=1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerText)+1
                cpuCounter+=1
            }
        }
        if(user == 1){
            if(cpu == 2){
                userPoint.innerHTML = Number(userPoint.innerText)+1
                userCounter+=1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerText)+1
                cpuCounter
            }
        }
        if(user == 2){
            if(cpu == 0){
                userPoint.innerHTML = Number(userPoint.innerText)+1
                userCounter+=1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerText)+1
                cpuCounter+=1
            }
        }
    }
}


refresh.addEventListener("click",refrehPage)


function refrehPage(){
    for (let i=0;i<=userImgs.length-1;i++){
        userImgs[i].classList.remove('hidden');
        cpuImgs[i].classList.add('hidden')
        coverImg.innerHTML = `<h1>Choose Your Weapon</h1>` 

    }
}

document.addEventListener("keydown",e=>{
    if(e.key == "r"){
        refrehPage()
    }
})
