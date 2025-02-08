export async function GET() {
    return new Response(
        JSON.stringify([
            {
                title: "Desarrollador Front-end ChileCompra - Santiago, 2024-2025",
                descriptions: [
                    'Desarrollador Front-end especializado en React, enfocado en el diseño y desarrollo de interfaces de usuario accesibles e inclusivas, optimizadas para un amplio rango de personas, incluyendo aquellas con discapacidades.',
                    'Experto en la implementación de sistemas de gestión de estado con Redux, integración de librerías internas de CC y arquitecturas basadas en microfrontends.'
                ],
                key: "2025",
            },
            {
                title: "Head Tech OrganizaMe - Viña del Mar, 2018-2024",
                descriptions: [
                    'Lideré el desarrollo con Angular 7, HTML5, CSS3 y Bootstrap 4, colaborando con diseño en Adobe XD para crear experiencias intuitivas.',
                    'Desarrollé algoritmos y procesos con Node.js 16 y Express.js 4 para garantizar eficiencia y confiabilidad.',
                    'Mentoreé al equipo de desarrollo, promoviendo su crecimiento técnico y un ambiente colaborativo.'
                ],
                key: "2024",
            },
            {
                title: "Desarrollador Full-stack BanChile - Santiago, 2022-2023",
                subtitle: "",
                descriptions: [
                    'Desarrollé con AngularJS 1.5, HTML5 y CSS3, creando interfaces intuitivas en colaboración con diseño.',
                    'Implementé funcionalidades con Java SE 7 y AngularJS 1.5, asegurando una interacción eficiente con el backend.',
                    'Coordiné con desarrolladores, diseñadores y gerentes, participando en revisiones de código y sesiones de innovación.'
                ],
                key: "2023",
            },
            {
                title: "Desarrollador Front-end 2X3 - Santiago, 2021-2022",
                subtitle: "",
                descriptions: [
                    'En 2X3, desarrollé interfaces de usuario con AngularJS 1.5, HTML5 y Atomic CSS, colaborando estrechamente con el equipo de diseño para crear experiencias intuitivas y atractivas.',
                    'Implementé nuevas funcionalidades en nuestras aplicaciones usando AngularJS 1.5 y HTML5.',
                    'Lideré la refactorización del código con AngularJS 1.5, HTML5 y SASS 3.5, mejorando la estructura y legibilidad.'
                ],
                key: "2022",
            },
            {
                title: "Desarrollador Back-end Sigesi - Montevideo, 2018",
                descriptions: [
                    'En Sigesi, diseñé y desarrollé interfaces de usuario para ofrecer experiencias intuitivas y atractivas.',
                    'Implementé nuevas funcionalidades en las aplicaciones de Sigesi, adaptándolas a las necesidades de nuestros clientes.',
                    'Refactoricé el código en Sigesi para mejorar su estructura, legibilidad y mantenibilidad.',
                ],
                key: "2019",
            },
            {
                title: "Desarrollador Full-Stack E-brain - Viña del Mar, 2018",
                descriptions: [
                    'Especialista en interfaces de usuario dinámicas con JavaScript, jQuery, HTML5 y CSS, optimizando el rendimiento para una experiencia web fluida.',
                    'Experto en desarrollo del lado del servidor con PHP, implementando lógica de negocio robusta y escalable.',
                    'Responsable de la refactorización y mantenimiento de plataformas web en entornos productivos.',
                    'Encargado de administrar sistemas CMS para diversos clientes, incluyendo Wordpress.'
                ],
                key: "2018",
            },
        ]),
        { headers: { "Content-Type": "application/json" } }
    )
}
