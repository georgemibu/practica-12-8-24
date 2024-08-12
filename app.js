/*Ejercicio
Debes completar una función que tome una lista de números, los eleve al cuadrado y luego sume los resultados.
Para la lista [1, 2, 2], la función debería devolver 9
*/
function squareSum(numbers){
    const squareNumbers = numbers.map(num => num * num);

    //Reduce, para sumar todos los números elevados:
    /*reduce es un método que aplica una función a un acumulador y a cada valor del arreglo (de izquierda a derecha) para reducirlo a un solo valor. Aquí, la función (accumulator, current) => accumulator + current suma cada número del arreglo squaredNumbers al acumulador. El segundo argumento 0 es el valor inicial del acumulador, es decir, la suma comienza en 0.*/
    const sum = squareNumbers.reduce((accumulator, current)=> accumulator +current,0);

    return sum;
}

/*Ejercicio
En una pequeña ciudad, la población inicial p0 es de 1000 habitantes al comienzo del año. La población aumenta regularmente en un 2% cada año, y además llegan 50 nuevos habitantes cada año. La tarea es calcular cuántos años necesitará la ciudad para que su población sea mayor o igual a p = 1200 habitantes.

Para resolver esto, se debe calcular el número de años necesarios para que la población alcance o supere el valor objetivo p.

Ejemplo:
Al final del primer año:

1000 + 1000 × 0.02 + 50 = 1070 habitantes

Al final del segundo año:

1070 + 1070 × 0.02 + 50 = 1141 habitantes

Al final del tercer año:

1141 + 1141 × 0.02 + 50 = 1213 habitantes

Por lo tanto, la ciudad necesitará 3 años completos para alcanzar o superar los 1200 habitantes.
*/
function nb_year (p0, percent, aug, p){
    let years = 0;
    let population = p0;
    percent /= 100;

    while (population < p){
        population = Math.floor(population + population * percent + aug);
        years++;
    }
    return years;
}

console.log(nb_year(1000, 2, 50 , 1200))

