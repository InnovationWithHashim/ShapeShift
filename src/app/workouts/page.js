import Image from 'next/image';
import "@/app/workouts/workouts.css"; 
const Workouts=()=>
{
    return(
        <><section className="workouts-section">
        <div className="container">
          <h2 className="section-title">Workout <span>Categories</span></h2>
          <div className="categories">
            <div className="category">
              <h3>Strength Training</h3>
              <p>Build muscle and improve strength with these effective workouts.</p>
            </div>
            <div className="category">
              <h3>Cardio</h3>
              <p>Boost your heart health with our cardio exercises.</p>
            </div>
            <div className="category">
              <h3>Flexibility</h3>
              <p>Enhance your flexibility and mobility with these stretches.</p>
            </div>
            <div className="category">
              <h3>HIIT</h3>
              <p>High-intensity workouts to burn fat and improve endurance.</p>
            </div>
          </div>
  
          <h2 className="section-title">Workout <span>Previews</span></h2>
          <div className="workout-previews">
            <div className="workout">
              <Image
                src="/images/strength-workout.jpg"
                alt="Full-Body Strength Workout"
                width={300}
                height={300}
                className="workout-image"
              />
              <h3>Full-Body Strength Workout</h3>
              <p>A comprehensive routine to work all major muscle groups.</p>
            </div>
            <div className="workout">
              <Image
                src="/images/cardio-blast.jpg"
                alt="30-Minute Cardio Blast"
                width={400}
                height={300}
                className="workout-image"
              />
              <h3>30-Minute Cardio Blast</h3>
              <p>Get your heart pumping with this high-energy cardio session.</p>
            </div>
          </div>
        </div>
      </section>
        
        </>
        
    )
}
export default Workouts