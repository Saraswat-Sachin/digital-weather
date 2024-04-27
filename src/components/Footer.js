const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center fixed bottom-0 bg-slate-800">
      <p className="text-orange-400">Digital-Weather &copy; {currentYear}</p>
    </footer>
  );
};
export default Footer;
