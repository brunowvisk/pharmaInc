import { icoordinatesModel } from "./icoordinatesModel";
import { istreetModel } from "./istreetModel";
import { itimezoneModel } from "./itimezoneModel";

export interface ilocationModel{
    street: istreetModel;
    city: string;
    state: string;
    postcode: string;
    coordinates: icoordinatesModel[];
    timezone: itimezoneModel[];
  }