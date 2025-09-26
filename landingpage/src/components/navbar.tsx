

export const Navbar = () => {
    const links = [
        {
            title:"Founders",
            href:"#"
        },
        {
            title:"Guide",
            href:"#"
        },
        {
            title:"Pricing",
            href:"#"
        },
        {
            title:"Log In",
            href:"#"
        }
    ]
    return (
        <div className="navbar-root">
            <div className="logo">Fintwch</div>
            <div className="links">
                {links.map((link, idx) => <a className="link-items" key={link.title} href={link.href}>{link.title}</a>)}
                <button className="btn">Get started</button>
            </div>
        </div>
    )
}