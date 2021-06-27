const baseURL = 'https://ghibliapi.herokuapp.com/films';

// An Array for results from the loop
// let arr = new Array;

async function Ffunc(){
    
    fetch(baseURL)
    .then(response => {
        // console.log(response.clone().json())
        return response.json();
    })
    .then(json => {
        create(json)
        // for (let i = 0; i < json.length; i++) {
        //     console.log(i)
        //     console.log(json[i].title);
        //     console.log(json[i].original_title);
        //     console.log(json[i].release_date);
        //     console.log(json[i].running_time);
        //     console.log(json[i].description);

        //     // Something like cloning into Array
        //     arr.push({
        //     'num': i,
        //     'title': json[i].title,
        //     'original_title': json[i].original_title,
        //     'running_time': json[i].running_time,
        //     'description': json[i].description,
        //     'director': json[i].director,
        //     'producer': json[i].producer,
        //     'release_date': json[i].release_date,
        //     })
            
        // }
        // // Sorts by some criteria
        // // return arr.sort((a, b) => a.running_time - b.running_time);
        // console.log(arr.length)
        // return arr;

    })
    // .then(arr =>{
    //     create(arr)
    // })

}
Ffunc(baseURL)
// setTimeout(() => console.log(arr),) // Call immediately

// setTimeout(() => console.log(json[1].title),1000)

// console.log(arr[2])




// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function create(json){
let parent = document.querySelectorAll('div.dropdown-menu');
// console.log(parent);
let title = document.querySelectorAll('.btn-check:active+.btn-secondary, .btn-check:checked+.btn-secondary, .btn-secondary.active, .btn-secondary:active, .show>.btn-secondary.dropdown-toggle');


    for(let i = 0; i < json.length; i++){

        // console.log(title);


        title[i].innerHTML = '<b>Title:</b> ' + '<i>' + json[i].title + '</i>'

        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');


        p1.innerHTML = '<b>Original title:</b> ' + '<i>' + json[i].original_title + '</i>'
        p2.innerHTML = '<b>Running time:</b> ' + json[i].running_time
        p3.innerHTML = '<b>Description:</b> ' + json[i].description
        p4.innerHTML = '<b>Director:</b> ' + json[i].director
        p5.innerHTML = '<b>Producer:</b> ' + json[i].producer
        p6.innerHTML = '<b>Release date:</b> ' + json[i].release_date
        
        // console.log(p1)
        parent[i].append(p1);
        parent[i].append(p2);
        parent[i].append(p3);
        parent[i].append(p4);
        parent[i].append(p5);
        parent[i].append(p6);



        // parent.setAttribute('id', 'ideas' + [j]) // create new id + num
        // console.log(parent);

    }
}
