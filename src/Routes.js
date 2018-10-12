import Default from './pages/Default';
import CardPage from './pages/CardPage';
import Article from './pages/Article';

export const routes = [
    {
        component: Default,
        exact: true,
        leftNav: true,
        name: 'Home',
        path: '/',
    },
    {
        component: CardPage,
        leftNav: true,
        name: 'Cards',
        path: '/cards',
    },
    {
        component: Article,
        leftNav: true,
        name: 'Article',
        path: '/article',
    },
];
