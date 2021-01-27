function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

/*function onDrop(ev) {
    const id = ev.dataTransfer.getData('text');
    const draggableElement  = document.getElementById(id);
    const dropzone = ev.target;
    dropzone.appendChild(draggableElement);
    ev.dataTransfer.clearData();
}