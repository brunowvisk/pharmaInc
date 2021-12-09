import { idobModel } from "./idobModel";
import { iemailModel } from "./iemailModel";
import { iidModel } from "./iidModel";
import { ilocationModel } from "./ilocationModel";
import { iloginModel } from "./iloginModel";
import { inameModel } from "./inameModel";
import { ipictureModel } from "./ipictureModel";
import { iregisteredModel } from "./iregisteredModel";

export class ipatientDetails {
    cell: string;
    dob: idobModel;
    email: iemailModel;
    gender: string;
    id: iidModel;
    location: ilocationModel;
    login: iloginModel;
    name: inameModel;
    nat: string;
    phone: string;
    picture: ipictureModel;
    registered: iregisteredModel;
}