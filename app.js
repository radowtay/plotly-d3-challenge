
let sample_values = [];
let otu_ids = [];
let otu_labels = [];

// call the source data and begin main function
d3.json("samples.json").then(function(data) {
    //test
    console.log(data);
    //bar chart
    function bar(data){
        var chart_data = {
            x:data.samples[0].otu_ids.slice(0,10),
            y:data.samples[0].sample_values.slice(0,10),
            type:'bar'
        }

        Plotly.newPlot('bar', [chart_data]);
    }
    //call bar chart from within function!
    bar(data)


    //continue in same function with bubble chart
    function bubble(data){

        var bubble_data = {
            x:data.samples[0].otu_ids,
            y:data.samples[0].sample_values,
            text: data.samples[0].otu_labels,
            mode: 'markers',
            marker:{
                color:data.samples.otu_ids,
                size:data.samples.sample_values,
                text:data.samples.otu_labels
            }
            // markerSize: data.samples.sample_values,
            // markerColors:data.samples.otu_ids,

        };
        var layout = {
            showlegend:false,
            height: 600,
            width: 900
        };

        Plotly.newPlot('bubble', [bubble_data], layout);
    }
    //call bubble chart from within function
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



// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
//     mode: 'markers',
//     marker: {
//       size: [400, 600, 800, 1000],
//       sizemode: 'area'
//     }
//   };
  
//   var trace2 = {
//     x: [1, 2, 3, 4],
//     y: [14, 15, 16, 17],
//     text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
//     mode: 'markers',
//     marker: {
//       size: [400, 600, 800, 1000],
//       //setting 'sizeref' to lower than 1 decreases the rendered size
//       sizeref: 2,
//       sizemode: 'area'
//     }
//   };
  
//   var trace3 = {
//     x: [1, 2, 3, 4],
//     y: [20, 21, 22, 23],
//     text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
//     mode: 'markers',
//     marker: {
//       size: [400, 600, 800, 1000],
//       //setting 'sizeref' to less than 1, increases the rendered marker sizes
//       sizeref: 0.2,
//       sizemode: 'area'
//     }
//   };
  
//   // sizeref using above forumla
//   var desired_maximum_marker_size = 40;
//   var size = [400, 600, 800, 1000];
//   var trace4 = {
//     x: [1, 2, 3, 4],
//     y: [26, 27, 28, 29],
//     text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
//     mode: 'markers',
//     marker: {
//       size: size,
//       //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
//       sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
//       sizemode: 'area'
//     }
//   };
  
//   var data = [trace1, trace2, trace3, trace4];
  
//   var layout = {
//     title: 'Bubble Chart Size Scaling',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('bubble', data, layout);