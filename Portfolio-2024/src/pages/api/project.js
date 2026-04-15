export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  if (type === "all") {
    return new Response(
      JSON.stringify([
        {
          title: "Lista de Tareas",
          description:
            "App de tareas desarrollada en React para gestionar pendientes.",
          tags: ["/imgs/react-2.svg", "/imgs/html-1.svg", "/imgs/css-3.svg"],
          url: "https://github.com/FrancoDavid/todo-react",
          image: "/imgs/todo-1.png",
          demo: "https://todo.darkdevs.win",
        },
        {
          title: "Juego Piedra papel y tijera",
          description:
            "Juego interactivo en Angular con lógica de turnos y resultados.",
          tags: [
            "/imgs/angular-icon-1.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
          ],
          url: "https://github.com/FrancoDavid/game-rps-angular",
          image: "/imgs/game-4.png",
          demo: "https://rps.darkdevs.win",
        },
        {
          title: "Generador de contraseñas",
          description: "Generador de contraseñas seguras hecho en Angular.",
          tags: [
            "/imgs/angular-icon-1.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
          ],
          url: "https://github.com/FrancoDavid/generate-password-angular",
          image: "/imgs/generate-1.png",
          demo: "https://gpass.darkdevs.win",
        },
        {
          title: "Tienda de Ropa",
          description: "Tienda online desarrollada en Next.js.",
          tags: ["/imgs/Next.png", "/imgs/html-1.svg", "/imgs/css-3.svg"],
          url: "https://github.com/FrancoDavid/nextjs-ecommerce-dark",
          image: "/imgs/ecommerce.png",
          demo: "",
        },
        {
          title: "Calculador de edad",
          description: "Calculadora de edad creada en React.",
          tags: ["/imgs/react-2.svg", "/imgs/html-1.svg", "/imgs/css-3.svg"],
          url: "https://github.com/FrancoDavid/calculator-age-reactjs",
          image: "/imgs/calculator-1.png",
          demo: "https://age.darkdevs.win",
        },
        {
          title: "Juego Wordle",
          description: "Juego tipo Wordle implementado en JavaScript con RxJS.",
          tags: [
            "/imgs/logo-javascript.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
            "/imgs/rxjs-1.svg",
          ],
          url: "https://github.com/FrancoDavid/wordle-rxjs",
          image: "/imgs/game-3.png",
          demo: "",
        },
        {
          title: "Pizarra",
          description: "Pizarra digital en JavaScript usando canvas y RxJS.",
          tags: [
            "/imgs/logo-javascript.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
            "/imgs/rxjs-1.svg",
          ],
          url: "https://github.com/FrancoDavid/canvas-rxjs",
          image: "/imgs/board-1.png",
          demo: "",
        },
        {
          title: "Formulario de tarjeta de credito interactivo",
          description:
            "Formulario interactivo de tarjeta desarrollado en Angular.",
          tags: [
            "/imgs/angular-icon-1.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
          ],
          url: "https://github.com/FrancoDavid/interactive-card-details-form",
          image: "/imgs/credit-1.png",
          demo: "",
        },
        {
          title: "Tienda de Ropa API",
          description:
            "API REST para tienda de ropa desarrollada en Java con Spring.",
          tags: [
            "/imgs/java.svg",
            "/imgs/spring-3.svg",
            "/imgs/mysql-logo-pure.svg",
          ],
          url: "https://github.com/FrancoDavid/backend-ecommerce-dark",
          image: "/imgs/apiecommerce.png",
          demo: "",
        },
        {
          title: "Control de plagas API",
          description:
            "API REST para control de plagas en Node.js con MongoDB.",
          tags: ["/imgs/nodejs-icon.svg", "/imgs/mongodb-icon-1.svg"],
          url: "https://github.com/FrancoDavid/api-rest-admin-crop",
          image: "/imgs/apicontrolplagas.png",
          demo: "",
        },
        {
          title: "Pomodoro Reloj - App",
          description:
            "Reloj Pomodoro para gestión de tiempo desarrollado en React Native.",
          tags: [],
          url: "https://github.com/FrancoDavid/pomodoro-reactnative",
          image: "",
          demo: "",
        },
        {
          title: "NASA Imagen del día - App",
          description:
            "App que muestra la imagen del día de la NASA usando React Native.",
          tags: [],
          url: "https://github.com/FrancoDavid/nasa-reactnative",
          image: "",
          demo: "",
        },
        {
          title: "Contador de calorías - App",
          description:
            "App para seguimiento de calorías diaria desarrollada en React Native.",
          tags: [],
          url: "https://github.com/FrancoDavid/contadorcalorias-reactnative",
          image: "",
          demo: "",
        },
      ]),
      { headers: { "Content-Type": "application/json" } },
    );
  }

  return new Response(
    JSON.stringify({
      front: [
        {
          title: "To-Do App",
          description: "",
          tags: ["/imgs/react-2.svg", "/imgs/html-1.svg", "/imgs/css-3.svg"],
          url: "https://github.com/FrancoDavid/todo-react",
          image: "/imgs/todo-1.png",
          demo: "https://todo.darkdevs.win",
        },
        {
          title: "Juego Piedra papel y tijera",
          description: "",
          tags: [
            "/imgs/angular-icon-1.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
          ],
          url: "https://github.com/FrancoDavid/game-rps-angular",
          image: "/imgs/game-4.png",
          demo: "https://rps.darkdevs.win",
        },
        {
          title: "Generador de contraseñas",
          description: "",
          tags: [
            "/imgs/angular-icon-1.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
          ],
          url: "https://github.com/FrancoDavid/generate-password-angular",
          image: "/imgs/generate-1.png",
          demo: "https://gpass.darkdevs.win",
        },
        {
          title: "E-Commerce",
          description: "",
          tags: ["/imgs/Next.png", "/imgs/html-1.svg", "/imgs/css-3.svg"],
          url: "https://github.com/FrancoDavid/nextjs-ecommerce-dark",
          image: "/imgs/ecommerce.png",
          demo: "",
        },
        {
          title: "Calculador de edad",
          description: "",
          tags: ["/imgs/react-2.svg", "/imgs/html-1.svg", "/imgs/css-3.svg"],
          url: "https://github.com/FrancoDavid/calculator-age-reactjs",
          image: "/imgs/calculator-1.png",
          demo: "https://age.darkdevs.win",
        },
        {
          title: "Juego Wordle",
          description: "",
          tags: [
            "/imgs/logo-javascript.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
            "/imgs/rxjs-1.svg",
          ],
          url: "https://github.com/FrancoDavid/wordle-rxjs",
          image: "/imgs/game-3.png",
          demo: "",
        },
        {
          title: "Pizarra",
          description: "",
          tags: [
            "/imgs/logo-javascript.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
            "/imgs/rxjs-1.svg",
          ],
          url: "https://github.com/FrancoDavid/canvas-rxjs",
          image: "/imgs/board-1.png",
          demo: "",
        },
        {
          title: "Formulario de tarjeta de credito interactivo",
          description: "",
          tags: [
            "/imgs/angular-icon-1.svg",
            "/imgs/html-1.svg",
            "/imgs/css-3.svg",
          ],
          url: "https://github.com/FrancoDavid/interactive-card-details-form",
          image: "/imgs/credit-1.png",
          demo: "",
        },
      ],
      back: [
        {
          title: "Marketplace API",
          description: "",
          tags: [
            "/imgs/java.svg",
            "/imgs/spring-3.svg",
            "/imgs/mysql-logo-pure.svg",
          ],
          url: "https://github.com/FrancoDavid/marketplace-spring",
          image: "/imgs/apimarketplace.png",
          demo: "",
        },
        {
          title: "E-commerce API",
          description: "",
          tags: [
            "/imgs/java.svg",
            "/imgs/spring-3.svg",
            "/imgs/mysql-logo-pure.svg",
          ],
          url: "https://github.com/FrancoDavid/backend-ecommerce-dark",
          image: "/imgs/apiecommerce.png",
          demo: "",
        },
        {
          title: "Control de plagas API",
          description: "",
          tags: ["/imgs/nodejs-icon.svg", "/imgs/mongodb-icon-1.svg"],
          url: "https://github.com/FrancoDavid/api-rest-admin-crop",
          image: "/imgs/apicontrolplagas.png",
          demo: "",
        },
        {
          title: "Administrador de Mensaje Api",
          description: "",
          tags: ["/imgs/java.svg", "/imgs/mysql-logo-pure.svg"],
          url: "https://github.com/FrancoDavid/message-crud-java-se",
          image: "/imgs/mensajeria.png",
          demo: "",
        },
      ],
    }),
    { headers: { "Content-Type": "application/json" } },
  );
}
