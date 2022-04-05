
let sample_values = [];
let otu_ids = [];
let otu_labels = [];

// call the source data
d3.json("samples.json").then(function(data) {
    
    console.log(data);

    function bar(data){
        var chart_data = {
            x:data.samples[0].otu_ids.slice(0,10),
            y:data.samples[0].sample_values.slice(0,10),
            type:'bar'
        }

        Plotly.newPlot('bar', [chart_data]);
    }

    bar(data)

    function bubble(data){
        var bubble_data = {
            x:data.samples[0].otu_ids.slice(0,10),
            y:data.samples[0].sample_values.slice(0,10),
            markerSize: data.samples.sample_values,
            markerColors:data.samples.otu_ids,
            text:data.samples.otu_labels,
            type:'bubble'
        }

        Plotly.newPlot('bubble', [bubble_data]);
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


