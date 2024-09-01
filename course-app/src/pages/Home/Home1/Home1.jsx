import "./Home1.css"
import HeroImg from "../../../assets/homeHero.png"

export default function Home1() {
  return (
    <div className="home1 container">
        <div className="home1-main mt-5">
            <div className="home1-side1">
                <div className="home1-side1-header">
                    <h2>Online</h2>
                    <h3>Courses</h3>
                    <div className="para">
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto libero quasi nesciunt mollitia, fugit cum sequi ab magnam et vero assumenda perferendis! Dolorem numquam suscipit repudiandae qui doloremque labore quae.
                        </p>
                    </div> 
                    <button>Explore Courses</button>
                </div>
            </div>
            <div className="home1-side2">
                <img src={HeroImg} className="img-fluid"  alt="" />
            </div>
        </div>
    </div>
  )
}
