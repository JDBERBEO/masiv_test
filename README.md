# COMIC RANDOM GENERATOR
Esta es un aplicación que genera un comic de forma aleatoria y permite al usuario calificarlo mediante estrellas.
Se desarrolla con base en un prueba técnica.

# DEPENDENCIAS
-SASS
-AXIOS
-MATERIAL UI

Se construye con Yarn y Reactjs

# NODE VERSION
v16.3.0
# YARN VERSIÓN
1.22.10

# VARIABLES DE ENTORNO
REACT_APP_BASE_URL

# USO

1. Clonar el Repositorio: 
```
$ git clone ...
```
2. Instalar las dependencias incluidas:
```
$ yarn ...
```
3. Configurar variable de entorno en archivo .env en la raiz:
```
REACT_APP_BASE_URL = http://localhost:8000
```
4. Iniciar aplicación:
```
$ yarn start
```
5. Se debe clonar el repositorio donde se encuentra el servidor local que consume la API de comics:
https://github.com/JDBERBEO/API_COMIC

6. El servidor local se debe instalar con:
```
$ yarn ...
```
7. En el servidor local se debe crear las variables de entorno en archivo .env en la raiz de la siguiente forma:
```
port = 8000
```
8. Se debe inicializar el servidor local con el comando:
```
$ yarn dev
```
