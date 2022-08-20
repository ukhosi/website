import { Outlet } from 'react-router-dom';
import Footer from '../../general/components/footer/Footer';
import Header from '../../general/components/header/Header';

const PublicPagesLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicPagesLayout