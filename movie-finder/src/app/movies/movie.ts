export interface IResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: IMovie[];
}
export interface IMovie {
    id:number;
    video:boolean;
    vote_count:number;
    vote_average:number;
    title:string;
    popularity: number;
    poster_path:string;
    original_language:string;
    original_title:string;
    genre_ids:number[];
    backdrop_path:string;
    adult:boolean;
    overview:string;
    release_date:Date;
}
export interface IGenreResponse {
   genres: IGenre[];
}

export interface IGenre{
    id: number;
    name:string;
}