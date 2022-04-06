
let sample_values = [];
let otu_ids = [];
let otu_labels = [];

// call the source data and begin main function
d3.json("samples.json").then(function(data) {
    //test
    console.log(data);

    function demo_pop(data,i){
        var get_demo = d3.select('#sample-metadata.panel-body');
        var demograph = get_demo.append("h4");
        demograph.append("h5").text("ID: {$data.metadata[i].id}");
        demograph.append("h5").text("Ethnicity: {$data.metadata[i].ethnicity}");
        demograph.append("h5").text("Gender: {$data.metadata[i].gender}");
        demograph.append("h5").text("Age: {$data.metadata[i].age}");
        demograph.append("h5").text("Location: {$data.metadata[i].location}");
        demograph.append("h5").text("Bellybutton Type: {$data.metadata[i].bbtype}");
        demograph.append("h5").text("Wash Frequency: {$data.metadata[i].wfreq}");
    };
    demo_pop(data);

    function dropdownMenu(data){
        for (i = 0; i<data.names.length; i++){
            var item = document.createElement("option");
            item.text = data.names[i];
            item.setAttribute("value", data.names[i])
            document.getElementById("selDataset").appendChild(item);
        }
    }
    dropdownMenu(data);

    //bar chart
    function bar(data){
        var chart_data = {
            x:data.samples[0].otu_ids.slice(0,10),
            y:data.samples[0].sample_values.slice(0,10),
            type:'bar'
        }
        var layout = {
            showlegend:false,
            height: 400,
            width: 600
        };
        Plotly.newPlot('bar', [chart_data], layout);
    }
    //call bar chart from within function!
    bar(data);


    //continue in same function with bubble chart
    function bubble(data){

        var bubble_data = {
            x:data.samples[0].otu_ids,
            y:data.samples[0].sample_values,
            text: data.samples[0].otu_labels,
            mode: 'markers',
            marker:{
                color:data.samples[0].otu_ids,
                size:data.samples[0].sample_values,
                text:data.samples[0].otu_labels
            }
            // markerSize: data.samples.sample_values,
            // markerColors:data.samples.otu_ids,

        };
        var layout = {
            showlegend:false,
            height: 400,
            width: 700
        };

        Plotly.newPlot('bubble', [bubble_data], layout);
    };
    //call bubble chart from within function
    bubble(data);




});

// function dropDown(data){
//     let select_name = d3.select("#selDataset")

//     data.forEach((sample) =>{
//         select_name.append("option").text(sample).property("value", sample);
//     });
// }


// function updatePlotly(){
//     let dropdownMenu=d3.select("#selDataset");
//     var dataset = dropdownMenu.property("value");
//     console.log(dataset);
//     let x = []
//     let y = []



