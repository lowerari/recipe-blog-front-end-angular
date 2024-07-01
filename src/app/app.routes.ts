import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'blogs',
        loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule)
    },
    {
        path: 'post',
        loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
    }
];
