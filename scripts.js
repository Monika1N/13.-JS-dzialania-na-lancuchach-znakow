var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops";
console.log(text);

var dinosaurUpperCassed = dinosaur.toUpperCase();
console.log(dinosaurUpperCassed);

var dinosaurReplace = text.replace("Velociraptor", dinosaurUpperCassed);
console.log(dinosaurReplace);

var x = dinosaurReplace.length;
var halfText = dinosaurReplace.substr(0, x/2);
console.log(halfText)
