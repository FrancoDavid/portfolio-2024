export async function GET() {
    return new Response(
        JSON.stringify({
            front: [{
                title: "To-Do App",
                description: "",
                tags: ["React JS", "React-context", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/todo-react",
                image: "/imgs/todo-1.png"
            },
            {
                title: "Juego Piedra papel y tijera",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/game-rps-angular",
                image: "/imgs/game-4.png"
            },
            {
                title: "Generador de contraseñas",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/generate-password-angular",
                image: "/imgs/generate-1.png"
            },
            {
                title: "Calculador de edad",
                description: "",
                tags: ["React JS", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/calculator-age-reactjs",
                image: "/imgs/calculator-1.png"
            },
            {
                title: "Pizarra",
                description: "",
                tags: ["Javascript", "HTML", "CSS", "Rx JS"],
                url: "https://github.com/FrancoDavid/canvas-rxjs",
                image: "/imgs/board-1.png"
            },
            {
                title: "Juego Wordle",
                description: "",
                tags: ["Javascript", "HTML", "CSS", "Rx JS"],
                url: "https://github.com/FrancoDavid/wordle-rxjs",
                image: "/imgs/game-3.png"
            },
            {
                title: "Formulario de tarjeta de credito interactivo",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/interactive-card-details-form",
                image: "/imgs/credit-1.png"
            },
            {
                title: "Indicadores Financieros",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/angular-list-financial-indicators",
                image: "/imgs/financial-1.png"
            },
            ],
            back: [{
                title: "Marketplace API",
                description: "",
                tags: ["Java", "Spring boot", "MySQL"],
                url: "https://github.com/FrancoDavid/marketplace-spring",
                image: "/imgs/backend-1.jpg"
            },
            {
                title: "Administrador de Mensaje Api",
                description: "",
                tags: ["Java", "MySql"],
                url: "https://github.com/FrancoDavid/message-crud-java-se",
                image: "/imgs/backend-2.jpg"
            },
            {
                title: "Control de plagas API",
                description: "",
                tags: ["NodeJS", "Express JS", "Mongo DB"],
                url: "https://github.com/FrancoDavid/api-rest-admin-crop",
                image: "/imgs/backend-3.jpg"
            },]
        }),
        { headers: { "Content-Type": "application/json" } }
    )
}