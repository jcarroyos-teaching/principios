
let persona = {
    nombre : "Juan Carlos",
    apellido : "Arroyo",
    edad : 43,
    fechaNacimiento : "1980-09-10",
    asisitio : true,
    saludar : function() {
        console.log(`Hola ${this.nombre}, tengo ${this.edad} años`);
    }
}

persona.saludar();
