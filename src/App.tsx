import React from 'react';
import { Tv, Phone, Mail, Leaf, Smartphone, Heart, Calculator, Brain, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#00205B] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-4 right-4 animate-pulse">
          <div className="flex items-center gap-2 bg-red-600 p-2 rounded-lg">
            <Tv className="w-6 h-6" />
            <span className="font-bold">AS SEEN ON TV</span>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold mb-6 text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Nygell Bradley's Portfolio
          </h1>
          <p className="text-3xl mb-8 text-white font-semibold">
            BUT WAIT, THERE'S MORE!
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-blue-900/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-yellow-300 text-center mb-8">FEATURED PROJECTS!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              icon={<Leaf className="w-8 h-8" />}
              title="Bankleaf"
              description="A modern banking website with sleek design and intuitive features!"
              link="https://bankleaf.netlify.app/"
            />
            <ProjectCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Phoneheaven"
              description="An elegant cell phone website showcasing the latest devices!"
              link="https://phoneheaven.netlify.app/"
            />
            <ProjectCard
              icon={<Heart className="w-8 h-8" />}
              title="ComplimentBot"
              description="Spreading positivity with compliments from lightyears away!"
              link="https://complimentbot.netlify.app/"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <ProjectCard
              icon={<Calculator className="w-8 h-8" />}
              title="Mathbud"
              description="Math + cool facts = Mathbud. Making learning fun!"
              link="https://mathbud.netlify.app/"
            />
            <ProjectCard
              icon={<Brain className="w-8 h-8" />}
              title="Memory Loss"
              description="Test your memory while exploring my portfolio!"
              link="https://memoryloss.netlify.app/"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="space-y-6 mb-8">
          <h2 className="text-5xl font-bold text-yellow-300 mb-4">
            CONTACT NOW!
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Phone className="w-8 h-8" />
            <p className="text-4xl font-bold">931-896-0100</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Mail className="w-8 h-8" />
            <p className="text-2xl">bradleynygell@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl mb-4">ACCEPTED PAYMENT METHODS:</p>
        <div className="flex justify-center gap-4">
          <div className="bg-white text-blue-900 p-3 rounded font-bold flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            GAINFUL EMPLOYMENT
          </div>
          <div className="bg-white text-blue-900 p-3 rounded font-bold">LONG-TERM CAREERS</div>
          <div className="bg-white text-blue-900 p-3 rounded font-bold">EXCITING OPPORTUNITIES</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900/50 py-4 text-center text-sm">
        <p>*Employers without job offers are subject to additional fees</p>
        <p>© {new Date().getFullYear()} Nygell Bradley</p>
      </footer>
    </div>
  );
}

function ProjectCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800/50 p-6 rounded-lg text-center hover:bg-blue-700/50 transition-colors block group"
    >
      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-yellow-300">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="mt-4 text-yellow-300 font-bold animate-pulse">CLICK NOW!</div>
    </a>
  );
}

export default App;