
let sample_values = [];
let otu_ids = [];
let otu_labels = [];

// call the source data
d3.json("samples.json").then(function(data) {
    
    console.log(data);

    function bar(data){
        var chart_data = {
            x:data.otu_ids,
            y:data.sample_values,
            type:'bar'
        }

        Plotly.newPlot('bar', chart_data);
    }

    bar(data)
});

d3.json("samples.json").then(function(data) {


    function bubble(data){
        var bubble_data = {
            x:data.otu_ids,
            y:data.sample_values,
            markersize: sample_values,
            markerColors:otu_ids,
            text:otu_labels,
            type:'bubble'
        }

        Plotly.newPlot('bubble', bubble_data);
    }

    bubble(data)
});

// //changing dropdown menu items
// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly(){
//     let dropdownMenu=d3.select("#selDataset");
//     var dataset = dropdownMenu.property("value");
//     console.log(dataset);
//     let x = []
//     let y = []



// }


