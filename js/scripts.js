//Business Logic
var doggyTreat ="yummy";
var petArray = [];

function Pet(name, type, color, age, adopted) {
  this.name = name;
  this.type = type;
  this.color = color;
  this.age = age;
  this.adopted = false;
}

Pet.prototype.adopt = function() {
  return this.adopted = true;
  alert("yo!");
}

Pet.prototype.pushPets = function() {
  petArray.push(this);
}

//User Logic
$(function(){
  $("#pet-form").submit(function(event){
    event.preventDefault();
    var inputName = $("#input-name").val();
    var inputType = $("#input-type").val();
    var inputColor = $("#input-color").val();
    var inputAge = $("#input-age").val();
    var pet = new Pet(inputName, inputType, inputColor, inputAge)
    pet.pushPets(this);
    $("#list-of-pets").append("<li id='" + pet.name + "'>" + pet.name + "<button type='button'class='adopt'>Adopt</button></li>")
    $(".adopt").click(function(){
      pet.adopt();
      // if (pet.adopted === true) {
        $(this).parent().hide();
    });
  });
});
