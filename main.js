// 1
document.getElementById('text');

// 2
document.getElementsByTagName('h1')

// 3
document.getElementsByClassName('box')

// 4
document.querySelector('h1').textContent = "Hello World"

// 5
document.querySelector('#btn').addEventListener('click', () => {
   
    if(document.querySelector('#flex').style.flexDirection == "row") {
        document.querySelector('#flex').style.flexDirection = "column";
    }

    else {
        document.querySelector('#flex').style.flexDirection = "row";
    }
})


// 6

document.querySelector('#heading').setAttribute("style", "background-color:red");

// 7

document.querySelector('#btn-para').addEventListener('click', () => {
    document.querySelector('#para').textContent = "welcom to elevation academy"
})


// 8 

function hey(callBack) {
    callBack();
}

function me() {
    console.log("hey");
}

hey(me);

// callback hell

setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2);
       setTimeout(() => {
        console.log(3);
            setTimeout(() => {
        console.log(4);
    },1000)
    }, 1000)
    }, 1000)
},1000)


// for(let i = 0; i<=5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },i*1000)
// }



function hey(para) {
    return new Promise((resolve, reject) => {
        if(para == "Yes") {
            resolve('passed')
    }
    else{
        reject('falied')
    }
}) 
      
}

hey('Yes').then(value => console.log(value)).catch(rej => console.log(rej))


    



