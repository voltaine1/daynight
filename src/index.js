const isImage = false;
function enableMute(button) {
  const video = document.getElementById('video');
  if (video.muted) {
    button.setAttribute('src', 'volume_up.svg');
  } else {
    button.setAttribute('src', 'volume_off.svg');
  }
  video.muted = !video.muted;
}
window.enableMute = enableMute;

function setBackground(backgroundString) {
  document.body.style.background = `url('${backgroundString}')  no-repeat center center fixed`;
  document.body.style['background-size'] = 'contain';
  if (backgroundString === 'day.jpg') {
    document.body.style['background-color'] = 'white';
  } else {
    document.body.style['background-color'] = 'black';
  }
}
function changeButtonColor() {
  const button = document.getElementById('mutedButton');
  button.classList.toggle('filter');
}

async function setVideo(videoString) {
  const video = document.getElementById('video');
  const source = document.getElementById('source');
  await video.pause();
  source.setAttribute('src', videoString);
  await video.load();
  await video.play();
}
function hideButton() {
  const button = document.getElementById('mutedButton');
  button.style.display = 'none';
}
function setDay() {
  if (isImage) {
    hideButton();
    setBackground('day.jpg');
  } else {
    setVideo('day.mp4');
  }

  changeButtonColor();
}

function setNight() {
  if (isImage) {
    setBackground('night.jpg');
  } else {
    setVideo('night.mp4');
  }

  setVideo('night.mp4');
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
