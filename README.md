# apapacho-pineda-bk

## **Entrega 5**
- Existen 3 carpetas con 3 proyectos diferentes. Para inicializar en uno de los proyectos ir a la carpeta raiz del proyecto correspondiente y utilizar "nodemon server.js"
    - Carpetas raices
        - Handlebars: carpeta '/handlebars'
        - Pug: carpeta '/pug'
        - EJS: carpeta '/ejs'

### **1. Información General de Entrega y actualizaciones**
- Se realiza proyecto para evaluar 3 motores de plantillas diferentes: handlebars, pug y Ejs. Utilizando un servidor en node.js con los siguiente
    - express (PORT:8080)
    - multer
    - node-fetch
- Se Utiliza API de la entrega anterior para construir web server (no Rest)
- Se incluye el archivo 'productos.txt' y se utiliza la clase Contenedor creada en la Entrega 3.    
    - Las imagenes para los productos se obtienen y guardan en la carpeta '/public/assets/img'
- Se crea array 'productos'(como soporte de persistencia en memoria) y la función 'loadProductos()' que obtiene los productos del archivo 'productos.txt' y los añade al array 'productos' cuando se inicializa el servidor. 
- Navegación:
    - Navegación, enlaces para acceder a los endpoints **'/productos'** y **'/' (página de inicio)**
    - Página Principal con Formulario para añadir el producto.
        - la ruta "/porductos" recibe los datos del formulario mediante POST y redirige al mismo formulario.
    - Página de Listado de Productos con ruta GET '/productos/
    - Página de Producto


### **2. Endpoints**
    2.1. **'/'**, Página de Inicio
        - Se envía por defecto a 'index.html'        
    2.2. **'/productos'**, Página de Productos. 
        - Se obtienen los productos a través de la llamada al array productos
        - Se recorre el Array obtenido para mostrar los productos en la página, añadiendo un enlace a la página del producto correspondiente.
    2.3. **/productos/:id**, Página de Producto
        - Se obtienen los productos a través de la llamada al array productos
        - Se muestra el producto correspondiente.

### **3. Elección Template**
Debido a la facilidad de incrustar codigo javascript y su versalitilidad creo que EJS es la mejor opción