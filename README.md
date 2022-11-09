# apapacho-pineda-bk

## **Entrega 5**
Información General de Entrega y actualizaciones

- Se realiza proyecto servidor en node.js utilizando los siguientes modulos
    - express (PORT:8080)
    - multer
    - node-fetch
- Se incluye el archivo 'productos.txt' y se utiliza la clase Contenedor creada en la Entrega anterior.    
    - Las imagenes para los productos se obtienen desde carpeta '/public/assets/img'
- Se crea array 'productos'(como soporte de persistencia en memoria) y la función 'loadProductos()' que obtiene los productos del archivo 'productos.txt' y los añade al array 'productos' cuando se inicializa el servidor. 
- Se crea archivo index.html que tiene dos secciones:
    - Navegación, enlaces para acceder a los endpoints **'/productos'** y **'/productoRandom'**
    - Formulario para añadir el producto, se envía a través de la API un objeto utilizando la información del formulario, añadiendo el objeto en el array de productos que se encuentra en el archivo 'productos.txt'.
- Se comienza a utilizar las respuestas de la API para obtener el array de productos en los Endpoints de la página. Esto se realiza utilizando el método 'fetch' para obtener el resultado de la llamada correspondiente en la API.

### **1. Endpoints**
    1.1. **'/'**, Página de Inicio
        - Se envía por defecto a 'index.html'        
    1.2. **'/productos'**, Página de Productos. 
        - Se obtienen los productos a través de la llamada a la api en '/api/productos/'
        - Se recorre el Array obtenido para mostrar los productos en la página, añadiendo un enlace a la página del producto correspondiente.
    1.3. **'/productoRandom'**, Página de producto al azar
        - Se obtienen los productos a través de la llamada a la api en '/api/productoRandom/'
        - A través de la Promesa se muestra el producto correspondiente.
    1.4. **/productos/:id**, Página de Producto
        - Se obtienen los productos a través de la llamada a la api en '/api/productos/:id'
        - A través de la Promesa se muestra el producto correspondiente.

### **2. API**
[Para ver documentación de la API visitar](https://documenter.getpostman.com/view/24153895/2s8YRgqZj1)
