// constructor
pieVis = function(_parentElement, _data) {
    this.parentElement = _parentElement;
    this.data = _data;

    // call method initVis
    this.initVis();
};


// init scatterVis
pieVis.prototype.initVis = function() {
    let vis = this;

    vis.width = $("#" + vis.parentElement).width();
    vis.height = $("#" + vis.parentElement).height();

    vis.radius = Math.min(vis.width, vis.height) / 2;

    vis.svg = d3.select("#" + vis.parentElement).append("svg")
        .attr("width", vis.width)
        .attr("height", vis.height)
        .append("g")
        .attr("transform", `translate(${vis.width / 2}, ${vis.height / 2})`);

    this.wrangleData()
};


//  wrangle data
pieVis.prototype.wrangleData = function() {
    let vis = this;

    this.updateVis();
};

// init scatterVis
pieVis.prototype.updateVis = function() {
    let vis = this;

    // Compute the position of each group on the pie:
    const pie = d3.pie()
        .value(function(d) {console.log(d); return d});

    const arc = d3.arc()
        .innerRadius(vis.radius/2)
        .outerRadius(vis.radius);

    let pieData = pie(vis.data);

    // map to data
    vis.pies = vis.svg.selectAll("path")
        .data(pieData);

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    vis.pies
        .enter()
        .append('path')
        .merge(vis.pies)
        .transition()
        .duration(1000)
        .attrTween('d', arcTween)
        //.attr('d', arc)
        .attr('fill', 'skyblue')
        .attr("stroke", "grey")
        .style("stroke-width", "1px");

    // remove the group that is not present anymore (if amount of arcs change!)
    vis.pies
        .exit()
        .remove();

    // this function smoothens the transition, otherwise you could just go with attr('d, arc) as indicated above
    function arcTween(a) {
        const i = d3.interpolate(this._current, a);
        this._current = i(1);
        return (t) => arc(i(t));
    }
};

