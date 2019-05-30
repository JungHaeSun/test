

var chart = AmCharts
		.makeChart(
				"main1",
				{
					"type" : "serial",
					"theme" : "dark",
					"marginTop" : 20,
					"marginRight" : 0,
					"dataProvider" : [ {
						"year" : "1950",
						"value" : -0.307
					}, {
						"year" : "1951",
						"value" : -0.168
					}, {
						"year" : "1952",
						"value" : -0.073
					}, {
						"year" : "1953",
						"value" : -0.027
					}, {
						"year" : "1954",
						"value" : -0.251
					}, {
						"year" : "1955",
						"value" : -0.281
					}, {
						"year" : "1956",
						"value" : -0.348
					}, {
						"year" : "1957",
						"value" : -0.074
					}, {
						"year" : "1958",
						"value" : -0.011
					}, {
						"year" : "1959",
						"value" : -0.074
					}, {
						"year" : "1960",
						"value" : -0.124
					}, {
						"year" : "1961",
						"value" : -0.024
					}, {
						"year" : "1962",
						"value" : -0.022
					}, {
						"year" : "1963",
						"value" : 0
					}, {
						"year" : "1964",
						"value" : -0.296
					}, {
						"year" : "1965",
						"value" : -0.217
					}, {
						"year" : "1966",
						"value" : -0.147
					}, {
						"year" : "1967",
						"value" : -0.15
					}, {
						"year" : "1968",
						"value" : -0.16
					}, {
						"year" : "1969",
						"value" : -0.011
					}, {
						"year" : "1970",
						"value" : -0.068
					}, {
						"year" : "1971",
						"value" : -0.19
					}, {
						"year" : "1972",
						"value" : -0.056
					}, {
						"year" : "1973",
						"value" : 0.077
					}, {
						"year" : "1974",
						"value" : -0.213
					}, {
						"year" : "1975",
						"value" : -0.17
					}, {
						"year" : "1976",
						"value" : -0.254
					}, {
						"year" : "1977",
						"value" : 0.019
					}, {
						"year" : "1978",
						"value" : -0.063
					}, {
						"year" : "1979",
						"value" : 0.05
					}, {
						"year" : "1980",
						"value" : 0.077
					}, {
						"year" : "1981",
						"value" : 0.12
					}, {
						"year" : "1982",
						"value" : 0.011
					}, {
						"year" : "1983",
						"value" : 0.177
					}, {
						"year" : "1984",
						"value" : -0.021
					}, {
						"year" : "1985",
						"value" : -0.037
					}, {
						"year" : "1986",
						"value" : 0.03
					}, {
						"year" : "1987",
						"value" : 0.179
					}, {
						"year" : "1988",
						"value" : 0.18
					}, {
						"year" : "1989",
						"value" : 0.104
					}, {
						"year" : "1990",
						"value" : 0.255
					}, {
						"year" : "1991",
						"value" : 0.21
					}, {
						"year" : "1992",
						"value" : 0.065
					}, {
						"year" : "1993",
						"value" : 0.11
					}, {
						"year" : "1994",
						"value" : 0.172
					}, {
						"year" : "1995",
						"value" : 0.269
					}, {
						"year" : "1996",
						"value" : 0.141
					}, {
						"year" : "1997",
						"value" : 0.353
					}, {
						"year" : "1998",
						"value" : 0.548
					}, {
						"year" : "1999",
						"value" : 0.298
					}, {
						"year" : "2000",
						"value" : 0.267
					}, {
						"year" : "2001",
						"value" : 0.411
					}, {
						"year" : "2002",
						"value" : 0.462
					}, {
						"year" : "2003",
						"value" : 0.47
					}, {
						"year" : "2004",
						"value" : 0.445
					}, {
						"year" : "2005",
						"value" : 0.47
					} ],
					"valueAxes" : [ {
						"axisAlpha" : 0,
						"position" : "left"
					} ],
					"graphs" : [ {
						"id" : "g1",
						"balloonText" : "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
						"bullet" : "round",
						"bulletSize" : 8,
						"lineColor" : "#d1655d",
						"lineThickness" : 2,
						"negativeLineColor" : "#637bb6",
						"type" : "smoothedLine",
						"valueField" : "value"
					} ],

					"chartCursor" : {
						"categoryBalloonDateFormat" : "YYYY",
						"cursorAlpha" : 0,
						"valueLineEnabled" : true,
						"valueLineBalloonEnabled" : true,
						"valueLineAlpha" : 0.5,
						"fullWidth" : true
					},
					"dataDateFormat" : "YYYY",
					"categoryField" : "year",
					"categoryAxis" : {
						"minPeriod" : "YYYY",
						"parseDates" : true,
						"minorGridAlpha" : 0.1,
						"minorGridEnabled" : true
					},
					"export" : {
						"enabled" : false
					}
				});
AmCharts
		.makeChart(
				"main2",
				{
					"type" : "serial",
					"theme" : "dark",
					"marginTop" : 20,
					"marginRight" : 0,
					"dataProvider" : [ {
						"year" : "1950",
						"value" : -0.307
					}, {
						"year" : "1951",
						"value" : -0.168
					}, {
						"year" : "1952",
						"value" : -0.073
					}, {
						"year" : "1953",
						"value" : -0.027
					}, {
						"year" : "1954",
						"value" : -0.251
					}, {
						"year" : "1955",
						"value" : -0.281
					}, {
						"year" : "1956",
						"value" : -0.348
					}, {
						"year" : "1957",
						"value" : -0.074
					}, {
						"year" : "1958",
						"value" : -0.011
					}, {
						"year" : "1959",
						"value" : -0.074
					}, {
						"year" : "1960",
						"value" : -0.124
					}, {
						"year" : "1961",
						"value" : -0.024
					}, {
						"year" : "1962",
						"value" : -0.022
					}, {
						"year" : "1963",
						"value" : 0
					}, {
						"year" : "1964",
						"value" : -0.296
					}, {
						"year" : "1965",
						"value" : -0.217
					}, {
						"year" : "1966",
						"value" : -0.147
					}, {
						"year" : "1967",
						"value" : -0.15
					}, {
						"year" : "1968",
						"value" : -0.16
					}, {
						"year" : "1969",
						"value" : -0.011
					}, {
						"year" : "1970",
						"value" : -0.068
					}, {
						"year" : "1971",
						"value" : -0.19
					}, {
						"year" : "1972",
						"value" : -0.056
					}, {
						"year" : "1973",
						"value" : 0.077
					}, {
						"year" : "1974",
						"value" : -0.213
					}, {
						"year" : "1975",
						"value" : -0.17
					}, {
						"year" : "1976",
						"value" : -0.254
					}, {
						"year" : "1977",
						"value" : 0.019
					}, {
						"year" : "1978",
						"value" : -0.063
					}, {
						"year" : "1979",
						"value" : 0.05
					}, {
						"year" : "1980",
						"value" : 0.077
					}, {
						"year" : "1981",
						"value" : 0.12
					}, {
						"year" : "1982",
						"value" : 0.011
					}, {
						"year" : "1983",
						"value" : 0.177
					}, {
						"year" : "1984",
						"value" : -0.021
					}, {
						"year" : "1985",
						"value" : -0.037
					}, {
						"year" : "1986",
						"value" : 0.03
					}, {
						"year" : "1987",
						"value" : 0.179
					}, {
						"year" : "1988",
						"value" : 0.18
					}, {
						"year" : "1989",
						"value" : 0.104
					}, {
						"year" : "1990",
						"value" : 0.255
					}, {
						"year" : "1991",
						"value" : 0.21
					}, {
						"year" : "2005",
						"value" : 0.47
					} ],
					"valueAxes" : [ {
						"axisAlpha" : 0,
						"position" : "left"
					} ],
					"graphs" : [ {
						"id" : "g1",
						"balloonText" : "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
						"bullet" : "round",
						"bulletSize" : 8,
						"lineColor" : "#d1655d",
						"lineThickness" : 2,
						"negativeLineColor" : "#637bb6",
						"type" : "smoothedLine",
						"valueField" : "value"
					} ],

					"chartCursor" : {
						"categoryBalloonDateFormat" : "YYYY",
						"cursorAlpha" : 0,
						"valueLineEnabled" : true,
						"valueLineBalloonEnabled" : true,
						"valueLineAlpha" : 0.5,
						"fullWidth" : true
					},
					"dataDateFormat" : "YYYY",
					"categoryField" : "year",
					"categoryAxis" : {
						"minPeriod" : "YYYY",
						"parseDates" : true,
						"minorGridAlpha" : 0.1,
						"minorGridEnabled" : true
					},
					"export" : {
						"enabled" : false
					}
				});
AmCharts
		.makeChart(
				"main3",
				{
					"type" : "serial",
					"theme" : "dark",
					"marginTop" : 20,
					"marginRight" : 0,
					"dataProvider" : [ {
						"year" : "1950",
						"value" : -0.307
					}, {
						"year" : "1959",
						"value" : -0.074
					}, {
						"year" : "1960",
						"value" : -0.124
					}, {
						"year" : "1961",
						"value" : -0.024
					}, {
						"year" : "1962",
						"value" : -0.022
					}, {
						"year" : "1963",
						"value" : 0
					}, {
						"year" : "1964",
						"value" : -0.296
					}, {
						"year" : "1965",
						"value" : -0.217
					}, {
						"year" : "1966",
						"value" : -0.147
					}, {
						"year" : "1967",
						"value" : -0.15
					}, {
						"year" : "1968",
						"value" : -0.16
					}, {
						"year" : "1969",
						"value" : -0.011
					}, {
						"year" : "1976",
						"value" : -0.254
					}, {
						"year" : "1977",
						"value" : 0.019
					}, {
						"year" : "1978",
						"value" : -0.063
					}, {
						"year" : "1979",
						"value" : 0.05
					}, {
						"year" : "1980",
						"value" : 0.077
					}, {
						"year" : "1981",
						"value" : 0.12
					}, {
						"year" : "1982",
						"value" : 0.011
					}, {
						"year" : "1983",
						"value" : 0.177
					}, {
						"year" : "1984",
						"value" : -0.021
					}, {
						"year" : "1985",
						"value" : -0.037
					}, {
						"year" : "1986",
						"value" : 0.03
					}, {
						"year" : "1987",
						"value" : 0.179
					}, {
						"year" : "1988",
						"value" : 0.18
					}, {
						"year" : "1989",
						"value" : 0.104
					}, {
						"year" : "1990",
						"value" : 0.255
					}, {
						"year" : "1991",
						"value" : 0.21
					}, {
						"year" : "2005",
						"value" : 0.47
					} ],
					"valueAxes" : [ {
						"axisAlpha" : 0,
						"position" : "left"
					} ],
					"graphs" : [ {
						"id" : "g1",
						"balloonText" : "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
						"bullet" : "round",
						"bulletSize" : 8,
						"lineColor" : "#d1655d",
						"lineThickness" : 2,
						"negativeLineColor" : "#637bb6",
						"type" : "smoothedLine",
						"valueField" : "value"
					} ],

					"chartCursor" : {
						"categoryBalloonDateFormat" : "YYYY",
						"cursorAlpha" : 0,
						"valueLineEnabled" : true,
						"valueLineBalloonEnabled" : true,
						"valueLineAlpha" : 0.5,
						"fullWidth" : true
					},
					"dataDateFormat" : "YYYY",
					"categoryField" : "year",
					"categoryAxis" : {
						"minPeriod" : "YYYY",
						"parseDates" : true,
						"minorGridAlpha" : 0.1,
						"minorGridEnabled" : true
					},
					"export" : {
						"enabled" : false
					}
				});
AmCharts
		.makeChart(
				"main4",
				{
					"type" : "serial",
					"theme" : "dark",
					"marginTop" : 20,
					"marginRight" : 0,
					"dataProvider" : [ {
						"year" : "1950",
						"value" : -0.307
					}, {
						"year" : "1959",
						"value" : -0.074
					}, {
						"year" : "1960",
						"value" : -0.124
					}, {
						"year" : "1961",
						"value" : -0.024
					}, {
						"year" : "1962",
						"value" : -0.022
					}, {
						"year" : "1963",
						"value" : 0
					}, {
						"year" : "1964",
						"value" : -0.296
					}, {
						"year" : "1965",
						"value" : -0.217
					}, {
						"year" : "1966",
						"value" : -0.147
					}, {
						"year" : "1967",
						"value" : -0.15
					}, {
						"year" : "1968",
						"value" : -0.16
					}, {
						"year" : "1969",
						"value" : -0.011
					}, {
						"year" : "1976",
						"value" : -0.254
					}, {
						"year" : "1977",
						"value" : 0.019
					}, {
						"year" : "1978",
						"value" : -0.063
					}, {
						"year" : "1979",
						"value" : 0.05
					}, {
						"year" : "1980",
						"value" : 0.077
					}, {
						"year" : "1981",
						"value" : 0.12
					}, {
						"year" : "1982",
						"value" : 0.011
					}, {
						"year" : "1983",
						"value" : 0.177
					} ],
					"valueAxes" : [ {
						"axisAlpha" : 0,
						"position" : "left"
					} ],
					"graphs" : [ {
						"id" : "g1",
						"balloonText" : "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
						"bullet" : "round",
						"bulletSize" : 8,
						"lineColor" : "#d1655d",
						"lineThickness" : 2,
						"negativeLineColor" : "#637bb6",
						"type" : "smoothedLine",
						"valueField" : "value"
					} ],

					"chartCursor" : {
						"categoryBalloonDateFormat" : "YYYY",
						"cursorAlpha" : 0,
						"valueLineEnabled" : true,
						"valueLineBalloonEnabled" : true,
						"valueLineAlpha" : 0.5,
						"fullWidth" : true
					},
					"dataDateFormat" : "YYYY",
					"categoryField" : "year",
					"categoryAxis" : {
						"minPeriod" : "YYYY",
						"parseDates" : true,
						"minorGridAlpha" : 0.1,
						"minorGridEnabled" : true
					},
					"export" : {
						"enabled" : false
					}
				});

// /////////////
for (i = 1; i <= 8; i++) {
	AmCharts.makeChart("ss0" + i, {
		"type" : "serial",
		"theme" : "DARK",
		"marginTop" : 0,
		"marginRight" : 0,
		"marginLeft" : 0,
		"autoMarginOffset" : 0,

		"valueAxes" : [ {
			"id" : "v1",
			"axisAlpha" : 0,
			"position" : "left",
			"ignoreAxisWidth" : true
		} ],
		"categoryAxis" : {

			"gridAlpha" : 0.1,

			"gridCount" : 50,
			"labelsEnabled" : false
		},
		"balloon" : {
			"borderThickness" : 1,
			"shadowAlpha" : 0
		},
		"graphs" : [ {
			"type" : "smoothedLine",
			"useLineColorForBulletBorder" : true,
			"valueField" : "value"
		} ],

		"export" : {
			"enabled" : false
		},
		"dataProvider" : [ {

			"value" : Math.random()
		}, {

			"value" : Math.random()
		}, {

			"value" : Math.random()
		}, {

			"value" : Math.random()

		} ]
	});
}
// //////////////////////////////////////////////// 메인사용
$(function(){
	$(".maincharts").each(function(){
		viewchart($(this));	
	});
	
});

var item_arr = {1:"trafficin",2:"trafficout",3:"storage",4:"request",5:"session"};
var type_arr = {1:"",2:"line",3:"step"};	

var chartData = [];
var chart = [];

function viewchart(obj){
	
	chartData[obj.attr("val-idx")] = [];
	chart[obj.attr("val-idx")] = AmCharts.makeChart("chartdiv_"+obj.attr("val-idx"), {
		"type": "serial",
		"language": "ko",
		"marginLeft" : 0,
		"marginTop" : 10,
	    "valueAxes": [{
	        "dashLength": 1,
	        "position": "left"
	    }],
	    "mouseWheelZoomEnabled": false,
	    "graphs": [{
	        "id": "g1",
	        "type": type_arr[obj.attr("val-graph")],//차트종류("line", "step")
			"fillAlphas": 0.3, //차트 영역 투명도	        
	        "balloonText": "[[datelabel]] [[category]]<br><b>[[value]]</b>",
	        "bullet": "round",
	        "bulletBorderAlpha": 1,
	        "bulletColor": "#FFFFFF",
	        "hideBulletsCount": 50,
	        "title": "red line",
	        "valueField": "value",
	        "useLineColorForBulletBorder": true
	    }],
	    "chartCursor": {
		       "limitToGraph":"g1"
		},
	    "categoryField": "date",
	    "categoryAxis": {
	    	"labelOffset":3,
	        "axisColor": "#DADADA",
	        "dashLength": 1,
	        "minorGridEnabled": true,
	        "labelRotation": 45
	    },
	    "export": {
	        "enabled": true
		} 
	});
	
	
	ajaxread(obj);
}

//데이터 기초 작업 가져오기
function ajaxread(obj){
	//API에 넘겨줄값 정의
	/* #######################################################################
		oap_athr_cd : 권한 코드(필수) "01:관리자,02:GS네오택사용자,03:고객사 사용자"
		item : 수집 항목(필수) "session,trafficin,trafficout,request,storage, transferout, transferin"
		startTime : 통계시작시간(필수) "년월일시분(예:201205101125)"
		endTime : 통계종료시간(필수) "년월일시분(예:201205101140)"
		statisticsPeriod : 통계주기(필수) "5min, 1hour, 1day"
		customerId : 고객사 아이디( △)  "△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
		domainId : 도메인 아이디( △) "△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
		serviceId : 고객사 서비스 아이디( △) "△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
		serviceGroupId : 고객사 서비스 그룹 아이디 ( △)  "△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
		productId : 고객사 상품 아이디( △)  "△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"	
		####################################################################### */
	
	var item_num = obj.attr("val-item");	
	var d_id = obj.attr("val-id");
	var ds_day = obj.attr("val-day");
	
	var apiInfo = {
			oap_athr_cd:"02", 
			item: item_arr[item_num], 
			startTime: enddate(ds_day), 
			endTime: today(),
			statisticsPeriod: "5min",
			customerId: "", 
			domainId: d_id, 
			serviceId: "", 
			serviceGroupId: "", 
			productId: "",
			procType: "create"
	};
	console.log(apiInfo);
 
	//검색 기간에 따라 통계주기 변경
	var statisticsPeriod = getStatisticsPeriod(apiInfo.startTime, apiInfo.endTime);
	//statisticsPeriod = "1day";
	apiInfo.statisticsPeriod = statisticsPeriod;
	
	chartData[obj.attr("val-idx")] = getChartData(apiInfo);
	
	chart[obj.attr("val-idx")].dataProvider = chartData[obj.attr("val-idx")];
	chart[obj.attr("val-idx")].validateNow();
}

//데이터 가져오기
//API로 차트 데이터 가져오기 함수
function getChartData(info,chart) {
	/*
	OPEN API
	-----------------------------------------------------------------------------------------------------------------------------------
	항목명					설명					반복회수	필수여부	비고
	-----------------------------------------------------------------------------------------------------------------------------------
	auth.oap_athr_cd		공통 : 권한 코드			1		O		"01:관리자,02:GS네오택사용자,03:고객사 사용자"
	auth.ticket				공통 : 티켓 명			1		O	
	auth.oap_cd				공통: OpenAPI아이디	1		O	
	rows.item				수집 항목				N		O		session,trafficin,trafficout,request,storage, transferout, transferin
	rows.startTime			통계시작시간			N		O		년월일시분(예:201205101125)
	rows.endTime			통계종료시간			N		O		년월일시분(예:201205101140)
	rows.statisticsPeriod	통계주기				N		O		5min, 1hour, 1day
	rows.customerId			고객사 아이디			N		△		"△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
	rows.domainId			도메인 아이디			N		△		"△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
	rows.serviceId			고객사 서비스 아이디		N		△		"△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
	rows.serviceGroupId		고객사 서비스 그룹 아이디	N		△		"△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
	rows.productId			고객사 상품 아이디		N		△		"△로 표시된 항목중 하나 필수입력(중복입력 시 에러 메시지 출력)"
	*/
	var chartData = [];
	var auth_oap_athr_cd = info.oap_athr_cd;
	var rows_item = info.item;
	var rows_startTime = info.startTime;
	var rows_endTime = info.endTime;
	var rows_statisticsPeriod = info.statisticsPeriod;
	var rows_customerId = info.customerId;
	var rows_domainId = info.domainId;
	var rows_serviceId = info.serviceId;
	var rows_serviceGroupId = info.serviceGroupId;
	var rows_productId = info.productId;
	var rows_procType = info.procType;
	
	$.ajax({
		type: 'post',
		async : false,			
		dataType : 'text',
	    tryCount : 0,
	    retryLimit : 3,			
		url: api_url,
		data: 'json={"auth":[{"oap_athr_cd":"'+auth_oap_athr_cd+'","oap_cd":"'+auth_oap_cd+'",	"ticket":"'+auth_ticket+'"}],	"rows":[{"item":"'+rows_item+'","statisticsPeriod":"'+rows_statisticsPeriod+'","startTime":"'+rows_startTime+'","endTime":"'+rows_endTime+'","customerId":"'+rows_customerId+'","serviceId":"'+rows_serviceId+'","serviceGroupId":"'+rows_serviceGroupId+'","domainId":"'+rows_domainId+'","productId":"'+rows_productId+'"}]}',
		success: function(data){
			var pdata = $.parseJSON(data);
		    for (var i = 0; i < pdata.result[0].datas.length; i++) {
		    	var date_str = pdata.result[0].datas[i].updatedTime.toString();
		    	if(rows_statisticsPeriod == "1day") {
		    		var udate = date_str.substr(0,4)+"-"+date_str.substr(4,2)+"-"+date_str.substr(6,2);
		    		var cdate = date_str.substr(0,4)+"-"+date_str.substr(4,2)+"-"+date_str.substr(6,2);
		    	}else{
		    		var udate = date_str.substr(8,2)+":"+date_str.substr(10,2);
		    		var cdate = date_str.substr(0,4)+"-"+date_str.substr(4,2)+"-"+date_str.substr(6,2);			    		
		    	}
		    	if(rows_procType == "update") {
		    		updateChart(chart, udate, Math.round(parseInt(pdata.result[0].datas[i].value)), cdate);			    		
		    	}else{		    	
	    			chartData.push({date: udate,value: Math.round(parseInt(pdata.result[0].datas[i].value)),datelabel:cdate});
		    	}
		    }

		}, 
		error: function(data, status, err){
            this.tryCount++;
            if (this.tryCount <= this.retryLimit) {
                $.ajax(this);
                return;
            }            
            return;
		}
	});
	if(rows_procType == "create") {
		//console.log(chartData);
		return chartData;
	}

}


//통계주기 가져오기 함수
function getStatisticsPeriod(s,e) {
	var sdate = new Date(s.substr(0, 4), s.substr(4, 2)-1, s.substr(6, 2), s.substr(8, 2), s.substr(10, 2));
	var edate = new Date(e.substr(0, 4), e.substr(4, 2)-1, e.substr(6, 2), e.substr(8, 2), e.substr(10, 2));
	var diff_day = Math.ceil((edate-sdate)/(60*60*24*1000));
	if(diff_day<=7) {
		return "5min";
	}else if(diff_day>7 && diff_day<=30) {
		return "1hour";			
	}else if(diff_day > 30) {
		return "1day";			
	}
}

//API에 보내기 위한 시작날짜 설정
function enddate(number){
	var prevTime = new Date($.now()); 
	prevTime.setDate(prevTime.getDate() - number);//2일전 날짜로 설정
	return ( prevTime.getFullYear() + ('0' + (prevTime.getMonth() + 1)).slice(-2) + ('0' + (prevTime.getDate())).slice(-2) + ('0' + (prevTime.getHours())).slice(-2) + ('0' + (prevTime.getMinutes())).slice(-2) );		
}

//차트 업데이트 처리 함수
function updateChart(chart, udate, value, cdate) {
	//console.log(cdate);
	chart.dataProvider.shift();
	chart.dataProvider.push({date:udate, value:value, datelabel:cdate});
	chart.validateData();
}	

//API에 보내기위한 종료날짜 설정
function today(){
	var currentTime = new Date($.now());
	return ( currentTime.getFullYear() + ('0' + (currentTime.getMonth() + 1)).slice(-2) + ('0' + (currentTime.getDate())).slice(-2) + ('0' + (currentTime.getHours())).slice(-2) + ('0' + (currentTime.getMinutes())).slice(-2) );		
}

/////////////////////////////////////////////////
var chartData = generateChartData();

AmCharts
		.makeChart(
				"ch_1",
				{
					"type" : "serial",
					"theme" : "DARK",
					"marginRight" : 0,
					"marginLeft" : 0,
					"marginTop" : 10,
					"dataProvider" : chartData,
					"valueAxes" : [ {
						"position" : "left"
					} ],
					"graphs" : [ {
						"id" : "g1",
						"fillAlphas" : 0.4,
						"valueField" : "visits",
						"balloonText" : "<div style='margin:5px; font-size:19px;'>Visits:<b>[[value]]</b></div>"
					} ],

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

AmCharts.makeChart("ch_2", {
	"type" : "serial",
	"theme" : "DARK",
	"marginRight" : 0,
	"marginLeft" : 0,
	"marginTop" : 10,
	"dataProvider" : chartData,
	"valueAxes" : [ {
		"position" : "left"
	} ],
	"graphs" : [ {
		"id" : "g1",
		"balloonText" : "[[category]]<br><b>[[value]] C</b>",
		"type" : "step",
		"lineThickness" : 2,
		"bullet" : "square",
		"bulletAlpha" : 0,
		"bulletSize" : 4,
		"bulletBorderAlpha" : 0,
		"valueField" : "visits"
	} ],

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

AmCharts.makeChart("ch_3", {
	"type" : "serial",
	"theme" : "DARK",
	"marginRight" : 0,
	"marginLeft" : 0,
	"marginTop" : 10,
	"dataProvider" : chartData,
	"valueAxes" : [ {
		"position" : "left"
	} ],
	"graphs" : [ {
		"id" : "g1",
		"balloonText" : "[[category]]<br><b>[[value]] C</b>",
 
		"lineThickness" : 2,
		"bullet" : "square",
		"bulletAlpha" : 0,
		"bulletSize" : 4,
		"bulletBorderAlpha" : 0,
		"valueField" : "visits"
	} ],

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


var chart = AmCharts.makeChart("ch_4", {
    "type": "serial",
	"theme" : "DARK",
	"marginRight" : 0,
	"marginLeft" : 0,
	"marginTop" : 10,
	    "marginBottom": 0,
 
    "dataProvider": [{
        "year": 1994,
        "cars": 1587,
        "motorcycles": 650,
        "bicycles": 121
    }, {
        "year": 1995,
        "cars": 1567,
        "motorcycles": 683,
        "bicycles": 146
    }, {
        "year": 1996,
        "cars": 1617,
        "motorcycles": 691,
        "bicycles": 138
    }, {
        "year": 1997,
        "cars": 1630,
        "motorcycles": 642,
        "bicycles": 127
    }, {
        "year": 1998,
        "cars": 1660,
        "motorcycles": 699,
        "bicycles": 105
    }, {
        "year": 1999,
        "cars": 1683,
        "motorcycles": 721,
        "bicycles": 109
    }, {
        "year": 2000,
        "cars": 1691,
        "motorcycles": 737,
        "bicycles": 112
    }, {
        "year": 2001,
        "cars": 1298,
        "motorcycles": 680,
        "bicycles": 101
    }, {
        "year": 2002,
        "cars": 1275,
        "motorcycles": 664,
        "bicycles": 97
    }, {
        "year": 2003,
        "cars": 1246,
        "motorcycles": 648,
        "bicycles": 93
    }, {
        "year": 2004,
        "cars": 1318,
        "motorcycles": 697,
        "bicycles": 111
    }, {
        "year": 2005,
        "cars": 1213,
        "motorcycles": 633,
        "bicycles": 87
    }, {
        "year": 2006,
        "cars": 1199,
        "motorcycles": 621,
        "bicycles": 79
    }, {
        "year": 2007,
        "cars": 1110,
        "motorcycles": 210,
        "bicycles": 81
    }, {
        "year": 2008,
        "cars": 1165,
        "motorcycles": 232,
        "bicycles": 75
    }, {
        "year": 2009,
        "cars": 1145,
        "motorcycles": 219,
        "bicycles": 88
    }, {
        "year": 2010,
        "cars": 1163,
        "motorcycles": 201,
        "bicycles": 82
    }, {
        "year": 2011,
        "cars": 1180,
        "motorcycles": 285,
        "bicycles": 87
    }, {
        "year": 2012,
        "cars": 1159,
        "motorcycles": 277,
        "bicycles": 71
    }],
 
    "graphs": [{
        "balloonText": "XX<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "hidden": true,
        "lineAlpha": 0.4,
        "title": "Cars",
        "valueField": "cars"
    }, {
        "balloonText": "AA<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Motorcycles",
        "valueField": "motorcycles"
    }, {
        "balloonText": "BB<span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Bicycles",
        "valueField": "bicycles"
    }],
    "plotAreaBorderAlpha": 0,
 
 
    "chartCursor": {
        "cursorAlpha": 0
    },
    "categoryField": "year",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.07
    },
    "export": {
    	"enabled": true
     }
});


// generate some random data, quite different range
function generateChartData() {
	var chartData = [];
	// current date
	var firstDate = new Date();
	// now set 500 minutes back
	firstDate.setMinutes(firstDate.getDate() - 1000);

	// and generate 500 data items
	var visits = 500;
	for (var i = 0; i < 30; i++) {
		var newDate = new Date(firstDate);
		// each time we add one minute
		newDate.setMinutes(newDate.getMinutes() + i);
		// some random number
		visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random()
				* 10);
		// add data item to the array
		chartData.push({
			date : newDate,
			visits : visits
		});
	}
	return chartData;
}