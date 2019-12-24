export class Constants {

    //SearchProperties
    public static readonly AbstractSearchProperty = 'Abstract';
    public static readonly AuthorsSearchProperty = 'Authors';
    public static readonly TitleSearchProperty = 'Title';
  
    //Endpoints
    public static readonly ApplicationUrl = "http://localhost:8080";
    public static readonly SearchByAuthorUrl = "/publications/search/authors?query=";
    public static readonly SearchByAbstractUrl = "/publications/search/abstract?query=";
    public static readonly SearchByTitleUrl = "/publications/search/title?query=";
    public static readonly RegisterUserUrl = "/user/register";
    public static readonly AllAuthorsUrl = "/admin/papers/authors/all";
    public static readonly CreatePaperUrl = "/admin/papers/create";
    public static readonly CreateAuthorUrl = "/admin/papers/authors/create";
    public static readonly IndexPapersUrl = "/admin/papers/syncIndex";
    public static readonly AuthenticationUrl = "/oauth/token"

    //Auth
    public static readonly ClientId = "devglan-client";
    public static readonly ClientSecret = "devglan-secret";

    public constructor() {}
  }