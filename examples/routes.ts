import { RouteDefinition } from 'solid-app-router';
import { HttpBackendPage, SimplePage } from './pages';

export enum Route {
    HttpBackend = 'http-backend',
    Simple = 'simple',
}

export const routes: RouteDefinition[] = [
    { path: Route.Simple, component: SimplePage },
    { path: Route.HttpBackend, component: HttpBackendPage },
    { path: '/*all', data: ({ navigate }) => navigate(Route.Simple) },
];
