import { Groupe } from "./group";
import { CureComponent } from "./component";

export class Cure implements CureInterface {
    public id: number;
    public name: string;
    public group: Groupe;
    public components: CureComponent[];
   	
	constructor(cureCfg: CureInterface)
	{	
        this.id = cureCfg.id;
        this.name = cureCfg.name;
        this.group = cureCfg.group;
        this.components = cureCfg.components;        
	}
}


interface CureInterface{
    id: number;
    name: string;
    group: Groupe;
    components: CureComponent[];
}