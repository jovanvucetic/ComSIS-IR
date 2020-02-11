import { AuthorDetailsModel } from './author-details-model';

export class PublicationDetailsModel {
    public id : string;
    public title : string;
    public abstract: string;
    public year: string;
    public authors: AuthorDetailsModel[];
  }