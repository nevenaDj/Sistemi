export class Groupe implements GroupInterface {
    public id: number;
    public name: string;
   	
	constructor(groupCfg: GroupInterface)
	{	
        this.id = groupCfg.id;
        this.name = groupCfg.name;        
	}
}

interface GroupInterface{
    id: number;
    name: string;
}