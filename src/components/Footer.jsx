function Footer ({children,name}) {
    return(
        <>
        <h1>Footer Component</h1>
        <h3>Footer Section here {name}</h3>
        <div>{children}</div>
        </>
    );
}


export default Footer;

