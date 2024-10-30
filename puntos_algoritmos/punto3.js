/*
3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. 
En el constructor realizar el ingreso de datos. 
Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)
*/

const readline = require('readline');



class Alumno {
    constructor() {
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
  
    ingresarDatos(callback) {
      this.rl.question('Ingrese el nombre del alumno: ', (nombre) => {
        this.nombre = nombre;
        this.rl.question('Ingrese la edad del alumno: ', (edad) => {
          this.edad = parseInt(edad);
          this.rl.close();
          callback();
        });
      });
    }
  
    imprimirDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} no es mayor de edad.`);
      }
    }
  }
  
  // Crear una instancia de Alumno y cargar los datos
  const alumno = new Alumno();
  alumno.ingresarDatos(() => {
    alumno.imprimirDatos();
    alumno.esMayorDeEdad();
  });