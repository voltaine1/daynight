function setBackground(backgroundString) {
  // document.body.style['background-image'] = `url('${backgroundString}')`;
  if (backgroundString === 'day.jpg') {
    document.body.style['background-color'] = 'white';
  } else {
    document.body.style['background-color'] = 'black';
  }
}
async function setVideo(videoString) {
  const video = document.getElementById('video');
  const source = document.getElementById('source');
  await video.pause();
  source.setAttribute('src', videoString);
  await video.load();
  await video.play();
}
function setDay() {
  setVideo('day.mp4');
  setBackground('day.jpg');
}
function setNight() {
  setVideo('night.mp4');
  setBackground('night.jpg');
}

function setSky() {
  const d = new Date();

  /*
   * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
   * Early mornig = 0 - 6
   * Morning = 6 - 12
   * Evening = 12 - 18
   * Night = 18 - 23
   */

  const currentHour = d.getHours();
  if (currentHour >= 19 || currentHour <= 6) {
    setNight();
  } else {
    setDay();
  }
}

function init() {
  setSky();
  setInterval(() => {
    setSky();
  }, 6000 * 1000);
}
init();
