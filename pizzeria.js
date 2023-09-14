var pizza = {
    tipo:    ("estilo Chicago", "tradicional","marinara","lanzada a mano"),
    ingredientes:  ("mozzarella" ,"feta","pepperoni", "salchicha" , "champiñones", "aceitunas", "cebollas")
};
    
function pizzaOven(tipo, ingredientes) {
    var pizza = {};
    pizza.tipo = tipo;
    pizza.ingredientes = ingredientes;
    return pizza;
}
    
var p1 = pizzaOven("estilo Chicago", ["mozzarella"]);
console.log(p1);
var p2 = pizzaOven("tradicional", ["pepperoni", "salchicha"], );
console.log(p2);
var p3 = pizzaOven("marinara", ["salchicha" , "champiñones"], );
console.log(p3);
var p4 = pizzaOven("lanzada a mano", ["salchicha"], );
console.log(p4);


