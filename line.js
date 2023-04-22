
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    // Hide the watermark
    chart.logo.disabled = true;


    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.dateFormats.setKey("year", "yyyy");
    dateAxis.renderer.minGridDistance = 60;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    var countries = ['Topic 59', 'Topic 40', 'Topic 17', 'Topic 56', 'Topic 47', 'Topic 21', 'Topic 23', 'Topic 43', 'Topic 35', 'Topic 19', 'Topic 48', 'Topic 22', 'Topic 36', 'Topic 45', 'Topic 51', 'Topic 52', 'Topic 18', 'Topic 26', 'Topic 38'];
    for (var i = 0; i < countries.length; i++) {
        createSeries(countries[i], countries[i]);
    }
    
    // Create series
    function createSeries(s, name) {
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value" + s;
        series.dataFields.dateX = "year";
        series.name = name;
        series.strokeWidth = 2;
        // series.minBulletDistance = 2;
    
        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "horizontal";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        // series.tooltip.label.textValign = "middle";


        // Make bullets grow on hover
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 3;
        bullet.circle.fill = am4core.color("#fff");

        
        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.4;

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;

        // Create vertical scrollbar and place it before the value axis
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.parent = chart.leftAxesContainer;
        chart.scrollbarY.toBack();


        // Create a horizontal scrollbar with previe and place it underneath the date axis
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);
        chart.scrollbarX.parent = chart.bottomAxesContainer;

        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;

        var segment = series.segments.template;
        segment.interactionsEnabled = true;

        var hoverState = segment.states.create("hover");
        hoverState.properties.strokeWidth = 3;

        var dimmed = segment.states.create("dimmed");
        dimmed.properties.stroke = am4core.color("#cccccc");

        segment.events.on("over", function (event) {
            processOver(event.target.parent.parent.parent);
        });

        segment.events.on("out", function (event) {
            processOut(event.target.parent.parent.parent);
        });
        
        var data;
        // var data =[]
        if (name === "Topic 59") {
            data = [{'year': 1994.0, 'valueTopic 59': 1},
            {'year': 1997.0, 'valueTopic 59': 1},
            {'year': 1998.0, 'valueTopic 59': 1},
            {'year': 2001.0, 'valueTopic 59': 113},
            {'year': 2002.0, 'valueTopic 59': 13},
            {'year': 2003.0, 'valueTopic 59': 20},
            {'year': 2004.0, 'valueTopic 59': 25},
            {'year': 2005.0, 'valueTopic 59': 9},
            {'year': 2006.0, 'valueTopic 59': 9},
            {'year': 2007.0, 'valueTopic 59': 12},
            {'year': 2008.0, 'valueTopic 59': 4},
            {'year': 2009.0, 'valueTopic 59': 12},
            {'year': 2010.0, 'valueTopic 59': 9},
            {'year': 2011.0, 'valueTopic 59': 9},
            {'year': 2012.0, 'valueTopic 59': 3},
            {'year': 2013.0, 'valueTopic 59': 5},
            {'year': 2014.0, 'valueTopic 59': 3}];
        }
        if (name === 'Topic 40') {
            data = [{'year': 1994.0, 'valueTopic 40': 1},
            {'year': 1995.0, 'valueTopic 40': 1},
            {'year': 1996.0, 'valueTopic 40': 5},
            {'year': 1997.0, 'valueTopic 40': 11},
            {'year': 1998.0, 'valueTopic 40': 12},
            {'year': 1999.0, 'valueTopic 40': 19},
            {'year': 2000.0, 'valueTopic 40': 10},
            {'year': 2001.0, 'valueTopic 40': 31},
            {'year': 2002.0, 'valueTopic 40': 90},
            {'year': 2003.0, 'valueTopic 40': 139},
            {'year': 2004.0, 'valueTopic 40': 126},
            {'year': 2005.0, 'valueTopic 40': 144},
            {'year': 2006.0, 'valueTopic 40': 171},
            {'year': 2007.0, 'valueTopic 40': 199},
            {'year': 2008.0, 'valueTopic 40': 199},
            {'year': 2009.0, 'valueTopic 40': 134},
            {'year': 2010.0, 'valueTopic 40': 76},
            {'year': 2011.0, 'valueTopic 40': 44},
            {'year': 2012.0, 'valueTopic 40': 15},
            {'year': 2013.0, 'valueTopic 40': 86},
            {'year': 2014.0, 'valueTopic 40': 23}];
        }
        if (name === 'Topic 17') {
            data = [{'year': 1995.0, 'valueTopic 17': 2},
            {'year': 1996.0, 'valueTopic 17': 3},
            {'year': 1997.0, 'valueTopic 17': 4},
            {'year': 1998.0, 'valueTopic 17': 13},
            {'year': 1999.0, 'valueTopic 17': 5},
            {'year': 2000.0, 'valueTopic 17': 10},
            {'year': 2001.0, 'valueTopic 17': 44},
            {'year': 2002.0, 'valueTopic 17': 130},
            {'year': 2003.0, 'valueTopic 17': 221},
            {'year': 2004.0, 'valueTopic 17': 180},
            {'year': 2005.0, 'valueTopic 17': 248},
            {'year': 2006.0, 'valueTopic 17': 232},
            {'year': 2007.0, 'valueTopic 17': 202},
            {'year': 2008.0, 'valueTopic 17': 193},
            {'year': 2009.0, 'valueTopic 17': 169},
            {'year': 2010.0, 'valueTopic 17': 103},
            {'year': 2011.0, 'valueTopic 17': 46},
            {'year': 2012.0, 'valueTopic 17': 11},
            {'year': 2013.0, 'valueTopic 17': 51},
            {'year': 2014.0, 'valueTopic 17': 20}];
        }
        if (name === 'Topic 56') {
            data = [{'year': 1991.0, 'valueTopic 56': 1},
            {'year': 1995.0, 'valueTopic 56': 4},
            {'year': 1996.0, 'valueTopic 56': 5},
            {'year': 1997.0, 'valueTopic 56': 15},
            {'year': 1998.0, 'valueTopic 56': 24},
            {'year': 1999.0, 'valueTopic 56': 40},
            {'year': 2000.0, 'valueTopic 56': 41},
            {'year': 2001.0, 'valueTopic 56': 197},
            {'year': 2002.0, 'valueTopic 56': 151},
            {'year': 2003.0, 'valueTopic 56': 181},
            {'year': 2004.0, 'valueTopic 56': 215},
            {'year': 2005.0, 'valueTopic 56': 193},
            {'year': 2006.0, 'valueTopic 56': 277},
            {'year': 2007.0, 'valueTopic 56': 348},
            {'year': 2008.0, 'valueTopic 56': 384},
            {'year': 2009.0, 'valueTopic 56': 364},
            {'year': 2010.0, 'valueTopic 56': 176},
            {'year': 2011.0, 'valueTopic 56': 123},
            {'year': 2012.0, 'valueTopic 56': 29},
            {'year': 2013.0, 'valueTopic 56': 211},
            {'year': 2014.0, 'valueTopic 56': 62}];
        }
        if (name === 'Topic 47') {
            data = [{'year': 1990.0, 'valueTopic 47': 2},
            {'year': 1991.0, 'valueTopic 47': 5},
            {'year': 1992.0, 'valueTopic 47': 6},
            {'year': 1993.0, 'valueTopic 47': 5},
            {'year': 1994.0, 'valueTopic 47': 13},
            {'year': 1995.0, 'valueTopic 47': 4},
            {'year': 1996.0, 'valueTopic 47': 18},
            {'year': 1997.0, 'valueTopic 47': 12},
            {'year': 1998.0, 'valueTopic 47': 18},
            {'year': 1999.0, 'valueTopic 47': 27},
            {'year': 2000.0, 'valueTopic 47': 31},
            {'year': 2001.0, 'valueTopic 47': 130},
            {'year': 2002.0, 'valueTopic 47': 345},
            {'year': 2003.0, 'valueTopic 47': 390},
            {'year': 2004.0, 'valueTopic 47': 577},
            {'year': 2005.0, 'valueTopic 47': 477},
            {'year': 2006.0, 'valueTopic 47': 442},
            {'year': 2007.0, 'valueTopic 47': 516},
            {'year': 2008.0, 'valueTopic 47': 385},
            {'year': 2009.0, 'valueTopic 47': 343},
            {'year': 2010.0, 'valueTopic 47': 204},
            {'year': 2011.0, 'valueTopic 47': 133},
            {'year': 2012.0, 'valueTopic 47': 32},
            {'year': 2013.0, 'valueTopic 47': 169},
            {'year': 2014.0, 'valueTopic 47': 32}];
        }
        if (name === 'Topic 21') {
            data = [{'year': 1993.0, 'valueTopic 21': 2},
            {'year': 1995.0, 'valueTopic 21': 2},
            {'year': 1996.0, 'valueTopic 21': 4},
            {'year': 1998.0, 'valueTopic 21': 3},
            {'year': 1999.0, 'valueTopic 21': 1},
            {'year': 2000.0, 'valueTopic 21': 4},
            {'year': 2001.0, 'valueTopic 21': 66},
            {'year': 2002.0, 'valueTopic 21': 181},
            {'year': 2003.0, 'valueTopic 21': 128},
            {'year': 2004.0, 'valueTopic 21': 198},
            {'year': 2005.0, 'valueTopic 21': 146},
            {'year': 2006.0, 'valueTopic 21': 178},
            {'year': 2007.0, 'valueTopic 21': 269},
            {'year': 2008.0, 'valueTopic 21': 204},
            {'year': 2009.0, 'valueTopic 21': 137},
            {'year': 2010.0, 'valueTopic 21': 47},
            {'year': 2011.0, 'valueTopic 21': 42},
            {'year': 2012.0, 'valueTopic 21': 14},
            {'year': 2013.0, 'valueTopic 21': 81},
            {'year': 2014.0, 'valueTopic 21': 35}];
        }
        if (name === 'Topic 23') {
            data = [{'year': 1992.0, 'valueTopic 23': 1},
            {'year': 1994.0, 'valueTopic 23': 1},
            {'year': 1995.0, 'valueTopic 23': 2},
            {'year': 1996.0, 'valueTopic 23': 4},
            {'year': 1997.0, 'valueTopic 23': 2},
            {'year': 1998.0, 'valueTopic 23': 2},
            {'year': 1999.0, 'valueTopic 23': 3},
            {'year': 2000.0, 'valueTopic 23': 1},
            {'year': 2001.0, 'valueTopic 23': 24},
            {'year': 2002.0, 'valueTopic 23': 39},
            {'year': 2003.0, 'valueTopic 23': 31},
            {'year': 2004.0, 'valueTopic 23': 18},
            {'year': 2005.0, 'valueTopic 23': 32},
            {'year': 2006.0, 'valueTopic 23': 22},
            {'year': 2007.0, 'valueTopic 23': 46},
            {'year': 2008.0, 'valueTopic 23': 31},
            {'year': 2009.0, 'valueTopic 23': 94},
            {'year': 2010.0, 'valueTopic 23': 83},
            {'year': 2011.0, 'valueTopic 23': 54},
            {'year': 2012.0, 'valueTopic 23': 12},
            {'year': 2013.0, 'valueTopic 23': 51},
            {'year': 2014.0, 'valueTopic 23': 18}];
        }
        if (name === 'Topic 43') {
            data = [{'year': 1991.0, 'valueTopic 43': 1},
            {'year': 1992.0, 'valueTopic 43': 2},
            {'year': 1993.0, 'valueTopic 43': 6},
            {'year': 1994.0, 'valueTopic 43': 3},
            {'year': 1995.0, 'valueTopic 43': 4},
            {'year': 1996.0, 'valueTopic 43': 11},
            {'year': 1997.0, 'valueTopic 43': 21},
            {'year': 1998.0, 'valueTopic 43': 11},
            {'year': 1999.0, 'valueTopic 43': 17},
            {'year': 2000.0, 'valueTopic 43': 10},
            {'year': 2001.0, 'valueTopic 43': 57},
            {'year': 2002.0, 'valueTopic 43': 99},
            {'year': 2003.0, 'valueTopic 43': 97},
            {'year': 2004.0, 'valueTopic 43': 133},
            {'year': 2005.0, 'valueTopic 43': 228},
            {'year': 2006.0, 'valueTopic 43': 141},
            {'year': 2007.0, 'valueTopic 43': 144},
            {'year': 2008.0, 'valueTopic 43': 158},
            {'year': 2009.0, 'valueTopic 43': 176},
            {'year': 2010.0, 'valueTopic 43': 120},
            {'year': 2011.0, 'valueTopic 43': 99},
            {'year': 2012.0, 'valueTopic 43': 48},
            {'year': 2013.0, 'valueTopic 43': 87},
            {'year': 2014.0, 'valueTopic 43': 16}];
        }
        if (name === 'Topic 35') {
            data = [{'year': 1995.0, 'valueTopic 35': 4},
            {'year': 1996.0, 'valueTopic 35': 7},
            {'year': 1997.0, 'valueTopic 35': 11},
            {'year': 1998.0, 'valueTopic 35': 10},
            {'year': 1999.0, 'valueTopic 35': 7},
            {'year': 2000.0, 'valueTopic 35': 8},
            {'year': 2001.0, 'valueTopic 35': 39},
            {'year': 2002.0, 'valueTopic 35': 90},
            {'year': 2003.0, 'valueTopic 35': 101},
            {'year': 2004.0, 'valueTopic 35': 111},
            {'year': 2005.0, 'valueTopic 35': 142},
            {'year': 2006.0, 'valueTopic 35': 103},
            {'year': 2007.0, 'valueTopic 35': 123},
            {'year': 2008.0, 'valueTopic 35': 99},
            {'year': 2009.0, 'valueTopic 35': 84},
            {'year': 2010.0, 'valueTopic 35': 34},
            {'year': 2011.0, 'valueTopic 35': 18},
            {'year': 2012.0, 'valueTopic 35': 2},
            {'year': 2013.0, 'valueTopic 35': 23},
            {'year': 2014.0, 'valueTopic 35': 1}];
        }
        if (name === 'Topic 19') {
            data = [{'year': 1990.0, 'valueTopic 19': 2},
            {'year': 1991.0, 'valueTopic 19': 2},
            {'year': 1992.0, 'valueTopic 19': 2},
            {'year': 1993.0, 'valueTopic 19': 1},
            {'year': 1994.0, 'valueTopic 19': 5},
            {'year': 1995.0, 'valueTopic 19': 13},
            {'year': 1996.0, 'valueTopic 19': 22},
            {'year': 1997.0, 'valueTopic 19': 51},
            {'year': 1998.0, 'valueTopic 19': 77},
            {'year': 1999.0, 'valueTopic 19': 59},
            {'year': 2000.0, 'valueTopic 19': 75},
            {'year': 2001.0, 'valueTopic 19': 244},
            {'year': 2002.0, 'valueTopic 19': 514},
            {'year': 2003.0, 'valueTopic 19': 652},
            {'year': 2004.0, 'valueTopic 19': 753},
            {'year': 2005.0, 'valueTopic 19': 919},
            {'year': 2006.0, 'valueTopic 19': 737},
            {'year': 2007.0, 'valueTopic 19': 794},
            {'year': 2008.0, 'valueTopic 19': 862},
            {'year': 2009.0, 'valueTopic 19': 620},
            {'year': 2010.0, 'valueTopic 19': 314},
            {'year': 2011.0, 'valueTopic 19': 233},
            {'year': 2012.0, 'valueTopic 19': 55},
            {'year': 2013.0, 'valueTopic 19': 226},
            {'year': 2014.0, 'valueTopic 19': 51}];
        }
        if (name === 'Topic 48') {
            data = [{'year': 1995.0, 'valueTopic 48': 1},
            {'year': 1997.0, 'valueTopic 48': 2},
            {'year': 1998.0, 'valueTopic 48': 6},
            {'year': 1999.0, 'valueTopic 48': 5},
            {'year': 2000.0, 'valueTopic 48': 4},
            {'year': 2001.0, 'valueTopic 48': 57},
            {'year': 2002.0, 'valueTopic 48': 92},
            {'year': 2003.0, 'valueTopic 48': 127},
            {'year': 2004.0, 'valueTopic 48': 146},
            {'year': 2005.0, 'valueTopic 48': 116},
            {'year': 2006.0, 'valueTopic 48': 140},
            {'year': 2007.0, 'valueTopic 48': 161},
            {'year': 2008.0, 'valueTopic 48': 148},
            {'year': 2009.0, 'valueTopic 48': 148},
            {'year': 2010.0, 'valueTopic 48': 57},
            {'year': 2011.0, 'valueTopic 48': 42},
            {'year': 2012.0, 'valueTopic 48': 10},
            {'year': 2013.0, 'valueTopic 48': 76},
            {'year': 2014.0, 'valueTopic 48': 14}];
        }
        if (name === 'Topic 22') {
            data = [{'year': 1995.0, 'valueTopic 22': 3},
            {'year': 1996.0, 'valueTopic 22': 2},
            {'year': 1997.0, 'valueTopic 22': 4},
            {'year': 1998.0, 'valueTopic 22': 11},
            {'year': 1999.0, 'valueTopic 22': 13},
            {'year': 2000.0, 'valueTopic 22': 1},
            {'year': 2001.0, 'valueTopic 22': 13},
            {'year': 2002.0, 'valueTopic 22': 50},
            {'year': 2003.0, 'valueTopic 22': 58},
            {'year': 2004.0, 'valueTopic 22': 61},
            {'year': 2005.0, 'valueTopic 22': 67},
            {'year': 2006.0, 'valueTopic 22': 65},
            {'year': 2007.0, 'valueTopic 22': 95},
            {'year': 2008.0, 'valueTopic 22': 120},
            {'year': 2009.0, 'valueTopic 22': 54},
            {'year': 2010.0, 'valueTopic 22': 54},
            {'year': 2011.0, 'valueTopic 22': 33},
            {'year': 2012.0, 'valueTopic 22': 6},
            {'year': 2013.0, 'valueTopic 22': 17},
            {'year': 2014.0, 'valueTopic 22': 2}];
        }
        if (name === 'Topic 36') {
            data = [{'year': 1995.0, 'valueTopic 36': 3},
            {'year': 1996.0, 'valueTopic 36': 6},
            {'year': 1997.0, 'valueTopic 36': 10},
            {'year': 1998.0, 'valueTopic 36': 10},
            {'year': 1999.0, 'valueTopic 36': 10},
            {'year': 2000.0, 'valueTopic 36': 12},
            {'year': 2001.0, 'valueTopic 36': 46},
            {'year': 2002.0, 'valueTopic 36': 62},
            {'year': 2003.0, 'valueTopic 36': 72},
            {'year': 2004.0, 'valueTopic 36': 80},
            {'year': 2005.0, 'valueTopic 36': 63},
            {'year': 2006.0, 'valueTopic 36': 89},
            {'year': 2007.0, 'valueTopic 36': 117},
            {'year': 2008.0, 'valueTopic 36': 126},
            {'year': 2009.0, 'valueTopic 36': 121},
            {'year': 2010.0, 'valueTopic 36': 77},
            {'year': 2011.0, 'valueTopic 36': 46},
            {'year': 2012.0, 'valueTopic 36': 7},
            {'year': 2013.0, 'valueTopic 36': 50},
            {'year': 2014.0, 'valueTopic 36': 15}];
        }
        if (name === 'Topic 45') {
            data = [{'year': 1994.0, 'valueTopic 45': 1},
            {'year': 1995.0, 'valueTopic 45': 1},
            {'year': 1996.0, 'valueTopic 45': 4},
            {'year': 1997.0, 'valueTopic 45': 7},
            {'year': 1998.0, 'valueTopic 45': 13},
            {'year': 1999.0, 'valueTopic 45': 11},
            {'year': 2000.0, 'valueTopic 45': 21},
            {'year': 2001.0, 'valueTopic 45': 46},
            {'year': 2002.0, 'valueTopic 45': 81},
            {'year': 2003.0, 'valueTopic 45': 98},
            {'year': 2004.0, 'valueTopic 45': 118},
            {'year': 2005.0, 'valueTopic 45': 161},
            {'year': 2006.0, 'valueTopic 45': 191},
            {'year': 2007.0, 'valueTopic 45': 201},
            {'year': 2008.0, 'valueTopic 45': 124},
            {'year': 2009.0, 'valueTopic 45': 119},
            {'year': 2010.0, 'valueTopic 45': 67},
            {'year': 2011.0, 'valueTopic 45': 40},
            {'year': 2012.0, 'valueTopic 45': 11},
            {'year': 2013.0, 'valueTopic 45': 59},
            {'year': 2014.0, 'valueTopic 45': 13}];
        }
        if (name === 'Topic 51') {
            data = [{'year': 1997.0, 'valueTopic 51': 1},
            {'year': 1998.0, 'valueTopic 51': 3},
            {'year': 2000.0, 'valueTopic 51': 1},
            {'year': 2001.0, 'valueTopic 51': 62},
            {'year': 2002.0, 'valueTopic 51': 70},
            {'year': 2003.0, 'valueTopic 51': 82},
            {'year': 2004.0, 'valueTopic 51': 75},
            {'year': 2005.0, 'valueTopic 51': 82},
            {'year': 2006.0, 'valueTopic 51': 101},
            {'year': 2007.0, 'valueTopic 51': 132},
            {'year': 2008.0, 'valueTopic 51': 106},
            {'year': 2009.0, 'valueTopic 51': 84},
            {'year': 2010.0, 'valueTopic 51': 52},
            {'year': 2011.0, 'valueTopic 51': 28},
            {'year': 2012.0, 'valueTopic 51': 5},
            {'year': 2013.0, 'valueTopic 51': 92},
            {'year': 2014.0, 'valueTopic 51': 8}];
        }
        if (name === 'Topic 52') {
            data = [{'year': 1992.0, 'valueTopic 52': 1},
            {'year': 1995.0, 'valueTopic 52': 1},
            {'year': 1997.0, 'valueTopic 52': 3},
            {'year': 1998.0, 'valueTopic 52': 3},
            {'year': 1999.0, 'valueTopic 52': 1},
            {'year': 2000.0, 'valueTopic 52': 1},
            {'year': 2001.0, 'valueTopic 52': 23},
            {'year': 2002.0, 'valueTopic 52': 24},
            {'year': 2003.0, 'valueTopic 52': 19},
            {'year': 2004.0, 'valueTopic 52': 16},
            {'year': 2005.0, 'valueTopic 52': 25},
            {'year': 2006.0, 'valueTopic 52': 48},
            {'year': 2007.0, 'valueTopic 52': 66},
            {'year': 2008.0, 'valueTopic 52': 50},
            {'year': 2009.0, 'valueTopic 52': 57},
            {'year': 2010.0, 'valueTopic 52': 34},
            {'year': 2011.0, 'valueTopic 52': 37},
            {'year': 2012.0, 'valueTopic 52': 7},
            {'year': 2013.0, 'valueTopic 52': 36},
            {'year': 2014.0, 'valueTopic 52': 8}];
        }
        if (name === 'Topic 18') {
            data = [{'year': 1995.0, 'valueTopic 18': 1},
            {'year': 1996.0, 'valueTopic 18': 2},
            {'year': 1997.0, 'valueTopic 18': 3},
            {'year': 1998.0, 'valueTopic 18': 1},
            {'year': 1999.0, 'valueTopic 18': 1},
            {'year': 2000.0, 'valueTopic 18': 1},
            {'year': 2001.0, 'valueTopic 18': 8},
            {'year': 2002.0, 'valueTopic 18': 12},
            {'year': 2003.0, 'valueTopic 18': 7},
            {'year': 2004.0, 'valueTopic 18': 6},
            {'year': 2005.0, 'valueTopic 18': 15},
            {'year': 2006.0, 'valueTopic 18': 6},
            {'year': 2007.0, 'valueTopic 18': 6},
            {'year': 2008.0, 'valueTopic 18': 6},
            {'year': 2009.0, 'valueTopic 18': 11},
            {'year': 2010.0, 'valueTopic 18': 6},
            {'year': 2011.0, 'valueTopic 18': 3},
            {'year': 2012.0, 'valueTopic 18': 1},
            {'year': 2013.0, 'valueTopic 18': 16},
            {'year': 2014.0, 'valueTopic 18': 5}];
        }
        if (name === 'Topic 26') {
            data = [{'year': 1992.0, 'valueTopic 26': 1},
            {'year': 1995.0, 'valueTopic 26': 1},
            {'year': 1997.0, 'valueTopic 26': 1},
            {'year': 1999.0, 'valueTopic 26': 1},
            {'year': 2001.0, 'valueTopic 26': 26},
            {'year': 2002.0, 'valueTopic 26': 11},
            {'year': 2003.0, 'valueTopic 26': 5},
            {'year': 2004.0, 'valueTopic 26': 16},
            {'year': 2005.0, 'valueTopic 26': 25},
            {'year': 2006.0, 'valueTopic 26': 17},
            {'year': 2007.0, 'valueTopic 26': 20},
            {'year': 2008.0, 'valueTopic 26': 14},
            {'year': 2009.0, 'valueTopic 26': 21},
            {'year': 2010.0, 'valueTopic 26': 11},
            {'year': 2011.0, 'valueTopic 26': 6},
            {'year': 2012.0, 'valueTopic 26': 1},
            {'year': 2013.0, 'valueTopic 26': 27},
            {'year': 2014.0, 'valueTopic 26': 7}];
        }
        if (name === 'Topic 38') {
            data = [{'year': 1990.0, 'valueTopic 38': 4},
            {'year': 1991.0, 'valueTopic 38': 3},
            {'year': 1992.0, 'valueTopic 38': 10},
            {'year': 1993.0, 'valueTopic 38': 12},
            {'year': 1994.0, 'valueTopic 38': 5},
            {'year': 1995.0, 'valueTopic 38': 8},
            {'year': 1996.0, 'valueTopic 38': 16},
            {'year': 1997.0, 'valueTopic 38': 23},
            {'year': 1998.0, 'valueTopic 38': 32},
            {'year': 1999.0, 'valueTopic 38': 16},
            {'year': 2000.0, 'valueTopic 38': 17},
            {'year': 2001.0, 'valueTopic 38': 49},
            {'year': 2002.0, 'valueTopic 38': 39},
            {'year': 2003.0, 'valueTopic 38': 34},
            {'year': 2004.0, 'valueTopic 38': 43},
            {'year': 2005.0, 'valueTopic 38': 40},
            {'year': 2006.0, 'valueTopic 38': 49},
            {'year': 2007.0, 'valueTopic 38': 40},
            {'year': 2008.0, 'valueTopic 38': 40},
            {'year': 2009.0, 'valueTopic 38': 295},
            {'year': 2010.0, 'valueTopic 38': 168},
            {'year': 2011.0, 'valueTopic 38': 204},
            {'year': 2012.0, 'valueTopic 38': 189},
            {'year': 2013.0, 'valueTopic 38': 66},
            {'year': 2014.0, 'valueTopic 38': 16}];
        }
        // var value = Math.round(Math.random() * 100) + 100;
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].date)
            data[i].year = new Date(data[i].year, 6, 31)
        }

       

        // 	value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 30 + i / 5);
        // 	var dataItem = { date: new Date(2018, 0, i) };
        // 	dataItem["value" + s] = value;
        // 	data.push(dataItem);
        // }
        // console.log(data[0])
        // series.data = data;
        // for (i = 0; i < 2; i++){
        //     series.data[i] = data[i];

        // }
        // series.data = data[0];
        // series.data = data[1];
        series.data = data;
        // console.log(series.data.length)
        return series;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.scrollable = true;

    // setTimeout(function() {
    //   chart.legend.markers.getIndex(0).opacity = 0.3;
    // }, 3000)
    chart.legend.markers.template.states.create("dimmed").properties.opacity = 0.3;
    chart.legend.labels.template.states.create("dimmed").properties.opacity = 0.3;

    chart.legend.itemContainers.template.events.on("over", function (event) {
        processOver(event.target.dataItem.dataContext);
    })

    chart.legend.itemContainers.template.events.on("out", function (event) {
        processOut(event.target.dataItem.dataContext);
    })

    function processOver(hoveredSeries) {
        hoveredSeries.toFront();

        hoveredSeries.segments.each(function (segment) {
            segment.setState("hover");
        })

        hoveredSeries.legendDataItem.marker.setState("default");
        hoveredSeries.legendDataItem.label.setState("default");

        chart.series.each(function (series) {
            if (series != hoveredSeries) {
                series.segments.each(function (segment) {
                    segment.setState("dimmed");
                })
                series.bulletsContainer.setState("dimmed");
                series.legendDataItem.marker.setState("dimmed");
                series.legendDataItem.label.setState("dimmed");
            }
        });
    }

    function processOut() {
        chart.series.each(function (series) {
            series.segments.each(function (segment) {
                segment.setState("default");
            })
            series.bulletsContainer.setState("default");
            series.legendDataItem.marker.setState("default");
            series.legendDataItem.label.setState("default");
        });
    }

    // document.getElementById("button").addEventListener("click", function () {
    //     processOver(chart.series.getIndex(3));
    // })

}); // end am4core.ready()

