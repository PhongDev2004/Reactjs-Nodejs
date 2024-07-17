import banner from '../assets/home-page-hero-model.svg';
import background from '../assets/home-page-hero-bg.svg';

const Banner = () => {
  return (
    <section className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-8">
      <div className="md:h-[500px] w-full bg-top bg-cover rounded-3xl flex flex-col md:flex-row p-8" style={{ backgroundImage: `url(${background})` }}>
        <div className="basis-1/2 flex justify-center flex-col px-4">
          <div className="font-extrabold text-slate-900 flex flex-col md:space-y-2 lg:text-6xl md:text-5xl text-3xl">
            <span>Online</span>
            <span>Shopping</span>
          </div>
          <div className="h-1 w-[50%] bg-slate-950 my-5"></div>
          <p className="text-slate-600 font-light text-sm line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptatem, beatae amet libero ex sapiente officia eaque neque ipsum eveniet dolores obcaecati ullam pariatur provident totam cumque ut nihil, itaque nam quidem, voluptas aliquam.
          </p>
          <button className="rounded-full mt-6 md:max-w-[50%] bg-slate-700 hover:bg-slate-800 py-2 text-white">Shopping now!</button>
        </div>
        <div className="relative w-full h-full md:basis-1/2 md:block hidden">
          <img src={banner} alt="hero session model" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
