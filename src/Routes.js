import Default from './pages/Default';
import CardPage from './pages/CardPage';
import Article from './pages/Article';
import Charts from './pages/Charts';

export const routes = [
    {
        component: Default,
        exact: true,
        leftNav: true,
        name: 'Home',
        path: '/',
    },
    {
        component: Charts,
        leftNav: true,
        name: 'Charts',
        path: '/charts',
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
