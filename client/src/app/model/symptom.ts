
export class Symptom implements SymptomInterface{
    public id: number;
    public name: string;
    public specificSymptom: boolean;
   	
	constructor(symptomCfg:SymptomInterface)
	{	
        this.id = symptomCfg.id;
        this.name = symptomCfg.name;  
        this.specificSymptom = symptomCfg.specificSymptom;      
	}
}

interface SymptomInterface{
    id: number;
    name: string;
    specificSymptom: boolean;
}