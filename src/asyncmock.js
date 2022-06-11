const products=[
    {
        category: "mantas",
        id: 1,
        image: "/assets/images/mantaAmarilla.jpg",
        name: "Manta amarilla",
        price: 5000,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 2,
        image: "/assets/images/mantaBison.jpg",
        name: "Manta bison",
        price: 4200,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 3,
        image: "/assets/images/mantaBisonClaro.jpg",
        name: "Manta bison claro",
        price: 4200,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 4,
        image: "/assets/images/mantaGris.jpg",
        name: "Manta gris",
        price: 4500,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 5,
        image: "/assets/images/mantaRosa.jpg",
        name: "Manta rosa",
        price: 5500,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mantas",
        id: 6,
        image: "/assets/images/mantaVerdeAgua.jpg",
        name: "Manta verde agua",
        price: 5000,
        detalle: "Dimensiones: 2 x 0,8 m"
    },
    {
        category: "mates",
        id: 7,
        image: "/assets/images/mateNordico1.jpg",
        name: "Mate con detalle amarillo, bombilla negra",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 8,
        image: "/assets/images/mateNordico2.jpg",
        name: "Mate rosa con hoja color madera, bombilla negra",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 9,
        image: "/assets/images/mateNordico3.jpg",
        name: "Mate con detalle azul y hoja color rosa, bombilla negra",
        price: 1200,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 10,
        image: "/assets/images/mateNordico4.jpg",
        name: "Mate celeste con hoja color madera, bombilla blanca",
        price: 1100,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 11,
        image: "/assets/images/mateNordico5.jpg",
        name: "Mate con detalle celeste y hoja rosa, bombilla blanca",
        price: 1300,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "mates",
        id: 12,
        image: "/assets/images/mateNordico6.jpg",
        name: "Mate con detalle celeste, bombilla cromada",
        price: 1300,
        detalle: "Capacidad: 90 ml"
    },
    {
        category: "tazas",
        id: 13,
        image: "/assets/images/tazaGryffindor.jpg",
        name: "Taza mágica blanca con escudo de Gryffindor",
        price: 1450,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 14,
        image: "/assets/images/tazaHowarts.jpg",
        name: "Taza mágica blanca con escudo de Howarts",
        price: 1500,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 15,
        image: "/assets/images/tazaHufflepuff.jpg",
        name: "Taza mágica blanca con escudo de Hufflepuff",
        price: 1150,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 16,
        image: "/assets/images/tazaMapaDelMerodeador.jpg",
        name: "Taza mapa del Merodeador",
        price: 1100,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 17,
        image: "/assets/images/tazaRavenclaw.jpg",
        name: "Taza mágica blanca con escudo de Ravenclaw",
        price: 1150,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 18,
        image: "/assets/images/tazaSlythering.jpg",
        name: "Taza mágica blanca con escudo de Slyhering",
        price: 1450,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 19,
        image: "/assets/images/tazaMusgo1.jpg",
        name: "Taza gris claro con detalle de muzgo marrón",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 20,
        image: "/assets/images/tazaMusgo2.jpg",
        name: "Taza rosa claro con detalle de musgo marrón",
        price: 1000,
        detalle: "Capacidad: 220 ml"
    },
    {
        category: "tazas",
        id: 21,
        image: "/assets/images/tazaMusgo3.jpg",
        name: "Taza celeste con detalle de musgo marrón",
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