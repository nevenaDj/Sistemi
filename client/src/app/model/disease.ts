import { Symptom } from "./symptom";

export class Disease implements DiseaseInterface {
    public id: number;
    public name: string;
    public symptoms: Symptom[];
   	
	constructor(diseaseCfg: DiseaseInterface)
	{	
        this.id = diseaseCfg.id;
        this.name = diseaseCfg.name;
        this.symptoms = diseaseCfg.symptoms;        
	}
}

interface DiseaseInterface{
    id: number;
    name: string;
    symptoms: Symptom[];
}