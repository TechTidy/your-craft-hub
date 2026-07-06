import handshandsLogo from "@/assets/handshands-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-white">
              Professional cleaning and restoration services with quality and commitment
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={handshandsLogo}
              alt="Hands-Hands Carpet Cleaning & Water Extraction"
              className="h-16 w-auto max-w-full"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-white">
              © 2022 - {currentYear} Hands-Hands. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
