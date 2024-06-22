import { ILoTR, IStarWars, RazasLoTR } from "./interfaces";

export const LoTR: ILoTR[] = [
  {
        nombre: "Frodo Bolsón",
        raza: RazasLoTR.Hobbit,
        edad: 50,
        genero: "Masculino",
        habilidades: ["Valentía", "Resistencia", "Lealtad"],
        malvado: false
    },
    {
        nombre: "Gandalf el Gris",
        raza: RazasLoTR.Istar,
        edad: "Desconocida",
        genero: "Masculino",
        habilidades: ["Magia", "Sabiduría", "Liderazgo"],
        malvado: false
    },
    {
        nombre: "Aragorn",
        raza: RazasLoTR.Dunedain,
        edad: 87,
        genero: "Masculino",
        habilidades: ["Espadachín", "Rastreador", "Liderazgo"],
        malvado: false
    },
    {
        nombre: "Legolas",
        raza: RazasLoTR.ElfoSindar,
        edad: "Desconocida",
        genero: "Masculino",
        habilidades: ["Arquería", "Agilidad", "Visión Aguda"],
        malvado: false
    },
    {
        nombre: "Gimli",
        raza: RazasLoTR.Enano,
        edad: 140,
        genero: "Masculino",
        habilidades: ["Hacha de Combate", "Resistencia", "Minería"],
        malvado: false
    },
    {
        nombre: "Samwise Gamgee",
        raza: RazasLoTR.Hobbit,
        edad: 38,
        genero: "Masculino",
        habilidades: ["Lealtad", "Jardinería", "Valentía"],
        malvado: false
    },
    {
        nombre: "Boromir",
        raza: RazasLoTR.Humano,
        edad: 40,
        genero: "Masculino",
        habilidades: ["Espadachín", "Tácticas Militares", "Liderazgo"],
        malvado: false
    },
    {
        nombre: "Galadriel",
        raza: RazasLoTR.ElfoNoldor,
        edad: "Desconocida",
        genero: "Femenino",
        habilidades: ["Magia", "Sabiduría", "Clarividencia"],
        malvado: false
    },
    {
        nombre: "Elrond",
        raza: RazasLoTR.MedioElfo,
        edad: "Desconocida",
        genero: "Masculino",
        habilidades: ["Curación", "Sabiduría", "Liderazgo"],
        malvado: false
    },
    {
        nombre: "Sauron",
        raza: RazasLoTR.Ainur,
        edad: "Desconocida",
        genero: "Masculino",
        habilidades: ["Magia Oscura", "Manipulación", "Invulnerabilidad"],
        malvado: true
    }
  ];

  export const StarWars: IStarWars[] = [
    {
        nombre: "Luke Skywalker",
        raza: "Humano",
        edad: 19,
        genero: "Masculino",
        habilidades: ["Uso de la Fuerza", "Combate con Sable de Luz", "Pilotaje"]
    },
    {
        nombre: "Darth Vader",
        raza: "Humano",
        edad: 45,
        genero: "Masculino",
        habilidades: ["Uso de la Fuerza", "Combate con Sable de Luz", "Telequinesis"]
    },
    {
        nombre: "Leia Organa",
        raza: "Humano",
        edad: 19,
        genero: "Femenino",
        habilidades: ["Liderazgo", "Diplomacia", "Pilotaje"]
    },
    {
        nombre: "Han Solo",
        raza: "Humano",
        edad: 29,
        genero: "Masculino",
        habilidades: ["Pilotaje", "Puntería", "Ingenio"]
    },
    {
        nombre: "Yoda",
        raza: "Desconocida",
        edad: 900,
        genero: "Masculino",
        habilidades: ["Uso de la Fuerza", "Sabiduría", "Combate con Sable de Luz"]
    },
    {
        nombre: "Obi-Wan Kenobi",
        raza: "Humano",
        edad: 57,
        genero: "Masculino",
        habilidades: ["Uso de la Fuerza", "Combate con Sable de Luz", "Sabiduría"]
    },
    {
        nombre: "Padmé Amidala",
        raza: "Humano",
        edad: 27,
        genero: "Femenino",
        habilidades: ["Diplomacia", "Liderazgo", "Política"]
    },
    {
        nombre: "Emperador Palpatine",
        raza: "Humano",
        edad: 84,
        genero: "Masculino",
        habilidades: ["Uso de la Fuerza", "Manipulación", "Rayos de la Fuerza"]
    },
    {
        nombre: "Chewbacca",
        raza: "Wookiee",
        edad: 200,
        genero: "Masculino",
        habilidades: ["Fuerza Bruta", "Pilotaje", "Ingeniería"]
    },
    {
        nombre: "R2-D2",
        raza: "Droide Astromecánico",
        edad: "Desconocida",
        genero: "Masculino",
        habilidades: ["Hacker", "Ingeniería", "Pilotaje"]
    }
]

