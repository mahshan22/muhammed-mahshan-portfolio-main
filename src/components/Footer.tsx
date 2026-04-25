import { Heart, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Muhammed Mahshan. All rights reserved.
        </p>
       
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart size={14} className="text-primary" /> by Shaan
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
