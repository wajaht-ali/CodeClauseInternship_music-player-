import React from 'react'
import '../styles/home.scss';
import img2 from '../assets/img2.jpeg';
// import data from '../assets/data.json';
// import data from '../assets/data.json';
import song from '../assets/Hamdard.mp3';
// import img from '../assets/img.jpeg';
import {FaAngleLeft, FaBars} from 'react-icons/fa';
 
const Home = () => {
  return (
    <div className='home'>
        <div className="container">
          <div className="top-icons">
            <i className='navIcon'><FaAngleLeft /></i>
            <i className='navIcon'><FaBars /></i>
          </div>
        <div className="mp3-player">

            <img src={img2} alt='Hamdard' />
            <h2>Hamdard - Arjit Singh</h2>
            <p>Ek villan song</p>
            <audio controls>
              <source src={song} type='audio/mpeg'/>
            </audio>

          {/* {
            data.info.map((i) => (
              <musicPlayer
              // key={index} 
              title={i.title}
              description={i.description}
              url={i.url}
              />
            ))
          } */}
        </div>
        </div>
    </div>
  )
}

// const musicPlayer = ({title, description, url}) => {
//   <>
//     <h3>{title}</h3>
//     <p>{description}</p>
//     <audio controls>
//       <source src={url}/>
//     </audio>
//   </>
// }
export default Home