function move(elem) {
  var targetList = document.querySelector('#coolBrowsers');
  targetList.append(elem);
  
  //click listener can be disabled so that once the images arein list, they will not move anymore
  elem.onclick = null; 
   
}