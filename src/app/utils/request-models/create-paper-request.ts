export class CreatePaperRequest {
    title: string;
    paperAbstract: string;
    authors : string[];

    constructor(title: string, paperAbstract: string, authors : string[]) {
        this.title = title;
        this.paperAbstract = paperAbstract;
        this.authors = authors;
    }
}