export class Constants {

    //SearchProperties
    public static readonly AbstractSearchProperty = 'Abstract';
    public static readonly AuthorsSearchProperty = 'Authors';
    public static readonly TitleSearchProperty = 'Title';
    public static readonly YearSearchProperty = 'Year';
    public static readonly WordsSearchProperty = 'Words in publication';
  
    //Endpoints
    public static readonly ApplicationUrl = "http://localhost:8080";
    public static readonly SearchByAuthorUrl = "/publications/search/authors?query=";
    public static readonly SearchByAbstractUrl = "/publications/search/abstract?query=";
    public static readonly SearchByTitleUrl = "/publications/search/title?query=";
    public static readonly SearchByYearUrl = "/publications/search/year?year="
    public static readonly SearchByWordsUrl = "/publications/search/words?query="
    public static readonly RegisterUserUrl = "/user/register";
    public static readonly AllAuthorsUrl = "/admin/papers/authors/all";
    public static readonly CreatePaperUrl = "/admin/papers/create";
    public static readonly CreateAuthorUrl = "/admin/papers/authors/create";
    public static readonly IndexPapersUrl = "/admin/papers/syncIndex";
    public static readonly AuthenticationUrl = "/oauth/token"
    public static readonly AuthorByIdUrl = "/authors/search/id?authorId=";
    public static readonly DblpPublicationsByAuthorsName = "/search/dblp/author?authorName="
    public static readonly PublicationDetailsUrl = "/publications/search?publicationId=";

    //Auth
    public static readonly ClientId = "devglan-client";
    public static readonly ClientSecret = "devglan-secret";

    public constructor() {}
  }