var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "Triceratops";
console.log(text);

var dinosaurUpperCassed = dinosaur.toUpperCase();
console.log(dinosaurUpperCassed);

var dinosaurReplace = text.replace("Velociraptor", dinosaurUpperCassed);
console.log(dinosaurReplace);
console.log(dinosaurReplace.length);
console.log(dinosaurReplace.slice(0,72));
