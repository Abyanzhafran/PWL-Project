import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Image from 'next/image';
import SignUpHero from '../public/svg/SignUpHero';
export default function () {
  return (
    <div className="flex items-center justify-around min-h-screen bg-tertriary">
      <SignUp></SignUp>
      <div className="">
        <SignUpHero width={500} height={500}></SignUpHero>
      </div>
    </div>
  );
}
