function Gallery(){
    const images = [
        "/image1.jpg",
        "/image2.png",
        "/image3.jpg",
        "/image4.jpg",
    ];

    return (
        <div>
            <h2>우리의 추억</h2>
            <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                {images.map((src, index) => {
                    return <img src={src}
                    key = {index}
                    alt={src}
                    width="150" />
                })}
            </div>
        </div>
    )
}

export default Gallery;