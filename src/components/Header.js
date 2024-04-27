import Logo from '../images/icon.png'
const Header = () => {
  return (
    <header className="flex justify-between bg-slate-800">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className='w-2/5'/>
        <h1 className='text-orange-400'>Digital-Weather</h1>
      </div>
    </header>
  );
};

export default Header;
