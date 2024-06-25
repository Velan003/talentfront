import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const Caro = () => {
    return (
        <div id="caro">
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                interval={3000}
            >
                <div>
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 1" />
                    <p className="legend">Experience a spacious hotel room with two beds, where modern comfort meets stunning scenery. Large windows frame panoramic views of lush landscapes or sparkling city lights. Relax in stylish surroundings with contemporary furnishings and elegant decor. Indulge in amenities like plush bedding, a sleek bathroom with luxury toiletries, and high-speed internet. Perfect for unwinding after a day of exploration, blending tranquility with upscale hospitality.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="Image 2" />
                    <p className="legend">Welcome to our deluxe three-bedroom suite, blending luxury with functionality. Revel in spacious accommodations featuring three comfortable beds and panoramic views from large windows. Enjoy added amenities such as a well-appointed living room, fully equipped kitchenette, and a dining area for shared meals. Indulge in the lavish bathrooms boasting a deep soaking tub and premium toiletries. Perfect for families or groups seeking unparalleled comfort and style during their stay.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D" alt="Image 3" />
                    <p className="legend">Step into our restaurant's premier suite, the epitome of luxury and tranquility. This opulent room boasts panoramic views of serene landscapes or vibrant cityscapes, visible through expansive windows that bathe the space in natural light. Indulge in sumptuous comfort with plush furnishings, including a king-sized bed draped in fine linens, complemented by elegant decor that exudes sophistication. Additional amenities include a spacious seating area for relaxation, a modern bathroom with a rejuvenating rain shower and deep soaking tub, and thoughtful touches like personalized service and high-speed internet. Experience the pinnacle of hospitality in this unparalleled sanctuary, designed to exceed your expectations.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1638899719048-91b22d3d9ee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzJTIwd2l0aCUyMHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="Image 3" />
                    <p className="legend">Discover the ultimate in relaxation and family fun at our resort's dual swimming pools, tailored for both adults and kids. The adult pool invites tranquility with its serene ambiance, surrounded by lush greenery and lounging areas for sunbathing and unwinding. Meanwhile, the children's pool is a vibrant oasis, featuring playful water features and shallow depths, ensuring safe and enjoyable splashing for our younger guests. Both pools are meticulously maintained, offering a refreshing escape with panoramic views of the resort's scenic surroundings. Experience leisure at its finest with our dedicated pools, designed for every member of the family to enjoy.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1549648184-0d3e8b8684fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVzdHVhcmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="Image 3" />
                    <p className="legend">Experience the epitome of perfect dining at our restaurant, where every detail is crafted to delight your senses. Immerse yourself in an elegant ambiance enhanced by soft lighting and tasteful decor, creating a serene atmosphere for intimate meals or social gatherings. Our attentive staff ensures impeccable service, guiding you through a curated menu of exquisite dishes crafted from locally sourced ingredients and international flavors. Pair your meal with a selection from our extensive wine list or signature cocktails, designed to complement every palate. Whether for a romantic evening or celebratory feast, indulge in a culinary journey that promises unforgettable moments of gastronomic bliss.</p>
                </div>
            </Carousel>
        </div>
        </div>
    );
}

export default Caro;
