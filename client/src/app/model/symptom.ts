
export class Symptom implements SymptomInterface{
    public id: number;
    public name: string;
   	
	constructor(symptomCfg:SymptomInterface)
	{	
        this.id = symptomCfg.id;
        this.name = symptomCfg.name;        
	}
}

interface SymptomInterface{
    id: number;
    name: string;
}