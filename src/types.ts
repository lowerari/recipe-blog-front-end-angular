import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body'; //adding a question mark makes the property optional
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Blog {
    id: number;
    picture: string;
    link: string;
    content: string;
    rating: number;
    category: string;
    title: string;
    author: string;
    author_username: string;
    timestamp: string;
}

export interface Comment {
    id: number;
    content: string;
    author: number;
    author_username: string;
    timestamp: string;
    blog_id: number;
}

// export interface Blogs{
//     blogs: Blog[];
// }