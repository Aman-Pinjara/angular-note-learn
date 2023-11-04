export class NoteModel{
    title: string;
    content: string;
    createdAt: Date;
    isDone: boolean;
    constructor(title: string, content: string, isDone: boolean = false){
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
        this.isDone = isDone;
    }
}