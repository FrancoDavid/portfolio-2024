export async function GET() {
    return new Response(
        JSON.stringify({
            front: [{
                title: "To-Do App",
                description: "",
                tags: ["React JS", "React-context", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/todo-react"
            },
            {
                title: "Juego Piedra papel y tijera",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/game-rps-angular"
            },
            {
                title: "Generador de contraseñas",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/generate-password-angular"
            },
            {
                title: "Calculador de edad",
                description: "",
                tags: ["React JS", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/calculator-age-reactjs"
            },
            {
                title: "Pizarra",
                description: "",
                tags: ["Javascript", "HTML", "CSS", "Rx JS"],
                url: "https://github.com/FrancoDavid/canvas-rxjs"
            },
            {
                title: "Juego Wordle",
                description: "",
                tags: ["Javascript", "HTML", "CSS", "Rx JS"],
                url: "https://github.com/FrancoDavid/wordle-rxjs"
            },
            {
                title: "Formulario de tarjeta de credito interactivo",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/interactive-card-details-form"
            },
            {
                title: "Indicadores Financieros",
                description: "",
                tags: ["Angular", "HTML", "CSS"],
                url: "https://github.com/FrancoDavid/angular-list-financial-indicators"
            },
            ],
            back: [{
                title: "Marketplace API",
                description: "",
                tags: ["Java", "Spring boot", "MySQL"],
                url: "https://github.com/FrancoDavid/marketplace-spring"
            },
            {
                title: "Administrador de Mensaje Api",
                description: "",
                tags: ["Java", "MySql"],
                url: "https://github.com/FrancoDavid/message-crud-java-se"
            },
            {
                title: "Control de plagas API",
                description: "",
                tags: ["NodeJS", "Express JS", "Mongo DB"],
                url: "https://github.com/FrancoDavid/api-rest-admin-crop"
            },]
        }),
        { headers: { "Content-Type": "application/json" } }
    )
}