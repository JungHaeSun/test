'use strict';
$(document).ready(function() {
	dashboardEcharts();
});

$(window).on('resize', function() {
	dashboardEcharts();
});

function dashboardEcharts() {
	/* line chart */
	var myChart = echarts.init(document.getElementById('main'));

	var option = {
		grid : {
			top : '6',
			right : '0',
			bottom : '17',
			left : '25',
		},
		tooltip : {
			trigger : 'axis'
		},
		/*
		 * legend: { data:['abc','def','pqr'] },
		 */
		toolbox : {
			show : false,
			feature : {
				mark : {
					show : true
				},
				dataView : {
					show : true,
					readOnly : false
				},
				magicType : {
					show : true,
					type : [ 'line', 'bar', 'stack', 'tiled' ]
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			splitLine : {
				show : false
			},
			boundaryGap : false,
			data : [ 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday',
					'Saturday', 'Sunday' ]
		} ],
		color : [ "rgba(165, 255, 222, 0.95)", "rgba(26, 188, 156, 0.39)",
				"rgba(26, 188, 156, 0.54)" ],
		yAxis : [ {
			type : 'value',
			splitLine : {
				show : false
			}
		} ],
		series : [ {
			name : 'abc',
			type : 'line',
			smooth : true,
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'macarons'
					}
				}
			},
			data : [ 10, 12, 21, 54, 260, 830, 710 ]
		}, {
			name : 'def',
			type : 'line',
			smooth : true,
			itemStyle : {
				normal : {
					areaStyle : {
						type : 'macarons'
					}
				}
			},
			data : [ 30, 182, 434, 791, 390, 30, 10 ]
		} ]
	};

	// Load data into the ECharts instance
	myChart.setOption(option);
	// myChart.setTheme({color:['#2196F3','#4CAF50','#ff5252']});

};