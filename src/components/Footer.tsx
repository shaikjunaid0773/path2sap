const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/lovable-uploads/e06a6843-ee02-45ca-a83b-4c212617a0d4.png" alt="Path2SAP" className="h-8 w-auto brightness-0 invert" />
            <p className="text-background/80 max-w-sm">
              Expert SAP consulting for supply chain excellence with specialized expertise in Extended Warehouse Management.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>Extended Warehouse Management</li>
              <li>Supply Chain Optimization</li>
              <li>SAP Process Design</li>
              <li>Training & Documentation</li>
              <li>Business Planning Support</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-2 text-background/80">
              <p>Business Hours:</p>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Email: info@path2sap.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} Path2SAP Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;