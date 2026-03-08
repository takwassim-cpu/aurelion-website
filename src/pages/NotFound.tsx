import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
    return (
        <main className="min-h-screen bg-alabaster flex items-center justify-center pt-20">
            <div className="container-luxury px-6 text-center">
                <div className="max-w-xl mx-auto">
                    <p className="font-sans text-label uppercase tracking-label text-champagne mb-4">
                        Error 404
                    </p>
                    <h1 className="font-serif text-[64px] leading-tight text-obsidian uppercase tracking-luxury mb-6">
                        Lost In <br /> Brilliance
                    </h1>
                    <p className="font-sans text-body text-warm-gray mb-12">
                        The piece you are looking for cannot be found. Like a rare diamond, it may have been moved or is currently being polished to perfection.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-obsidian text-white font-sans text-sm uppercase tracking-widest hover:bg-champagne transition-all duration-500"
                        >
                            Return Home
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/collection"
                            className="inline-flex items-center gap-3 px-10 py-4 border border-obsidian/20 text-obsidian font-sans text-sm uppercase tracking-widest hover:border-obsidian transition-all duration-500"
                        >
                            Browse Collection
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
