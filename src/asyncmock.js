const products=[
    {
        category: "mantas",
        id: 100,
        image: "https://i.ibb.co/3RY27BJ/manta-Amarilla.jpg",
        name: "Manta amarilla",
        alt: "Manta de lana merino amarilla",
        price: 5000,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 101,
        image: "https://i.ibb.co/z6RrZgs/manta-Bison.jpg",
        name: "Manta bisón",
        alt: "Manta de lana merino bisón",
        price: 4200,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 102,
        image: "https://i.ibb.co/SrG3xK6/manta-Bison-Claro.jpg",
        name: "Manta bisón claro",
        alt: "Manta de lana merino bisón claro",
        price: 4200,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 103,
        image: "https://i.ibb.co/SncXyrz/manta-Gris.jpg",
        name: "Manta gris",
        alt: "Manta de lana merino gris",
        price: 4200,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 104,
        image: "https://i.ibb.co/hRXfLSb/manta-Mostaza.jpg",
        name: "Manta mostaza",
        alt: "Manta de lana merino mostaza",
        price: 4200,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 105,
        image: "https://i.ibb.co/GpBKXB7/manta-Negra.jpg",
        name: "Manta negra",
        alt: "Manta de lana merino negra",
        price: 4500,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 106,
        image: "https://i.ibb.co/7C3C0W4/manta-Rosa.jpg",
        name: "Manta rosa",
        alt: "Manta de lana merino rosa",
        price: 5500,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 107,
        image: "https://i.ibb.co/VVFPmDs/manta-Verde-Agua.jpg",
        name: "Manta verde agua",
        alt: "Manta de lana merino verde agua",
        price: 5000,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 108,
        image: "https://i.ibb.co/G9DM4b5/manta-Verde-Oscuro.jpg",
        name: "Manta verde oscuro",
        alt: "Manta de lana merino verde oscuro",
        price: 5000,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mates",
        id: 200,
        image: "https://i.ibb.co/bLwbxVK/mate-Cer-mica-Celeste.jpg",
        name: "Mate de cerámica celeste",
        alt: "Mate de cerámica celeste con bombilla plateada",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 201,
        image: "https://i.ibb.co/ZSM0Mz4/mate-Ceramica-Blanco-Borde-Plateado.jpg",
        name: "Mate de cerámica blanco con borde plateado",
        alt: "Mate de cerámica blanco con bombilla y borde plateado",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 202,
        image: "https://i.ibb.co/rZpxVqB/mate-Ceramica-Rosa-Borde-Cobre.jpg",
        name: "Mate de cerámica rosa con borde cobre",
        alt: "Mate de cerámica rosa con borde cobre y bombilla plateada",
        price: 1200,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 203,
        image: "https://i.ibb.co/7p2bpbS/mate-Nordico1.jpg",
        name: "Mate de madera con detalle amarillo",
        alt: "Mate de madera con detalle amarillo y bombilla negra",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 204,
        image: "https://i.ibb.co/4s674f1/mate-Nordico2.jpg",
        name: "Mate de madera rosa",
        alt: "Mate de madera rosa con bombilla negra",
        price: 1300,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 205,
        image: "https://i.ibb.co/3W4ds04/mate-Nordico3.jpg",
        name: "Mate con detalle azul y hoja color rosa",
        alt: "Mate con detalle azul y hoja color rosa, bombilla negra",
        price: 1300,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 206,
        image: "https://i.ibb.co/yWtcg0Z/mate-Nordico4.jpg",
        name: "Mate celeste con hoja color madera",
        alt: "Mate celeste con hoja color madera, bombilla blanca",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 207,
        image: "https://i.ibb.co/Xb6FN0z/mate-Nordico5.jpg",
        name: "Mate con detalle celeste y hoja rosa",
        alt: "Mate con detalle celeste y hoja rosa, bombilla blanca",
        price: 1300,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 208,
        image: "https://i.ibb.co/Yk6Jtq8/mate-Nordico6.jpg",
        name: "Mate con detalle celeste",
        alt: "Mate con detalle celeste y bombilla plateada",
        price: 1300,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "tazas",
        id: 300,
        image: "https://i.ibb.co/2nb49fJ/taza-Gryffindor.webp",
        name: "Taza mágica blanca con escudo de Gryffindor",
        alt: "Taza mágica blanca con escudo de Gryffindor",
        price: 1450,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 301,
        image: "https://i.ibb.co/x8hzJtc/taza-Howarts.jpg",
        name: "Taza mágica blanca con escudo de Howarts",
        alt: "Taza mágica blanca con escudo de Howarts",
        price: 1500,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 302,
        image: "https://i.ibb.co/Mswdy10/taza-Hufflepuff.jpg",
        name: "Taza mágica blanca con escudo de Hufflepuff",
        alt: "Taza mágica blanca con escudo de Hufflepuff",
        price: 1150,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 303,
        image: "https://i.ibb.co/WyVp1vh/taza-Mapa-Del-Merodeador.jpg",
        name: "Taza mágica mapa del Merodeador",
        alt: "Taza mágica mapa del Merodeador",
        price: 1100,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 304,
        image: "https://i.ibb.co/DWRv5KB/taza-Musgo1.jpg",
        name: "Taza mágica blanca con escudo de Ravenclaw",
        alt: "Taza mágica blanca con escudo de Ravenclaw",
        price: 1150,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 305,
        image: "https://i.ibb.co/K0qVnVv/taza-Musgo2.jpg",
        name: "Taza mágica blanca con escudo de Slyhering",
        alt: "Taza mágica blanca con escudo de Slyhering",
        price: 1450,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 306,
        image: "https://i.ibb.co/5hw97Kn/taza-Musgo3.jpg",
        name: "Taza gris claro con detalle de muzgo marrón",
        alt: "Taza gris claro con detalle de muzgo marrón",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 307,
        image: "https://i.ibb.co/VNCjD9Q/taza-Nordica1.webp",
        name: "Taza nórdica negra con mango de madera",
        alt: "Taza nórdica negra con mango de madera",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 308,
        image: "https://i.ibb.co/HCmzCFr/taza-Nordica2.webp",
        name: "Taza nórdica blanca con mango de madera",
        alt: "Taza nórdica blanca con mango de madera",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 309,
        image: "https://i.ibb.co/P4VMP45/taza-Nordica3.jpg",
        name: "Taza blanca con detalles en dorado",
        alt: "Taza blanca con detalles en dorado",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 310,
        image: "https://i.ibb.co/k6RBHmz/taza-Ravenclaw.jpg",
        name: "Taza mágica de Ravenclaw",
        alt: "Taza mágica de Ravenclaw",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 311,
        image: "https://i.ibb.co/bmXNds3/taza-Salpicada.jpg",
        name: "Taza blanca salpicada con puntos negros",
        alt: "Taza blanca salpicada con puntos negros",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 312,
        image: "https://i.ibb.co/yhfkCj1/taza-Slythering.jpg",
        name: "Taza mágica de Slythering",
        alt: "Taza mágica de Slythering",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    }
]

export const getProducts = (tipo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === tipo))
        }, 2000)
    })
}


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}