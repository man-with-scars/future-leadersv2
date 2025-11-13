import React from 'react';
import { LOGOS, COLORS } from '../constants';
import { CheckCircle, Target, Eye, ArrowRightLong, User, Phone } from './Icons';

interface PageProps {
    isActive: boolean;
}

const AnimatedElement: React.FC<{ isActive: boolean; delay?: string; animation?: string; children: React.ReactNode; className?: string; }> = ({ isActive, delay = 'delay-0', animation = 'translate-y-5', children, className }) => {
    return (
        <div className={`${className || ''} transition-all duration-700 ${delay} ${isActive ? 'opacity-100 translate-y-0' : `opacity-0 ${animation}`}`}>
            {children}
        </div>
    );
};

const PageWrapper: React.FC<{ children: React.ReactNode; bgImage?: string; bgColor?: string; className?: string }> = ({ children, bgImage, bgColor, className }) => (
    <div
        className={`w-full h-full p-10 md:p-16 lg:p-20 flex flex-col justify-center items-center text-white bg-cover bg-center ${className || ''}`}
        style={{
            backgroundImage: bgImage ? `linear-gradient(rgba(0, 44, 95, 0.7), rgba(0, 44, 95, 0.7)), url(${bgImage})` : 'none',
            backgroundColor: bgColor || COLORS.FEDERAL_NAVY,
            aspectRatio: '16/9',
        }}
    >
        {children}
    </div>
);

const LogoHeader: React.FC<{isActive: boolean}> = ({isActive}) => (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
        <div className="flex justify-center items-center space-x-6 md:space-x-12">
             <AnimatedElement isActive={isActive} delay="delay-[600ms]">
                <img src={LOGOS.FEDERAL_BANK} alt="Federal Bank" className="h-8 md:h-10 object-contain drop-shadow-lg" />
            </AnimatedElement>
             <AnimatedElement isActive={isActive} delay="delay-[700ms]">
                <img src={LOGOS.LEAD_COLLEGE_WHITE} alt="LEAD College" className="h-14 md:h-16 object-contain drop-shadow-lg" />
            </AnimatedElement>
             <AnimatedElement isActive={isActive} delay="delay-[800ms]">
                <img src={LOGOS.TOI} alt="The Times of India" className="h-8 md:h-10 object-contain drop-shadow-lg" />
            </AnimatedElement>
        </div>
    </div>
);


export const Page1: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper bgImage="https://picsum.photos/seed/architecture/1920/1080" className="text-center">
        <LogoHeader isActive={isActive}/>
        <div className="flex flex-col items-center">
            <AnimatedElement isActive={isActive} delay="delay-200">
                <h1 className="font-montserrat text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
                    Exclusive Sponsorship Proposal
                </h1>
            </AnimatedElement>
            <AnimatedElement isActive={isActive} delay="delay-[400ms]">
                <p className="mt-4 font-inter text-xl md:text-2xl lg:text-3xl text-gray-300">
                    Future Leaders – Season 1 (Nov 2025 – Feb 2026)
                </p>
            </AnimatedElement>
        </div>
    </PageWrapper>
);

export const Page2: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper bgColor="#f0f4f8" className="text-gray-800 text-center items-center justify-center">
        <div className="w-full max-w-4xl">
            <AnimatedElement isActive={isActive} delay="delay-200" animation="scale-95">
                <h2 className="font-inter text-2xl md:text-3xl" style={{color: COLORS.FEDERAL_BLUE}}>FEDERAL BANK PRESENTS</h2>
            </AnimatedElement>
            
            <AnimatedElement isActive={isActive} delay="delay-[350ms]" animation="scale-95">
                <h1 className="font-montserrat text-6xl md:text-8xl font-extrabold my-2 tracking-tighter" style={{color: COLORS.FEDERAL_NAVY}}>FUTURE LEADERS</h1>
            </AnimatedElement>
            
            <AnimatedElement isActive={isActive} delay="delay-[500ms]" animation="scale-95">
                 <div className="w-48 h-1 mx-auto my-6" style={{backgroundColor: COLORS.FEDERAL_YELLOW}}></div>
            </AnimatedElement>
           
            <AnimatedElement isActive={isActive} delay="delay-[650ms]" animation="scale-95">
                 <p className="font-inter text-xl md:text-2xl text-gray-600">
                    Organized by LEAD College (Autonomous) and The Times of India
                </p>
            </AnimatedElement>
            
            <div className="flex justify-center items-center space-x-16 mt-16">
                 <AnimatedElement isActive={isActive} delay="delay-[800ms]">
                    <img src={LOGOS.FEDERAL_BANK} alt="Federal Bank" className="h-10 md:h-12 object-contain" />
                </AnimatedElement>
                <AnimatedElement isActive={isActive} delay="delay-[900ms]">
                    <img src={LOGOS.LEAD_COLLEGE_BLUE} alt="LEAD College" className="h-14 md:h-20 object-contain" />
                </AnimatedElement>
                <AnimatedElement isActive={isActive} delay="delay-[1000ms]">
                    <img src={LOGOS.TOI} alt="The Times of India" className="h-10 md:h-12 object-contain" />
                </AnimatedElement>
            </div>
        </div>
    </PageWrapper>
);

const SummaryCard: React.FC<{ isActive: boolean, delay: string, title: string, subtitle: string }> = ({ isActive, delay, title, subtitle }) => (
    <AnimatedElement isActive={isActive} delay={delay} className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm border border-white/20">
        <p className="font-montserrat text-4xl font-bold" style={{color: COLORS.FEDERAL_YELLOW}}>{title}</p>
        <p className="mt-2 text-lg text-gray-300">{subtitle}</p>
    </AnimatedElement>
);

export const Page3: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper bgImage="https://github.com/man-with-scars/Future-Leaders/blob/main/ES.jpg?raw=1">
        <AnimatedElement isActive={isActive}>
             <h1 className="font-montserrat text-5xl font-extrabold text-center mb-12">Executive Summary</h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
           <SummaryCard isActive={isActive} delay="delay-200" title="250+" subtitle="Colleges Participating" />
           <SummaryCard isActive={isActive} delay="delay-[350ms]" title="3-Stage" subtitle="Competition Format" />
           <SummaryCard isActive={isActive} delay="delay-[500ms]" title="₹5 Lakhs+" subtitle="Total Prize Pool" />
           <SummaryCard isActive={isActive} delay="delay-[650ms]" title="National" subtitle="Footprint & Impact" />
        </div>
    </PageWrapper>
);

export const Page4: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper className="lg:flex-row flex-col items-center gap-16">
        <AnimatedElement isActive={isActive} className="lg:w-1/2 w-full lg:text-left text-center flex flex-col justify-center">
            <h1 className="font-montserrat text-5xl font-extrabold">About LEAD College</h1>
            <div className="w-24 h-1.5 my-6 lg:mx-0 mx-auto" style={{backgroundColor: COLORS.FEDERAL_YELLOW}}></div>
            <p className="font-lato text-lg text-gray-300 leading-relaxed">
                LEAD College, an autonomous institution, is dedicated to fostering innovation and leadership. The college empowers students with practical knowledge and ethical values, preparing them to excel in the global marketplace. With a diverse student body and a state-of-the-art campus, it is a hub for creative and entrepreneurial minds.
            </p>
        </AnimatedElement>
        <AnimatedElement isActive={isActive} delay="delay-200" className="lg:w-1/2 w-full">
            <img src="https://github.com/man-with-scars/Future-Leaders/blob/main/clgfrnt.png?raw=1" alt="LEAD College Campus" className="rounded-lg shadow-2xl object-cover aspect-[4/3] w-full"/>
        </AnimatedElement>
    </PageWrapper>
);

export const Page5: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper className="text-center items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center">
            <AnimatedElement isActive={isActive} delay="delay-200" animation="scale-95">
                <img src={LOGOS.FUTURE_LEADERS_WHITE} alt="Future Leaders Program" className="w-full max-w-xl mx-auto" />
            </AnimatedElement>

            <AnimatedElement isActive={isActive} delay="delay-[400ms]">
                <div className="flex space-x-1.5 my-8">
                    <div className="w-12 h-1.5 rounded-full" style={{backgroundColor: COLORS.FL_MAGENTA}}></div>
                    <div className="w-12 h-1.5 rounded-full" style={{backgroundColor: COLORS.FL_TEAL}}></div>
                    <div className="w-12 h-1.5 rounded-full" style={{backgroundColor: COLORS.FL_GOLD}}></div>
                    <div className="w-12 h-1.5 rounded-full" style={{backgroundColor: COLORS.FL_ORANGE}}></div>
                </div>
            </AnimatedElement>
            
            <AnimatedElement isActive={isActive} delay="delay-[600ms]" className="max-w-3xl">
                <p className="font-lato text-lg text-gray-300 leading-relaxed">
                   Future Leaders is a premier talent hunt designed to identify and nurture the next generation of business visionaries. It's more than a competition; it's a comprehensive development program. The multi-stage format challenges students to solve real-world problems, fostering critical thinking, teamwork, and resilience, ensuring that only the most well-rounded and capable leaders emerge victorious.
                </p>
            </AnimatedElement>
        </div>
    </PageWrapper>
);


export const Page6: React.FC<PageProps> = ({ isActive }) => {
    const Stage: React.FC<{isActive: boolean, delay: string, title: string, description: string, number: number}> = ({isActive, delay, title, description, number}) => (
        <AnimatedElement isActive={isActive} delay={delay} className="relative flex flex-col items-center text-center p-6 bg-white/5 rounded-lg border border-white/10 w-64">
            <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full font-bold text-2xl" style={{backgroundColor: COLORS.FEDERAL_BLUE, color: COLORS.WHITE}}>
                {number}
            </div>
            <h3 className="mt-8 font-montserrat text-2xl font-bold" style={{color: COLORS.FEDERAL_YELLOW}}>{title}</h3>
            <p className="mt-2 text-gray-300">{description}</p>
        </AnimatedElement>
    );

    return (
        <PageWrapper>
            <AnimatedElement isActive={isActive}>
                 <h1 className="font-montserrat text-5xl font-extrabold text-center mb-24">Competition Structure</h1>
            </AnimatedElement>
            <div className="flex items-center justify-center space-x-4 md:space-x-8 w-full max-w-6xl">
                <Stage isActive={isActive} delay="delay-200" number={1} title="College Level" description="Initial screening across 250+ partner colleges." />
                <AnimatedElement isActive={isActive} delay="delay-[300ms]" className="px-2">
                    <ArrowRightLong className="w-16 h-16 text-white/30" />
                </AnimatedElement>
                <Stage isActive={isActive} delay="delay-[400ms]" number={2} title="District Level" description="Winners advance to rigorous regional competitions." />
                <AnimatedElement isActive={isActive} delay="delay-[500ms]" className="px-2">
                     <ArrowRightLong className="w-16 h-16 text-white/30" />
                </AnimatedElement>
                <Stage isActive={isActive} delay="delay-[600ms]" number={3} title="Grand Finale" description="The final showdown at LEAD College campus." />
            </div>
        </PageWrapper>
    );
};


export const Page7: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper className="lg:flex-row flex-col items-center gap-16">
        <AnimatedElement isActive={isActive} className="lg:w-1/2 w-full">
            <h1 className="font-montserrat text-5xl font-extrabold">Why This Event Matters for India</h1>
            <div className="w-24 h-1.5 my-6 bg-white"></div>
             <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-400 flex-shrink-0" /> <span>Addresses the national leadership gap by identifying talent early.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-400 flex-shrink-0" /> <span>Empowers youth with practical skills and a competitive mindset.</span></li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 mt-1 text-green-400 flex-shrink-0" /> <span>Promotes innovation-driven learning beyond traditional academics.</span></li>
            </ul>
        </AnimatedElement>
        <AnimatedElement isActive={isActive} delay="delay-200" className="lg:w-1/2 w-full flex items-center justify-center relative">
            <img src="https://github.com/man-with-scars/Future-Leaders/blob/main/map.png?raw=1" alt="Map of India" className="max-h-[450px] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"/>
             <div className="absolute bottom-5 inset-x-5">
                 <p className="text-center font-semibold text-xl bg-black/40 text-white p-3 rounded-lg backdrop-blur-md border border-white/20">
                    National Footprint: 250+ Colleges
                 </p>
            </div>
        </AnimatedElement>
    </PageWrapper>
);

export const Page8: React.FC<PageProps> = ({ isActive }) => {
     const Benefit: React.FC<{isActive: boolean, delay: string, title: string, description: string }> = ({isActive, delay, title, description}) => (
        <AnimatedElement isActive={isActive} delay={delay} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
            <h3 className="font-montserrat text-xl font-bold" style={{color: COLORS.FEDERAL_YELLOW}}>{title}</h3>
            <p className="mt-2 text-gray-300">{description}</p>
        </AnimatedElement>
    );
    return (
    <PageWrapper bgImage="https://github.com/man-with-scars/Future-Leaders/blob/main/bnfts.jpg?raw=1">
        <AnimatedElement isActive={isActive}>
             <h1 className="font-montserrat text-5xl font-extrabold text-center mb-12">Federal Bank Partnership Benefits</h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
           <Benefit isActive={isActive} delay="delay-200" title="Exclusive Title Rights" description="'Federal Bank Presents Future Leaders' across all media." />
           <Benefit isActive={isActive} delay="delay-[300ms]" title="Full Co-Brand Visibility" description="Logo presence on all digital, print, and on-ground assets." />
           <Benefit isActive={isActive} delay="delay-[400ms]" title="Access to Top Talent" description="Engage with and recruit the brightest minds from 250+ colleges." />
           <Benefit isActive={isActive} delay="delay-[500ms]" title="Main Stage Branding" description="Dominant branding at the Grand Finale and district events." />
           <Benefit isActive={isActive} delay="delay-[600ms]" title="Keynote Speaking Session" description="Opportunity for a senior leader to address the final contestants." />
           <Benefit isActive={isActive} delay="delay-[700ms]" title="Unparalleled Goodwill" description="Associate with a nation-building youth empowerment initiative." />
        </div>
    </PageWrapper>
)};

export const Page9: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper className="!p-0">
        <div className="w-full h-full flex">
            <div className="w-1/3 bg-white text-black p-12 flex flex-col justify-center">
                 <AnimatedElement isActive={isActive} delay="delay-[600ms]">
                    <img src={LOGOS.TOI} alt="TOI Logo" className="w-48 mb-6"/>
                </AnimatedElement>
                <AnimatedElement isActive={isActive}>
                    <h1 className="font-montserrat text-5xl font-extrabold" style={{color: COLORS.TOI_RED}}>Media Value</h1>
                    <p className="text-xl mt-2">Provided by The Times of India</p>
                </AnimatedElement>
                 <AnimatedElement isActive={isActive} delay="delay-200" className="mt-8">
                     <p className="font-montserrat text-6xl font-extrabold text-gray-800">₹2,00,000</p>
                     <p className="text-xl text-gray-600">Total Guaranteed Value</p>
                </AnimatedElement>
            </div>
            <div className="w-2/3 bg-gray-100 text-gray-800 p-12 flex flex-col justify-center">
                 <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full">
                    <AnimatedElement isActive={isActive} delay="delay-200" className="border-l-4 border-[#C8102E] pl-4">
                        <p className="font-semibold text-lg">Half Page Ad (Pre-event)</p>
                        <p className="font-montserrat font-bold text-2xl">₹20,000</p>
                    </AnimatedElement>
                    <AnimatedElement isActive={isActive} delay="delay-[300ms]" className="border-l-4 border-[#C8102E] pl-4">
                        <p className="font-semibold text-lg">Full Page Ad (Post-event)</p>
                        <p className="font-montserrat font-bold text-2xl">₹55,000</p>
                    </AnimatedElement>
                    <AnimatedElement isActive={isActive} delay="delay-[400ms]" className="border-l-4 border-gray-400 pl-4">
                        <p className="font-semibold text-lg">TOI.com Post-Event Article</p>
                        <p className="font-montserrat font-bold text-2xl">₹87,500</p>
                    </AnimatedElement>
                    <AnimatedElement isActive={isActive} delay="delay-[500ms]" className="border-l-4 border-gray-400 pl-4">
                        <p className="font-semibold text-lg">TOI.com Banner Ads</p>
                        <p className="font-montserrat font-bold text-2xl">₹37,500</p>
                        <p className="text-sm text-gray-500">3 Lakh Impressions</p>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    </PageWrapper>
);

export const Page10: React.FC<PageProps> = ({ isActive }) => {
    const Mockup: React.FC<{isActive: boolean, delay: string, title: string, image: string}> = ({isActive, delay, title, image}) => (
        <AnimatedElement isActive={isActive} delay={delay} className="text-center group">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300 aspect-[4/3]">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 font-semibold text-white">{title}</p>
        </AnimatedElement>
    );

    const mockupsData = [
        { title: "Stage Backdrop", image: "https://github.com/man-with-scars/Future-Leaders/blob/main/01.jpg?raw=1" },
        { title: "Winner Certificates", image: "https://github.com/man-with-scars/Future-Leaders/blob/main/02.jpg?raw=1" },
        { title: "Event Posters", image: "https://github.com/man-with-scars/Future-Leaders/blob/main/04.1.jpg?raw=1" },
        { title: "Digital Banners", image: "https://github.com/man-with-scars/Future-Leaders/blob/main/04.jpg?raw=1" },
        { title: "Press Release", image: "https://github.com/man-with-scars/Future-Leaders/blob/main/05.jpg?raw=1" },
        { title: "Social Media Creatives", image: "https://github.com/man-with-scars/Future-Leaders/blob/main/06.jpg?raw=1" },
    ];

    return (
        <PageWrapper>
            <AnimatedElement isActive={isActive}>
                <h1 className="font-montserrat text-5xl font-extrabold text-center mb-12">Co-Branded Activation Mockups</h1>
            </AnimatedElement>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                 {mockupsData.map((mockup, index) => (
                    <Mockup 
                        key={index}
                        isActive={isActive} 
                        delay={`delay-[${200 + index * 100}ms]`} 
                        title={mockup.title} 
                        image={mockup.image} 
                    />
                ))}
            </div>
        </PageWrapper>
    )
};


export const Page11: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper>
        <AnimatedElement isActive={isActive}>
            <h1 className="font-montserrat text-5xl font-extrabold text-center mb-12">Sponsorship Deliverables</h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl text-gray-200">
            <AnimatedElement isActive={isActive} delay="delay-200" className="bg-white/10 p-6 rounded-lg">
                <h2 className="font-montserrat text-2xl font-bold border-b-2 pb-2 mb-4" style={{borderColor: COLORS.FEDERAL_YELLOW}}>Print</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Logo on all posters & standees</li>
                    <li>Inclusion in all press releases</li>
                    <li>Logo in pre/post event ads</li>
                </ul>
            </AnimatedElement>
            <AnimatedElement isActive={isActive} delay="delay-[350ms]" className="bg-white/10 p-6 rounded-lg">
                <h2 className="font-montserrat text-2xl font-bold border-b-2 pb-2 mb-4" style={{borderColor: COLORS.LEAD_BLUE}}>Digital</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Logo on event website & social media</li>
                    <li>Mentions in all digital campaigns</li>
                    <li>Branded content on TOI.com</li>
                    <li>Emailer to student database</li>
                </ul>
            </AnimatedElement>
            <AnimatedElement isActive={isActive} delay="delay-[500ms]" className="bg-white/10 p-6 rounded-lg">
                <h2 className="font-montserrat text-2xl font-bold border-b-2 pb-2 mb-4" style={{borderColor: COLORS.TOI_RED}}>On-Ground</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Main stage branding</li>
                    <li>Logo on participant certificates</li>
                    <li>Branded stall space at finale</li>
                    <li>Verbal mentions by MC</li>
                </ul>
            </AnimatedElement>
        </div>
    </PageWrapper>
);

export const Page12: React.FC<PageProps> = ({ isActive }) => {
    const ROICard: React.FC<{isActive: boolean, delay: string, title: string, description: string, icon: React.ReactNode }> = ({isActive, delay, title, description, icon}) => (
        <AnimatedElement isActive={isActive} delay={delay} className="flex items-start space-x-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl flex-shrink-0" style={{color: COLORS.FEDERAL_YELLOW}}>{icon}</div>
            <div>
                <h3 className="font-montserrat text-xl font-bold">{title}</h3>
                <p className="mt-1 text-gray-300">{description}</p>
            </div>
        </AnimatedElement>
    );

    return (
        <PageWrapper bgImage="https://github.com/man-with-scars/Future-Leaders/blob/main/roi.jpg?raw=1">
            <AnimatedElement isActive={isActive}>
                <h1 className="font-montserrat text-5xl font-extrabold text-center mb-12">Return on Investment for Federal Bank</h1>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <ROICard isActive={isActive} delay="delay-200" icon={<Eye className="w-10 h-10"/>} title="Massive Visibility" description="Reach millions of students, parents, and academics across India." />
                <ROICard isActive={isActive} delay="delay-[350ms]" icon={<Target className="w-10 h-10"/>} title="Targeted Talent Engagement" description="Direct pipeline to the country's most promising future leaders for recruitment." />
                <ROICard isActive={isActive} delay="delay-[500ms]" icon={<CheckCircle className="w-10 h-10"/>} title="Enhanced Brand Goodwill" description="Strengthen brand perception as a forward-thinking enabler of youth potential." />
            </div>
        </PageWrapper>
    );
};


export const Page13: React.FC<PageProps> = ({ isActive }) => {
    const timelinePoints = [
        { month: "Nov-Dec '25", event: "College Level Rounds" },
        { month: "Jan '26", event: "District Level Finals" },
        { month: "Feb '26", event: "Grand Finale" },
    ];

    return (
        <PageWrapper>
            <AnimatedElement isActive={isActive}>
                <h1 className="font-montserrat text-5xl font-extrabold text-center mb-24">Program Timeline</h1>
            </AnimatedElement>
            <div className="w-full max-w-6xl mt-8">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-2 left-0 w-full h-1 bg-white/30 rounded-full"></div>
                    <div
                        style={{ width: isActive ? '100%' : '0%' }}
                        className="absolute top-2 left-0 h-1 bg-white rounded-full transition-all duration-1000 ease-out delay-200"
                    ></div>

                    <div className="relative flex justify-between">
                        {timelinePoints.map((item, index) => (
                             <AnimatedElement
                                key={index}
                                isActive={isActive}
                                delay={`delay-[${300 + index * 150}ms]`}
                                className="flex flex-col items-center text-center w-40"
                            >
                                <div className="w-5 h-5 rounded-full bg-white border-4 z-10" style={{borderColor: COLORS.FEDERAL_NAVY}}></div>
                                <p className="mt-4 font-montserrat font-bold text-lg" style={{color: COLORS.FEDERAL_YELLOW}}>{item.month}</p>
                                <p className="mt-1 text-base text-gray-200">{item.event}</p>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};


export const Page14: React.FC<PageProps> = ({ isActive }) => (
    <PageWrapper bgImage="https://github.com/man-with-scars/Future-Leaders/blob/main/tmrw.jpg?raw=1" className="text-left items-start !justify-between">
        <AnimatedElement isActive={isActive} delay="delay-200">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl">
                Let’s build India’s next generation of leaders — together.
            </h1>
        </AnimatedElement>
        
        <div>
            <AnimatedElement isActive={isActive} delay="delay-[400ms]" className="mb-10">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 inline-flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <User className="w-8 h-8 text-white/80"/>
                        <p className="font-inter text-2xl font-semibold tracking-wider text-white">
                           SAJID
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-8 h-8 text-white/80"/>
                        <p className="font-inter text-2xl font-semibold tracking-wider text-white">
                           +91 95442 30903
                        </p>
                    </div>
                </div>
            </AnimatedElement>
            <div className="flex justify-start items-center space-x-12">
                 <AnimatedElement isActive={isActive} delay="delay-[600ms]">
                    <img src={LOGOS.FEDERAL_BANK} alt="Federal Bank" className="h-12 md:h-14 object-contain drop-shadow-lg" />
                </AnimatedElement>
                 <AnimatedElement isActive={isActive} delay="delay-[700ms]">
                    <img src={LOGOS.LEAD_COLLEGE_WHITE} alt="LEAD College" className="h-20 md:h-24 object-contain drop-shadow-lg" />
                </AnimatedElement>
                 <AnimatedElement isActive={isActive} delay="delay-[800ms]">
                    <img src={LOGOS.TOI} alt="The Times of India" className="h-12 md:h-14 object-contain drop-shadow-lg" />
                </AnimatedElement>
            </div>
        </div>
    </PageWrapper>
);