export class CureComponent implements CureComponentInterface {
    public id: number;
    public name: string;
   	
	constructor(componentCfg: CureComponentInterface)
	{	
        this.id = componentCfg.id;
        this.name = componentCfg.name;       
	}
}

interface CureComponentInterface{
    id: number;
    name: string;
}