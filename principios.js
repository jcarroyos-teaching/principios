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