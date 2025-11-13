
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14 } from './components/Pages';
import { ChevronLeft, ChevronRight } from './components/Icons';

const totalPages = 14;

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToPage = useCallback((pageIndex: number) => {
        if (pageRefs.current[pageIndex]) {
            pageRefs.current[pageIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setCurrentPage(pageIndex);
        }
    }, []);

    const nextPage = useCallback(() => {
        if (currentPage < totalPages - 1) {
            scrollToPage(currentPage + 1);
        }
    }, [currentPage, scrollToPage]);

    const prevPage = useCallback(() => {
        if (currentPage > 0) {
            scrollToPage(currentPage - 1);
        }
    }, [currentPage, scrollToPage]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                nextPage();
            } else if (e.key === 'ArrowLeft') {
                prevPage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextPage, prevPage]);
    
    // Debounce scroll events to prevent rapid state updates
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Fix: Use ReturnType<typeof setTimeout> for correct browser-compatible typing.
        let scrollTimeout: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollLeft = container.scrollLeft;
                const pageWidth = container.clientWidth;
                const newPage = Math.round(scrollLeft / pageWidth);
                if (newPage !== currentPage) {
                    setCurrentPage(newPage);
                }
            }, 150);
        };

        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [currentPage]);

    const pageComponents = [
        Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14
    ];
    
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#002C5F]">
            <main
                ref={containerRef}
                className="w-full h-full flex overflow-x-scroll snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {pageComponents.map((Page, index) => (
                    <div 
                        key={index} 
                        // FIX: A ref callback should not return a value. The assignment `pageRefs.current[index] = el` implicitly returns `el`.
                        // Wrapping the assignment in curly braces `{}` creates a function body with no return value, which fixes the type error.
                        ref={el => { pageRefs.current[index] = el; }}
                        className="w-full h-full flex-shrink-0 snap-start"
                    >
                         <Page isActive={currentPage === index} />
                    </div>
                ))}
            </main>

            {/* Navigation Arrows */}
            {currentPage > 0 && (
                <button
                    onClick={prevPage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                    aria-label="Previous page"
                >
                    <ChevronLeft />
                </button>
            )}
            {currentPage < totalPages - 1 && (
                <button
                    onClick={nextPage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                    aria-label="Next page"
                >
                    <ChevronRight />
                </button>
            )}

            {/* Page Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                     <button
                        key={i}
                        onClick={() => scrollToPage(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Go to page ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;