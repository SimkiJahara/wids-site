import { siteData } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-wids-dark text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">WiDS Bangladesh</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            {siteData.footer.disclaimer}
          </p>
        </div>
        <div className="text-slate-500 text-sm">
          {siteData.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
