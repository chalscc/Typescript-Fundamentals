export const enum RazasLoTR {
    Hobbit = "Hobbit",
    Istar = "Istar (Mago)",
    Ainur = "Ainur (Maia)",
    MedioElfo = "Medio Elfo",
    ElfoNoldor = "Elfo Noldor",
    Dunedain = "Dúnedain (Humano)",
    ElfoSindar = "Elfo Sindar",
    Enano = "Enano",
    Humano = "Humano"
}

export interface ILoTR {
    nombre: string;
    raza: RazasLoTR,
    edad: number | "Desconocida";
    genero: "Masculino" | "Femenino";
    habilidades: string[];
    malvado: boolean;
}

export interface IStarWars {
    nombre: string;
    raza: string;
    edad: number | "Desconocida";
    genero: string;
    habilidades: string[];
}