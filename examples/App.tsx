import { Link, Route, Routes } from 'solid-app-router';
import { HttpBackendPage } from './pages/HttpBackend';
import { SimplePage } from './pages/Simple';

export const App = () => {
    return (
        <main>
            <h1>@mbarzda/solid-i18next</h1>
            <aside>
                <nav>
                    <Link href="/simple">Simple</Link>
                    <Link href="/http-backend">HttpBackend</Link>
                </nav>
            </aside>
            <section>
                <Routes>
                    <Route path="/simple" element={<SimplePage />} />
                    <Route path="/http-backend" element={<HttpBackendPage />} />
                    <Route path="/*all" element={<SimplePage />} />
                </Routes>
            </section>
        </main>
    );
};
