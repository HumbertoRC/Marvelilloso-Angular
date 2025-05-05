# MarvelillosoAngular

Esta es una plataforma que simula ser una pagina de streaming de entretenimiento, especificamente para ver la mayoria del contenido de Marvel con un diseño que intenta ser agradable a el usuario con estilos simples pero tratar de ser eficiente.

![Captura de pantalla 2025-04-05 205838](https://github.com/user-attachments/assets/f2feae06-b22b-4848-9e37-216cb194f3f7)
![Captura de pantalla 2025-04-05 210104](https://github.com/user-attachments/assets/81e5e21d-7c0f-49e8-a3a5-d7c5238f2688)
![Captura de pantalla 2025-04-05 210144](https://github.com/user-attachments/assets/d4241c39-a8cd-45cd-bc2e-b022cbea2ff7)
![Captura de pantalla 2025-04-05 210225](https://github.com/user-attachments/assets/199b511e-fd33-46b2-89b8-40d6c805e53c)
![Captura de pantalla 2025-04-05 210254](https://github.com/user-attachments/assets/c74bea8a-6f96-46ed-abf0-316cc421252c)

MockUp de la idea principal.
![MockUp](https://github.com/user-attachments/assets/6dea2912-1eda-47b6-a04a-81516936a428)

Imagenes adicionales:
![image](https://github.com/user-attachments/assets/109648d2-1039-4dd9-b768-bf845366a9f6)
![image](https://github.com/user-attachments/assets/280a9ca1-7273-40ed-b4b4-5a90299d95d8)
![image](https://github.com/user-attachments/assets/a8159585-208f-4c9c-8870-0440a4d26c10)
![image](https://github.com/user-attachments/assets/70a88e69-42d6-414d-b793-7d7b7dec60ff)
![image](https://github.com/user-attachments/assets/c39f2d97-a712-4dfe-b462-2fbb8e7891e7)

Pruebas: 
![image](https://github.com/user-attachments/assets/44ad3e83-74e6-4153-9019-92eeada240a5)





Instrucciones de uso:
1.- Descargar el repositorio.
2.- Ubicar el repositorio y ejecutar el codigo de manera local ya que momentaneamente es solo una demo.
3.- Si las imagenes no llegaran a cargarse verificar correctamente las rutas hacia ellas. Llas rutas se encuentran en la carpeta "src/assets/images/".
4.- Indagar en la pagina y disfrutar del diseño.


¿Como lo hice?
Primero comenzó como una idea de contenido puesto que disfruto mucho del UCM.
Para hacer la pagina fue sencillo al inicio ya que comencé con el banner de logo de la pagina, seguido de comenzar con las secciones de cada apartado tal como son las peliculas y series, al ver que no tendria mucho desplazamiento en la pagina decidi separar las peliculas en las sagas que existen por ahora, y al final dejar las series.
Despues agregué la parte de favoritos que al inicio evidentemente está vacia.
Lo mas complicado fue agregar la barra de navegacion la cual el diseño no resulto tan complicado pues opte por usar "svg's" para los iconos. Al acercar el mouse a la barra de navegacion lateral se despliega el menu con diferentes opciones, incluyendo el cierre de sesión.



Problemas conocidos:
1.- La optimización de codigo.
2.- La disfunción de la barra de busqueda.


Retrospectiva:
¿Que hice bien?
Me gustó mucho como hice la barra lateral y la idea de las cards que desplazan horizontalmente.
El diseño en general me gusta demasiado y las funciones que implemente para el uso de la pagina.

¿Qué no salió bien?
Los botones de desplazamiento.
La falta de implementacion de una base de datos mejor, por el momento los usuarios se almacenan en el LocalStorage lo cual no es recomendable (lo hice para la demostracion del proyecto).

¿Qué puedo hacer diferente?
Optimizar el codigo, implementar de una mejor manera el proyecto.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
