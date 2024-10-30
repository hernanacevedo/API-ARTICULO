SELECT * FROM dev_art.empleados;
 
 /*
 •	Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A) 
 */
 
SELECT apellido 
FROM Empleados 
ORDER BY apellido DESC;

 /*
•	Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’
 */

SELECT  e.apellido AS Nombre, p.puesto AS Puesto, l.localidad AS Localidad
FROM empleados e
inner JOIN puestos p ON e.puesto_id = p.id
inner JOIN  departamentos d ON e.Departamento_id = d.id
inner JOIN  localidades l ON d.localidad_id = l.id
where p.puesto= "Soporte";
/* WHERE  p.id =3; */

/* 
	•	Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
*/

SELECT apellido 
FROM Empleados 
WHERE apellido LIKE '%o';

/* 
•	Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
*/

SELECT e.apellido AS Nombre, p.puesto AS Puesto, e.sueldo AS Sueldo
FROM Empleados e
inner JOIN Puestos p ON e.puesto_id = p.id
inner JOIN Departamentos d ON e.Departamento_id = d.id
inner JOIN Localidades l ON d.localidad_id = l.id
WHERE l.localidad = 'Carlos Paz';
 /*WHERE l.id = 2; */
 
/* 
•	Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.
*/

SELECT e.apellido AS Nombre, e.sueldo AS Sueldo,l.localidad AS Localidad
FROM Empleados e
inner JOIN Departamentos d ON e.Departamento_id = d.id
inner JOIN Localidades l ON d.localidad_id = l.id
WHERE e.sueldo BETWEEN 10000 AND 13000;

/* 
•	Visualizar los departamentos con más de 5 empleados
*/

SELECT d.Denominacion AS Departamento
FROM Departamentos d
LEFT JOIN Empleados e ON d.id = e.Departamento_id
GROUP BY d.id, d.Denominacion
HAVING COUNT(e.id) > 5;


/* 
•	Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.
*/

SELECT e.apellido AS Nombre
FROM Empleados e
inner JOIN Puestos p ON e.puesto_id = p.id
inner JOIN Departamentos d ON e.Departamento_id = d.id
inner JOIN Localidades l ON d.localidad_id = l.id
WHERE  l.localidad = 'Córdoba' AND (p.puesto = 'Analista' OR p.puesto = 'Programador');


/* 
•	Calcula el sueldo medio de todos los empleados
*/

SELECT AVG(sueldo) AS SueldoMedio
FROM Empleados;

/* 
•	¿Cuál es el máximo sueldo de los empleados del departamento 10?
*/

SELECT MAX(sueldo) AS MaxSueldo
FROM Empleados
WHERE Departamento_id = 10;

/* 
•	Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.
*/

SELECT MIN(e.sueldo) AS SueldoMinimo
FROM Empleados e
inner JOIN Departamentos d ON e.Departamento_id = d.id
WHERE d.Denominacion = 'Soporte'; 
/*WHERE d.id = 2; */ 


/* 
	•	Para cada puesto obtener la suma de sueldos.
*/

SELECT p.puesto AS Puesto,SUM(e.sueldo) AS TotalSueldo
FROM Empleados e
JOIN Puestos p ON e.puesto_id = p.id
GROUP BY p.puesto;

