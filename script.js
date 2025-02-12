let clickEvent = 'ontouchstart' in window ? 'touchend' : 'click';

let triggers = document.querySelectorAll('.trigger');
let hotspots = document.querySelectorAll('.hotspot');

for (let trigger of triggers) {
  trigger.addEventListener(clickEvent, function (event) {
    event.stopPropagation();
    this.parentNode.classList.add('reveal');
  });
}

for (let hotspot of hotspots) {
  hotspot.addEventListener(clickEvent, function () {
    for (let hotspot of hotspots) {
      hotspot.classList.remove('reveal');
    }
  });
}

document.body.addEventListener(clickEvent, function () {
  for (let hotspot of hotspots) {
    hotspot.classList.remove('reveal');
  }
});

