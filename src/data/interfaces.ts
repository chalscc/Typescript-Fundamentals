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

interface IPersonaje {
  nombre: string;
  habilidades: string[];
  genero: "Masculino" | "Femenino";
}

export interface ILoTR extends IPersonaje{
  raza: RazasLoTR,
  edad: number | "Desconocida";
  malvado: boolean;
}

export interface IStarWars extends IPersonaje {
  raza: string;
  edad: number;
}

export interface IVehiculo {
  marca: string;
  modelo: string;
  ano: number;
  color: string;
}

export interface IMotos extends IVehiculo {
  cilindrada: number;
}

export interface ICoches extends IVehiculo {
  motor: string;
}