export class Crud{
    public id: number;
    
    public title: string;
    
    public author: string;
    

    constructor(id?:number, title?:string, author?:string){
        this.id = id;
        this.title = title;
        this.author = author;
    }
    public getid(): number {
        return this.id;
    }
    public setid(value: number) {
        this.id = value;
    }
    public gettitle(): string {
        return this.title;
    }
    public settitle(value: string) {
        this.title = value;
    }
    public getauthor(): string {
        return this.author;
    }
    public setauthor(value: string) {
        this.author = value;
    }
}