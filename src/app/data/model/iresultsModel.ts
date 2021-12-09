import { idobModel } from "./idobModel";
import { iemailModel } from "./iemailModel";
import { ilocationModel } from "./ilocationModel";
import { inatModel } from "./inatModel";
import { ipatientsModel } from "./ipatientsModel";
import { iphoneModel } from "./iphoneModel";
import { ipictureModel } from "./ipictureModel";
import { iregisteredModel } from "./iregisteredModel";

export interface iresultsModel{
    patient: ipatientsModel[];
    location: ilocationModel[];
    email: iemailModel[];
    dob: idobModel[];
    registered: iregisteredModel[];
    phone: iphoneModel[];
    picture: ipictureModel[];
    nat: inatModel[];

  }