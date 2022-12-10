function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
var links = ['https://forms.gle/WXLg23Aj3dBxHD8i8'];
window.location.href = links[getRandomInt(links.length)];
