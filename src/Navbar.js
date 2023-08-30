import React from 'react'
import "./Navbar.css"
import { useEffect,useState } from 'react'
function Navbar() {
    const [show, handleshow] = useState(false);

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if (window.scrollY>150) {
            handleshow(true);
        }
        else{
            handleshow(false)
        }
      });
      return ()=>{
        window.removeEventListener("scroll",()=>{
            console.log("Remove Event Listener");
        });
      };
    },[])
  return (
    <div className={`nav ${show?"nav_black":"nav"}`}>
        <img className={`nav_logo`} src="https://th.bing.com/th/id/R.015bb7b76fab1611efa1572f900dfc91?rik=tbXML%2fVqf5vUFw&pid=ImgRaw&r=0" alt="Netflix Logo" />
        <img className='nav_avatar' src="https://th.bing.com/th/id/R.5d0f9ca26f942f0eda69ffd4dc1710dc?rik=OI3uYVp0osJ3jw&pid=ImgRaw&r=0" alt="Navbar Avatar" />
    </div>
  )
}

export default Navbar