import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/d3.hbs'

function draw(chartId, width = 400, height = 400, displayvalue = 0, gaugevalue = 0) {
  const svg = d3.select("#speedometer")
    .append("svg:svg")
    .attr("width", width)
    .attr("height", height)

    svg
    .append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#515151");

  let gauge = iopctrl.arcslider()
    .radius(120)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
  gauge.axis().orient("in")
    .normalize(true)
    .ticks(12)
    .tickSubdivide(3)
    .tickSize(10, 8, 10)
    .tickPadding(5)
    .scale(d3.scale.linear()
      .domain([0, 100])
      .range([-3*Math.PI/4, 3*Math.PI/4]));

  let segDisplay = iopctrl.segdisplay()
    .width(80)
    .digitCount(6)
    .negative(false)
    .decimals(0);

  svg.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(130, 200)")
    .call(segDisplay);

  svg.append("g")
    .attr("class", "gauge")
    .call(gauge);

  segDisplay.value(displayvalue);
  gauge.value(gaugevalue);
}

function MeasureConnectionSpeed() {
  let oProgress = document.getElementById("progress");
  let startTime, endTime;
  let download = new Image();
  download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
  }

  download.onerror = function (err, msg) {
    oProgress.innerHTML = "Invalid image, or error downloading";
  }

  startTime = (new Date()).getTime();
  let cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    let duration = (endTime - startTime) / 1000;
    let bitsLoaded = downloadSize * 8;
    let speedBps = (bitsLoaded / duration).toFixed(2);
    let speedKbps = (speedBps / 1024).toFixed(2);
    let speedMbps = (speedKbps / 1024).toFixed(2);
    oProgress.innerHTML = "Your connection speed is: <br />" +
      speedBps + " bps<br />"   +
      speedKbps + " kbps<br />" +
      speedMbps + " Mbps<br />";
    draw("chart-4",400,400,speedKbps,speedMbps)
  }
}

//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
const imageAddr = "http://eoimages.gsfc.nasa.gov/images/imagerecords/77000/77627/lut_etm_1999187_lrg.jpg";
const downloadSize = 10309033; //bytes

window.onload = function(){
  setTimeout(function() {
    var oProgress = document.getElementById("progress");
    oProgress.innerHTML = "Loading the image, please wait...";
    window.setTimeout(MeasureConnectionSpeed, 1);
  },500)
}

export default function(containerId) {
  const container = document.getElementById(containerId)
  const width = 400
  const height = 400
  const viewBox = `0 0 ${width} ${height}`

  const id = 'chart-' + uuid.v4()
  const svg = tpl({
    id,
    viewBox
  })

  container.innerHTML = svg

  draw(id, width, height)
}
