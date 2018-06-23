import { Cure } from "./cure";
import { CureComponent } from "./component";

export class AllergyComponent implements AllergyComponentInterface {
    public id: number;
    public component: CureComponent;
   	
	constructor(cureCfg: AllergyComponentInterface)
	{	
        this.id = cureCfg.id;
        this.component = cureCfg.component;        
	}
}

interface AllergyComponentInterface{
    id: number;
    component: CureComponent;
}