document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField(){
  // what to duplicate?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

  // get fields
  const fields = newFieldContainer.querySelectorAll('input');

  // cleanning currently field
  fields.forEach(function(field){
    field.value = "";
  });

  // where to duplicate?
  document.querySelector('#schedule-items').appendChild(newFieldContainer);


}