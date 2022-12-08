function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
var links = ['https://forms.gle/MHkGxqQgd7sTXmNa6','https://forms.gle/XrY17RaizVokjtTcA','https://forms.gle/1J2baHzAwSrS97rn9'];
window.location.href = links[getRandomInt(links.length)];
