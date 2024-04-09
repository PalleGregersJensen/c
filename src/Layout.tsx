import NavHeader from "./NavHeader";
//import "./layout.css"; // Du kan inkludere denne fil for styling

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app-layout">
            <header className="nav-header fixed-top">
                <NavHeader />
            </header>
            <main className="page-content">{children}</main>
        </div>
    );
};

export default Layout;
