import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/search', compoment: Search, layout: null },
    { path: '/upload', compoment: Upload, layout: HeaderOnly },
    { path: '/profile', compoment: Profile },
    { path: '/following', compoment: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
