import Banner from '../components/Banner';
import Marquee from '../components/Marquee';
import RightAside from '../components/RightAside';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Marquee></Marquee>
      <div className='max-w-[1240px] mx-auto grid grid-cols-6 gap-2'>
        <main className='col-span-4'>
          <h1>This is the main section</h1>
        </main>
        <aside className='col-span-2'><RightAside></RightAside></aside>
      </div>
    </div>
  );
};

export default Home;