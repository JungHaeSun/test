document.addEventListener("DOMContentLoaded", function() {

	var hot, container = document.getElementById("borders");

	var dataObject = [ {
		indate : '2019/08/19',
		indata : '0.333',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'
	},{
		indate : '2019/08/20',
		indata : '0.444',
		inlevel : '0.9033(0.00~0.23)'			
	} ];

	hot = Handsontable(container, {
		data : dataObject,
		columns : [ {
			data : 'indate',
			type : 'text'
		}, {
			data : 'indata',
			type : 'text'
		},
		{
			data : 'inlevel',
			type : 'text'
		} ],
		className: "htCenter",
        autoWrapRow: true,
        minSpareRows: true,
        columnSorting: true,
    	fillHandle: false,		
    	currentRowClassName: 'currentRow',
    	colHeaders: ["시간", "세션", "증감(%)"],
		stretchH: 'all' 
 
	});

}

);
