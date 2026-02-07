import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-primary/20 mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Harsh | Video Editor Portfolio
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
