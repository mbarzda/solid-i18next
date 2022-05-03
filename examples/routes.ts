import { RouteDefinition } from 'solid-app-router';
import { HttpBackendPage, SimplePage } from './pages';

export enum Route {
    HttpBackend = 'solid-i18next/http-backend',
    Simple = 'solid-i18next/simple',
}

export const routes: RouteDefinition[] = [
    { path: Route.Simple, component: SimplePage },
    { path: Route.HttpBackend, component: HttpBackendPage },
    { path: '/*all', data: ({ navigate }) => navigate(Route.Simple) },
];
