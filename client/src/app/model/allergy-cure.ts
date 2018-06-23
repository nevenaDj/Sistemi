
import { Cure } from "./cure";

export class AllergyCure implements AllergyCureInterface {
    public id: number;
    public cure: Cure;
   	
	constructor(cureCfg: AllergyCureInterface)
	{	
        this.id = cureCfg.id;
        this.cure = cureCfg.cure;        
	}
}

interface AllergyCureInterface{
    id: number;
    cure: Cure;
}