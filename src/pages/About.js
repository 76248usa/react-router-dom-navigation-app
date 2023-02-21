import {Link} from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to='/' className='btn'>Home </Link>
      <a href="https://www.google.com/">Google</a>
    </section>
  );
};
export default About;
