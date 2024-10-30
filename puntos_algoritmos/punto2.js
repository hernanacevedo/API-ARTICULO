

  /*
  2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.
  */

  const readline = require('readline');

  class Operarios {
    constructor() {
      this.sueldos = [];
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
  
    cargarSueldos(callback) {
      const cargarSueldo = (index) => {
        if (index < 5) {
          this.rl.question(`Ingrese el sueldo del operario ${index + 1}: `, (input) => {
            const sueldo = parseFloat(input);
            this.sueldos.push(sueldo);
            cargarSueldo(index + 1);
          });
        } else {
          this.rl.close();
          callback();
        }
      };
  
      cargarSueldo(0);
    }
  
    imprimirSueldos() {
      console.log("Sueldos de los operarios:");
      this.sueldos.forEach((sueldo, index) => {
        console.log(`Operario ${index + 1}: ${sueldo}`);
      });
    }
  }
  
  // Crear una instancia de la clase y cargar los sueldos
  const operarios = new Operarios();
  operarios.cargarSueldos(() => {
    operarios.imprimirSueldos();
  });
