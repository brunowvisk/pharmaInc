import { idobModel } from "./idobModel";
import { iemailModel } from "./iemailModel";
import { iidModel } from "./iidModel";
import { ilocationModel } from "./ilocationModel";
import { inameModel } from "./inameModel";
import { iphoneModel } from "./iphoneModel";
import { ipictureModel } from "./ipictureModel";

export class ipatientData {
    constructor(public picture: ipictureModel[], 
                public name: inameModel[],
                public email: iemailModel[],
                public gender: string,
                public dob: idobModel[],
                public phone: string,
                public nat: string,
                public location: ilocationModel[],
                public id: iidModel[],
                ) { }
}

// Imagem
// Nome completo
// Email
// Gênero
// Data de nascimento
// Telefone
// Nacionalidade
// Endereço
// ID (Número de identificação)
// URL para compartilhamento