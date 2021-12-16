function About({ imgSrc = "https://via.placeholder.com/215", aboutText }) {
    return (
        <aside>
            <img src={imgSrc} alt="blog logo"/>
            <p>{aboutText}</p>
        </aside>
    )
}

export default About;