# Ecoscooting | AlexandraJara

Esta es una prueba tećnica para la empresa Ecoscooting.

## Especificaciones

Las especificaciones dadas son las siguientes:
- [✔] El proyecto debe realizarse en Angular.
- [✔] Consiste en una aplicación web con una estructura definida: por defecto se navega a la url *home*, que muestra un listado de países. Al clicar en un país se navega a una página con información de ese país, con la url *detail/:id*. 
- [✔] En el detalle se deben mostrar: el nombre, la capital, la subregión, la región, la población, las monedas que utilizan, los lenguajes que se hablan y las zonas horarias que tiene, además de la bandera.
- [✔] Se proporciona el Web Service <https://restcountries.eu/rest/v2/all?fields=name;alpha3Code> para recuperar los datos.
- [✔] El id se encuentra en el array de países como *alpha3Code*. Con este id recuperaremos la info de ese país con el Web Service: <https://restcountries.eu/rest/v2/alpha/${alpha3Code}>.


## Cómo usar el proyecto 

Este proyecto se ha generado utilizando [Angular CLI](https://github.com/angular/angular-cli) (v 8.3.20).

Una vez clonado puedes arrancar un servidor de desarrollo usando `ng serve --open`, que abrirá una nueva pestaña con un puerto local en tu navegador. La página se recarga automáticamente al editar la aplicación.

## Estructura 

He decidido dividir el proyecto en **componentes**, ya que son más fáciles de mantener y reutilizables.
- *Home*: almacena la url por defecto. En él organizo la estructura HTML principal. En caso de tener una mayor carga de contenido, Header, Main y Footer los extraería a componentes separados también. Dentro del main se importa el componente *Country List*.
- *Country List*: contiene la lista de países que devuelve el servicio.
- *Country*: contiene cada elemento de la lista.
- *Country detail*: contiene la vista de detalle.

Las peticiones necesarias se realizan en el servicio *Get countries*, en la carpeta **services**.

En cuanto a estilos, he utilizado Sass. Con una carga grande de estilos repetidos utilizaría variables y mixins reutilizables. Uso Flexbox para colocar los elementos, junto con Grid para distribuir el listado de países, en lugar de librerías tipo Bootstrap.

## Comentarios para el revisor

Este ha sido mi primer contacto con Angular y TypeScript. Los primeros días tras recibir la prueba los empleé en leer la [documentación oficial](https://angular.io/docs) y realizar pruebas básicas de routing y traspaso de datos entre componentes. Soy consciente de que habrá cosas a mejorar, y también detalles que con más experiencia en el framework me hubiera gustado implementar y explico a continuación:
- Evitar la segunda petición al servicio, implementando una especie de "estado" que almacene la respuesta y al que se pueda acceder desde cualquier componente (si es algo útil en este framework). En proyectos pequeños como este no es realmente necesario pero en un proyecto grande creo que podría ayudar a mejorar el rendimiento. Esto dependería también de si los datos pedidos se modifican continuamente, en ese caso quizá sea necesaria la petición del detalle para asegurar que los datos sean actuales.
- Implementar filtros para mejorar la experiencia de usuario. Un input que filtre el nombre del país, un select con las regiones... Con más tiempo de investigación hubiera sido mi siguiente paso, pero he preferido ceñirme a los requisitos y no extenderme más tiempo. 

##### Muchas gracias por permitirme realizar la prueba :)
