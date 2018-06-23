import { Disease } from "./disease";
import { Cure } from "./cure";

export class PatientDisease implements PatientDiseaseInterface {
    public id: number;
    public disease: Disease;
    public doctor: UserInterface;
    public date: Date;
    public cures: Cure[];
   	
	constructor(diseaseCfg: PatientDiseaseInterface)
	{	
        this.id = diseaseCfg.id;
        this.disease = diseaseCfg.disease;
        this.doctor = diseaseCfg.doctor;
        this.date = diseaseCfg.date;
        this.cures = diseaseCfg.cures;        
	}
}

interface PatientDiseaseInterface{
    id: number;
    disease: Disease;
    doctor: UserInterface;
    date : Date;
    cures: Cure[];
}