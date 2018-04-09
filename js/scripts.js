//Business Logic
  function Pet(name, type, color, age, adopted) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.age = age;
    this.adopted = false;
  }

  Pet.prototype.adopt = function() {
    return this.adopted = true;
  }


//User Logic
$(function(){
  var inputName = $("#input-name").val();
  var inputType = $("#input-type").val();
  var inputColor = $("#input-color").val();
  var inputAge = $("#input-age").val();
  var pet = new Pet(inputName, inputType, inputColor, inputAge)

  $(".adopt").click(function(){
    pet.adopt();
    if (pet.adopted === true) {
      $(this).hide();
    }
  });
});
