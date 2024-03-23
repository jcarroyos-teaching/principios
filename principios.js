/* Explicación de clases y metodos en javascript 
class Persona {
    constructor(nombre, apellido, edad, fechaNacimiento, asisitio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.asisitio = asisitio;
    }

    salude() {
        console.log(`Hola ${this.nombre}, tengo ${this.edad} años`);
    }
}

class Alumno extends Persona {
    constructor(nombre, apellido, edad, fechaNacimiento, asisitio, grado) {
        super(nombre, apellido, edad, fechaNacimiento, asisitio);
        this.grado = grado;
    }
    micurso() {
        console.log(`Estoy en el grado ${this.grado}`);
    }
}

class Profesor extends Persona {
    constructor(nombre, apellido, edad, fechaNacimiento, asisitio, asignatura) {
        super(nombre, apellido, edad, fechaNacimiento, asisitio);
        this.asignatura = asignatura;
    }
    yodicto() {
        console.log(`Dicto la asignatura de ${this.asignatura}`);
    }
}

let juan = new Alumno("Juan Carlos", "Arroyo", 43, "1980-09-10", true, "10");
juan.salude();
juan.micurso();

let maria = new Profesor("Maria", "Perez", 33, "1988-09-10", false, "Matemáticas");
maria.salude();
maria.yodicto();
*/

/*
Introduccion al uso de librería D3.js


// Datos de ejemplo
const data = [4, 8, 15, 16, 5, 18];

// Crea un SVG para el gráfico dentro del div#chart
const width = 420,
      barHeight = 30;

const chart = d3.select("#lacaja")
  .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

// Crea barras de gráfico
const bar = chart.selectAll("g")
  .data(data)
  .enter().append("g")
    .attr("transform", (d, i) => `translate(0,${i * barHeight})`);

    bar.append("rect")
    .attr("width", d => d * 10)
    .attr("height", barHeight - 1);
  
  bar.append("text")
    .attr("x", d => d * 10 - 3)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d);
*/


/* lectura de csv con D3.js */

// Cargar el archivo CSV
d3.dsv(";", "data.csv").then(function(data) {
    // Ahora `data` debe ser un arreglo de objetos, cada uno representando una fila del archivo CSV
  
    const sampleData = data.slice(100, 200); // Tomar solo las primeras 10 filas para el ejemplo
  
    // Mostrar los títulos en la consola
    sampleData.forEach(function(row) {
      console.log(row.Genres); // Asegurándote de que 'Title' coincida con el nombre de tu columna
    });
  }).catch(function(error) {
    // Manejo de errores
    console.error('Error al cargar el archivo CSV:', error);
  });