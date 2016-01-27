import d3 from 'd3'
import uuid from 'uuid'
import tpl from '../templates/d3.hbs'

function draw(id, width, height) {
  const svg = d3.select(`#${id}`)
  const center = [width/2,height/2]
  svg
    .append('circle')
    .attr('cx', center[0] - 50)
    .attr('cy', center[1] - 50)
    .attr('r', 100)
    .style('fill', 'yellow')

  const group = svg
    .append('g')
    .attr('transform', `translate(0, 200)`)

  function render_text(pos_x = 0, pos_y = 0,text) {
    group.append('text')
      .attr('class', 'text')
      .attr('x', pos_x)
      .attr('y', pos_y)
      .attr('dy', '1em')
      .text(text)
      .style('fill', function() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
      })
  }

    let string = "N i c o ' s   D 3 s  ";
    let radius = 100;
    let counter = 0;
    let steps = string.length * 3;
    let circle_loops = 12;
    let circle_counter = 0;

    (function asyncloop() {
      setTimeout(function(){
        var x = (center[0] - radius - (radius * Math.cos(2 * Math.PI * counter / steps)));
        var y = (center[1] - radius + (radius * Math.sin(2 * Math.PI * counter / steps)));
        render_text(x,y,string[counter%string.length]);
        counter++;
        if(counter <= steps) asyncloop();
        else {
          counter = 0;
          circle_counter++;
          center[0] = (center[0] - (radius * Math.cos(2 * Math.PI * circle_counter / circle_loops)));
          center[1] = (center[1] - (radius * Math.sin(2 * Math.PI * circle_counter / circle_loops)));
          if (circle_counter <= circle_loops) asyncloop()
        }
      },50)
    })();
}

export default function(containerId) {
  const container = document.getElementById(containerId)
  const width = 800
  const height = 800
  const viewBox = `0 0 ${width} ${height}`

  const id = 'chart-' + uuid.v4()
  const svg = tpl({
    id,
    viewBox
  })

  container.innerHTML = svg

  draw(id, width, height)
}
