// components/Blog.tsx
import "@/app/blog/blog.css"; // Make sure to create this CSS file

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest <span>Articles</span></h2>
        <div className="articles">
          <div className="article">
            <h3>How to Set Realistic Fitness Goals</h3>
            <p className="excerpt">Setting achievable goals can keep you motivated and on track. Learn how to set goals that align with your fitness aspirations.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="article">
            <h3>The Benefits of Strength Training</h3>
            <p className="excerpt">Discover the numerous benefits of incorporating strength training into your workout routine.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        <h2 className="section-title">Blog <span>Categories</span></h2>
        <div className="categories">
          <div className="category">
            <a href="#" className="category-link">Fitness Tips</a>
          </div>
          <div className="category">
            <a href="#" className="category-link">Success Stories</a>
          </div>
          <div className="category">
            <a href="#" className="category-link">Workout Routines</a>
          </div>
          <div className="category">
            <a href="#" className="category-link">Healthy Eating</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
