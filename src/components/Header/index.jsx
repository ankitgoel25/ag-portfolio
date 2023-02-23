import Image from 'next/image';
import myImage from '@/public/ankitgoel.png';
import Link from 'next/link';
import classNames from 'classnames';

const Header = () => {
  return (
    <header className='py-5 px-24 flex items-center justify-between'>
      <Image src={myImage} alt='ankit goel' width={200} />
      <nav className={classNames('flex items-center space-x-14')}>
        <Link href='/' className='hover:underline'>
          About
        </Link>
        <Link href='/' className='hover:underline'>
          Contact
        </Link>
        <a
          href='https://drive.google.com/file/d/1lNPYl3gMzHesYbtrho72d32HL9SXJKzb/view?usp=sharing'
          className='hover:underline'
          target='_blank'
          rel='noreferrer'
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
