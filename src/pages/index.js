import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='w-full flex justify-center mt-2'>
        <div className='w-[375px] h-[550px] hover:grayscale-0 transition-[filter] grayscale bg-[url("/portrait.jpg")] bg-bottom bg-cover bg-no-repeat rounded-full' />
      </div>
    </div>
  );
}
