import {Carousel, Container} from 'react-bootstrap';
import p1 from '../images/homepage/carousel_images/p1.jpg'
import c1 from '../images/homepage/carousel_images/c1.jpg'
import c2 from '../images/homepage/carousel_images/c2.jpg'
import c3 from '../images/homepage/carousel_images/c3.jpg'
import c4 from '../images/homepage/carousel_images/c4.jpg'
import p2 from '../images/homepage/carousel_images/p2.jpg'
import p4 from '../images/homepage/carousel_images/p4.jpg'
const blurredBackgroundStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(8px)', // Blur the background image
  WebkitFilter: 'blur(8px)', // For Safari
};
const containerStyles = {
  display: 'flex', justifyContent: 'center', alignItems: 'center'
}
const imageStyles = {
  alignSelf: 'center'
}
const Home = () => {
return (
  <>
  {/* <div style={{marginTop:'1%'}}/> */}
  <div style={{  position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <Container  style={containerStyles}>
      <div style={{...blurredBackgroundStyles,   backgroundImage: `url(${p1})`}}></div>
        <img src={c1} alt="Your Image" width={'40%'} height={'40%'} style={imageStyles} />
      </Container>
    </Carousel.Item>
    <Carousel.Item>
      <Container  style={containerStyles}>
      <div style={{...blurredBackgroundStyles,   backgroundImage: `url(${p2})`}}></div>
        <img src={c2} alt="Your Image" width={'40%'} height={'40%'} style={imageStyles} />
      </Container>
    </Carousel.Item>
    <Carousel.Item>
      <Container  style={containerStyles}>
      <div style={{...blurredBackgroundStyles,   backgroundImage: `url(${p2})`}}></div>
        <img src={c3} alt="Your Image" width={'40%'} height={'40%'} style={imageStyles} />
      </Container>
    </Carousel.Item>
    <Carousel.Item>
      <Container  style={containerStyles}>
      <div style={{...blurredBackgroundStyles,   backgroundImage: `url(${p4})`}}></div>
        <img src={c4} alt="Your Image" width={'40%'} height={'40%'} style={imageStyles} />
      </Container>
    </Carousel.Item>
    {/* Add more Carousel.Item for additional images if needed */}
  </Carousel>
</div>
</>
)
}
//  <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//       <div style={styles}>
//           <Container>
//             <img src={p1} alt="Your Image" height={600} width={600} />
//           </Container>
//         </div>
//          <img
//           src={p1}
//           alt="First slide"
//           height={600}
//           width={600}
//         /> 
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={p2}
//           alt="Second slide"
//         />
       
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={p3}
//           alt="Third slide"
//         />
       
//       </Carousel.Item>
//     </Carousel> 


export default Home