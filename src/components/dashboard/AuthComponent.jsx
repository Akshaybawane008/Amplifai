const AuthComponent = () => {
  return (
    <div className="w-full min-h-screen bg-[#0b2c4a] text-white flex items-center justify-center relative">

      <div className="absolute top-6 left-6 w-8 h-8 border border-blue-400 rounded-full opacity-60"></div>
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-blue-400 opacity-70 rotate-45"></div>
      <div className="absolute bottom-6 left-8 w-12 h-12 border border-blue-400 opacity-60 rotate-45"></div>
      <div className="absolute bottom-8 right-6 w-10 h-10 border-2 border-blue-400 opacity-70"></div>


      <div className="max-w-lg text-center">
    
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 border-2 border-blue-400 rounded-md rotate-45"></div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywKtfz_WFT5YNRetTSJc0D5ogtIS2y1Iro1ZmEUhLpM1KTVSA"
          alt="Auth illustration"
          className="w-10 h-10 object-cover rounded-full shadow-md"
        />
        <h1 className="sm:text-5xl font-semibold leading-snug text-left">
          Drive Better Decisions <br />
          with Centralized <br />
          Performance & <br />
          Account Intelligence.
        </h1>
      </div>
    </div>
  );
};

export default AuthComponent;
