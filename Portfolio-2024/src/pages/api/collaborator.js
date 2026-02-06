export async function GET() {
    return new Response(
        JSON.stringify([
            {
                slug: "santifexcrew-band",
                name: "SantifexCrew",
                url: "https://www.santifexcrew.com/",
                img: "/imgs/logo_santifex.png",
                alt: "SantifexCrew Logo",
                width: "200px",
                height: "200px"
            }
           ]
        ),
        { headers: { "Content-Type": "application/json" } }
    )
}