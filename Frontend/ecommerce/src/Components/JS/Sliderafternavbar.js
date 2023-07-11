import { Carousel } from 'antd';
const contentStyle = {
    height: '300px',
    width: '100vw',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    objectfit: 'cover',
    overflow: 'hidden'

};
const Sliderafternavbar = () => {
    return (
        <Carousel autoplay>
            <div>
                <img style={contentStyle}
                    src="./assest/slider1.jpg" />
            </div>
            <div>
                <img style={contentStyle}
                    src="https://images-static.nykaa.com/uploads/b7126bcf-7465-4cb0-ac56-11160d87c6c4.jpg?tr=w-2400,cm-pad_resize"/>
            </div>
            <div>
                <img style={contentStyle}
                    src="https://www.reliancedigital.in/medias/OnePlus-1365x260-1-.jpg?context=bWFzdGVyfGltYWdlc3w4OTgzMXxpbWFnZS9qcGVnfGltYWdlcy9oZjgvaGU1LzEwMDE5MDcwODM2NzY2LmpwZ3w2NGEzN2I4ZGU4YThjM2Y3NmE2ZGVhOTQxMDliMWQwMjRmNTRhODZiODA1ZGQ4ZmYwZGYxMDQ2YzQ2MmMxYmE4" />
               
            </div>
            <div>
                <img style={contentStyle}
                    src="https://www.aptronixindia.com/media/wysiwyg/iPhone_14_Pro_Desktop_1.jpg" />
               
            </div>
            <div>
                <img style={contentStyle} 
                src="https://www.reliancedigital.in/medias/Thunderbolt-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxNTI4MzR8aW1hZ2UvanBlZ3xpbWFnZXMvaDNjL2hhNy85NTQ2MjEyOTAwODk0LmpwZ3w0MDNkNGFmZTg2OWVkZjliZjFkYjBhNGFjNGRlMWJlNWFjOGMwZTcyZGI2ODFhYWQyYjFhN2U3NmJhODFjYzZk"/>
               
            </div>
            <div>
                <img style={contentStyle} 
                src="https://rcmbusiness.gumlet.io/category_banner_images/home%20&%20kitchen.jpg?w=1300&dpr=1.5"/>
               
            </div>
        </Carousel>
    )
}
export default Sliderafternavbar;