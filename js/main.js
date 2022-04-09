

let years = 3

let holes = 16




//let roi_item = sell_item / buy_item


let sunflower= {
    name:"SunFlower",
    time_item : 1,
    buy_item : 0.001,
    sell_item : 0.002
}

let potato= {
    name:"Potato",
    time_item : 5,
    buy_item : 0.01,
    sell_item : 0.014
}

let pumpkin= {
    name:"Pumpkin",
    time_item : 30,
    buy_item : 0.02,
    sell_item : 0.04
}

let carrot= {
    name:"Carrot",
    time_item : 60,
    buy_item : 0.05,
    sell_item : 0.8
}

let cabbage= {
    name:"Cabbage",
    time_item : 120,
    buy_item : 0.1,
    sell_item : 0.15
}

let beetroot= {
    name:"Beetroot",
    time_item : 4*60,
    buy_item : 0.02,
    sell_item : 0.28
}


let coliflower= {
    name:"Cauliflower",
    time_item : 8*60,
    buy_item : 0.3,
    sell_item : 0.425
}

let parsnip= {
    name:"Parsnip",
    time_item : 12*60,
    buy_item : 0.5,
    sell_item : 0.65
}

let radish= {
    name:"Radish",
    time_item : 24*60,
    buy_item : 0.7,
    sell_item : 0.95
}

let wheat= {
    name:"Wheat",
    time_item : 24*60,
    buy_item : 0.51,
    sell_item : 0.7
}

let kale= {
    name:"Kale",
    time_item : 7*24*60,
    buy_item : 1,
    sell_item : 2
}

let all= [
    sunflower,
    potato,
    pumpkin,
    carrot,
    cabbage,
    beetroot,
    coliflower,
    parsnip,
    radish,
    wheat,
    kale
]


results_tag =$("#results")


function calculate_roix(sell_item, buy_item, time_item){


    let time_ref= years * 1 * 365 * 24 * 60
    let roi_item = sell_item / buy_item

    return ( time_ref / time_item) * holes * roi_item * buy_item

}

function calculate_roi(item){


    let time_ref= years * 1 * 365 * 24 * 60
    let roi_item = item.sell_item / item.buy_item

    return ( time_ref / item.time_item) * holes * roi_item * item.buy_item

}

function calculate_all(){



    let all_calculated = []
    
    all.forEach((item, index)=>{

        //console.log(item)
        
        let numba = index +1
        let calculated_roi = calculate_roi(item)
        let txt= " $ " +  Math.round(calculated_roi).toString();
        let final_result = calculated_roi
        all_calculated.push( {name:item.name, text : txt, final_result: final_result} ); 


    })


    return all_calculated
}





function refresh() {
    location.reload();

}


//********************** */

function getYears(){

    years = document.getElementById('years-reference').value;

    //alert(years);
}

function getHoles(){

    holes = document.getElementById('holes').value;

    //alert(years);
}



function calculation() {

    results_tag.empty();


    let roi_of_all = calculate_all();

    roi_of_all = roi_of_all.sort((a,b) => (a.final_result > b.final_result) ? -1 : ((b.final_result > a.final_result) ? 1 : 0));

    //document.getElementById('roi').innerHTML  = roi
    roi_of_all.forEach((item, index)=>{

        results_tag.append("<tr><td>"+item.name +"</td><td>"+item.text+"</td></tr>");

    });

    //console.log(roi_of_all);
    


}