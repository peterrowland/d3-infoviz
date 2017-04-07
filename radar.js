
var year1 = [{
        className: 'Harward',
        axes: [
          {axis: "teaching", value: 95.3},
          {axis: "international", value: 66.2},
          {axis: "research", value: 98.5},
          {axis: "citations", value: 99.1},
          {axis: "income", value: 40.6},
          {axis: "total_score", value: 93.9}
        ]
      },
      {className: 'CalTech',axes: [
          {axis: "teaching", value: 94.4},
          {axis: "international", value: 65.8},
          {axis: "research", value: 98.2},
          {axis: "citations", value: 99.8},
          {axis: "income", value: 91.2},
          {axis: "total_score", value: 94.9}
        ]},

      {
        className: 'Oxford',
        axes: [
          {axis: "teaching", value: 89},
          {axis: "international", value: 90.2},
          {axis: "research", value: 98.5},
          {axis: "citations", value: 95.4},
          {axis: "income", value: 90.3},
          {axis: "total_score", value: 93.9}
        ]
      }];
var year2 = [{
        className: 'Harward',
        axes: [
          {axis: "teaching", value: 92.9},
          {axis: "international", value: 67.6},
          {axis: "research", value: 98.6},
          {axis: "citations", value: 98.9},
          {axis: "income", value: 44},
          {axis: "total_score", value: 93.3}
        ]
      },
      {
        className: 'Oxford',
        axes: [
          {axis: "teaching", value: 88.6},
          {axis: "international", value: 90.7},
          {axis: "research", value: 97.7},
          {axis: "citations", value: 95.5},
          {axis: "income", value: 72.9},
          {axis: "total_score", value: 93.2}
        ]
      },
      {className: 'CalTech',axes: [
          {axis: "teaching", value: 92.2},
          {axis: "international", value: 67},
          {axis: "research", value: 98.1},
          {axis: "citations", value: 99.7},
          {axis: "income", value: 89.1},
          {axis: "total_score", value: 94.3}
        ]}

      ];
var year3 = [{className: 'CalTech',axes: [
          {axis: "teaching", value: 95.6},
          {axis: "international", value: 64},
          {axis: "research", value: 97.6},
          {axis: "citations", value: 99.8},
          {axis: "income", value: 97.8},
          {axis: "total_score", value: 95.2}
        ]},
        {
        className: 'Oxford',
        axes: [
          {axis: "teaching", value: 86.5},
          {axis: "international", value: 94.4},
          {axis: "research", value: 98.9},
          {axis: "citations", value: 98.8},
          {axis: "income", value: 73.1},
          {axis: "total_score", value: 94.2}
        ]
      },
      {
        className: 'Stanford',
        axes: [
          {axis: "teaching", value: 92.5},
          {axis: "international", value: 76.3},
          {axis: "research", value: 96.2},
          {axis: "citations", value: 99.9},
          {axis: "income", value: 63.3},
          {axis: "total_score", value: 93.9}
        ]
      }];


RadarChart.defaultConfig.color = function() {};
    RadarChart.defaultConfig.radius = 3;
    RadarChart.defaultConfig.w = 350;
    RadarChart.defaultConfig.h = 350;

    var chart = RadarChart.chart();
    var cfg = chart.config();

   RadarChart.defaultConfig.levelTick = true;
  RadarChart.draw("#chart1", year1);
    RadarChart.defaultConfig.levelTick = true;
  RadarChart.draw("#chart2", year2);
   RadarChart.defaultConfig.levelTick = true;
  RadarChart.draw("#chart3", year3);

// var uni1;
//  $('#university1').change(function() {
//       uni1 = $('#university1 option:selected').text();
//     });
// // commented on apr 5
// d3.select('#option')
//   .on('change', function() {
//     var newData = eval(d3.select(this).property('value'));
//     updateLegend(newData);
//
// });
//
// // commented on apr 5
//     function randomDataset() {
//       return data.map(function(d) {
//         return {
//           className: d.className,
//           axes: d.axes.map(function(axis) {
//             return {axis: axis.axis, value: axis.value};
//           })
//         };
//       });
//     }

      // RadarChart.defaultConfig.levelTick = true;
      // RadarChart.draw(".chart-container", data);
