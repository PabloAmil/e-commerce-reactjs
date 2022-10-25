# Proyecto final: Ecommerce Reactjs - Pablo Amil

Creado a través de [Create React App](https://github.com/facebook/create-react-app).

Utiliza:

- Bootstrap
- ReactJS
- Firebase
- react-icons
- react-router
- context
- react hooks

### Deployment

[https://pabloamil.github.io/e-commerce-reactjs/](https://pabloamil.github.io/e-commerce-reactjs/)


### Demo

[GIF animado mostrando funcionamiento y navegabilidad del sitio](https://drive.google.com/drive/folders/1D8qgJNSe4bDPEiG91awcdqOsPlSvNeK9)

## E-commerce

Este proyecto hecho en ReactJS imita una tienda de hardware de PC. Trae de una base de datos en la nube de Firebase los productos con sus propiedades y las exhibe. 

Posee las siguientes funciones: 

- Seleccionar categorias que se encargaran de mostrar solo aquellos productos que coincidan con ella. 
- Ver el detalle de los productos. 
- Seleccionar la cantidad hasta un limite determinado por el stock figurante en la base de datos.
- Agregar los productos al carrito de compras, al cual se puede acceder desde cualquier localidad del sitio.
- Ver la cantidad de productos que forman parte del carrito.
- Ver el valor total de la compra a realizarse, detallando ademas el precio por unidad.
- Comprar todos los productos figurantes en el carrito.
- Eliminar todos o un solo producto.
- A la hora de efectuar la compra hace una peticion de datos y en el caso de no cumplir con lo pedido deshabilita la opcion de compra. 
- De acuerdo con los botones presionados u otras instancias muestra o quita elementos de manera condicional. 




## Estructura del proyecto

#### `/components`

contiene las carpetas:
- Cart:

Conformada por Cart.css y Cart.js. Cart.js Contiene las funciones que permiten agregar items al Cart, removerlos de a uno o bien todos a la vez. Ademas contiene como componente hijo a OrderModal y habilita su renderizado. 

- CartWidget:

Conformada por CartWidget.css para estilizado y CartWidget.js. CartWidget.js recibe la variable quantity por medio de useContext y lo que hace es mostrar el numero de elementos que el Cart tiene dentro; ademas del icono del Cart en el NavBar

- ItemDetail:

Conformada por  ItemDetailContainer.js, ItemDetail.js, ItemCount.js, ItemCount.css, Description.js y Description.css

ItemDetailContainer.js utiliza el hook useParams y obtiene un id perteneciente a un producto en especifico por medio de una promesa en products.js dentro de Utils, que devuelve los productos traidos de Firebase. Usa el hook useState para asignarlos al estado "product" y lo envia como atributo a ItemDetail.js

ItemDetail.js toma el producto recibido y la funcion addItem traida del cartContext.js; en tanto addItem se encargara de checkear si este ya existe en el cart tambien enviara la cantidad seleccionada. Envia el objeto "product", el estado "showItemCount" y la funcion handleAdd() a Description.js.

Description.js se encarga de tomar el objeto "product" y listar sus propiedades y valores para que el usuario pueda ver lo que esta comprando. Al ejecutarse handleAdd() el valor de showItemCount es seteado a false y Description.js por medio de un condicional ofrece los botones de volver al index o bien dirigirse al carrito. 

ItemCount.js maneja los valores (adiciones y sustracciones) de la cantidad de productos que se desean al terminar ejecuta la funcion handleAdd().

- ItemList

Conformada por ItemListContainer.js, ItemList.js e Item.js; ademas contiene itemList.css e ItemListContainer.css

ItemListContainer.js obtiene el parametro categoryId por medio del hook useParams(). Si la especificacion se da, al estado products lo setea con el resultado de los objetos en la base de datos cuya categoria coincida, sino los mouestra todos. products es enviado a ItemList.

ItemList.js recibe products y por medio de el metodo map a cada uno lo asigna a un componente Item, que recibe por atributo el objeto product (cada uno de los productos que conformaban products).

Item.js recibe product y se encarga de en una Card mostrar las propiedades solicitadas. Si ya se encontrase seleccionado por medio de un condicional y utilizando la funcion isInCart de CartContext se encarga de anular la posibilidad de volver a agregarlo.

- OrderModal

Contiene OrderModal.css y OrderModal.js. La funcion de OrderModal.js es la de mostrar el formulario a llenar para poder completar la compra, solicitando una repeticion del input perteneciente al correo electronico.

Recibe la funcion handleBuy (por atributo onBuy) la cual crea la orden y al terminar vacia el Cart.

y los archivos:

- Loader.js

Mientras se espera que se cumpla la promesa que trae todos los productos en ItemList, Loader se muestra en tanto products figure como un array vacio, al cumplirse la promesa este desaparece. 

- NavBar.js 

Solo un NavBar traido de react-bootstrap. Tiene adentro el CartWidget.

#### `/context`

Contiene cartContext.js. Tiene dentro la parte de codigo que se encarga de agregar los productos, checkear si ya se encuentran dentro, remover 1 o todos, calcular la cantidad de items y el total a pagar. Devuelve un provider que utiliza el objeto children que representa cualquier modulo que el context tenga dentro. 

#### `/Utils`

Contiene 2 archivos js. orders.js y products.js.

orders.js crea una nueva coleccion en firebase utilizando la base de datos y el nombre a utilizar de la coleccion a crear. Devuelve una promesa utilizando addDoc() para crear el objeto en firestore. luego, la funcion createOrder() es importada en Cart.js y obtiene los parametros de la nueva orden. 

products.js 

products.js se encarga de acceder a la base de datos de firestore en donde estan alojados todos los productos y los trae conforme sea necesario, ya sea por el id o bien por el categoryId. 

## Scripts disponibles

En el directorio de este proyecto se pueden ejecutar:

### `npm start`

Corre la app en modo de desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

### `npm run build`

Corre la app en fase de produccion en la carpeta `build`.

Ver seccion [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mas informacion.

## Proximas features a agregar

- Wishlist
- Storage
- Resumen de compras