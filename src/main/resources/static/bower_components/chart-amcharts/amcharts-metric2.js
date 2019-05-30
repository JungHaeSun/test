var chartData = generateChartData();

var chart = AmCharts
		.makeChart(
				"chartdiv",
				{
					"type" : "serial",
					"theme" : "none",
					"marginTop" : 60,
					"dataProvider" : chartData,
 
					"graphs" : [ {
						"id" : "g1",
						"fillAlphas" : 0.4,
						"valueField" : "visits",
						"balloonText" : "<div style='margin:5px; font-size:19px;'>Visits:<b>[[value]]</b></div>"
					} ],
					"chartScrollbar" : {
						"graph" : "g1",
						"scrollbarHeight" : 80,
						"backgroundAlpha" : 0,
						"selectedBackgroundAlpha" : 0.1,
						"selectedBackgroundColor" : "#888888",
						"graphFillAlpha" : 0,
						"graphLineAlpha" : 0.5,
						"selectedGraphFillAlpha" : 0,
						"selectedGraphLineAlpha" : 1,
						"autoGridCount" : true,
						"color" : "#AAAAAA"
					},
					"chartCursor" : {
						"categoryBalloonDateFormat" : "JJ:NN, DD MMMM",
						"cursorPosition" : "mouse"
					},
					
					"categoryField" : "date",
					"categoryAxis" : {
						"minPeriod" : "mm",
						"parseDates" : true
					},
					"export" : {
						"enabled" : true,
						"dateFormat" : "YYYY-MM-DD HH:NN:SS"
					}
				});

chart.addListener("dataUpdated", zoomChart);
// when we apply theme, the dataUpdated event is fired even before we add
// listener, so
// we need to call zoomChart here
zoomChart();
// this method is called when chart is first inited as we listen for
// "dataUpdated" event
function zoomChart() {
	// different zoom methods can be used - zoomToIndexes, zoomToDates,
	// zoomToCategoryValues
	chart.zoomToIndexes(chartData.length - 250, chartData.length - 100);
}

// generate some random data, quite different range
function generateChartData() {
	var chartData = [];
	// current date
	var firstDate = new Date();
	// now set 500 minutes back
	firstDate.setMinutes(firstDate.getDate() - 1000);

	// and generate 500 data items
	var visits = 500;
	for (var i = 0; i < 500; i++) {
		var newDate = new Date(firstDate);
		// each time we add one minute
		newDate.setMinutes(newDate.getMinutes() + i);
		// some random number
		visits += Math.round((Math.random() < 0.5 ? 1 : -1) + Math.random() * 3);
		// add data item to the array
		chartData.push({
			date : newDate,
			visits : visits
		});
	}
	return chartData;
}