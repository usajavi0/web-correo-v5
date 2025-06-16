import React, { useState } from 'react';

// --- CONSTANTES (de tu archivo constants.ts) ---
const HOST_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1ujSy_8l--giNndxKQ9S9_pAsYdC9mul2';
const HERO_BACKGROUND_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz8syxVxVMMOPFDLljBTpem_syWAqvj21zILm_eHW_kP9lw7tqRl1gK2rE1DOOWwSqJpOOTylR2sYDhlfYX6avFe_0i7mZMX7rvZiAmA2gN-xDtRoMTyhdt_S6lZmFHnWdiQWWBBzfv83qm3k7VwpEf1Q_jRZzr9atOzcCCAuyFkQLCg6ws3P5QWu1vpVPio5wv-nWgbWkNoPfjjo0TIsOTP-u-wXfC6aeaHNRwYppDcg-KoEOVQhgb_iv-hSkj_PKB7KBlHQBTAtU';
const GUIDE_TITLE = "7 Herramientas Para Empezar a Sanar Hoy";
const GUIDE_SUBTITLE = "Siete llaves emocionales para volver a ti. Desde la herida, hacia la claridad.";

// --- TIPOS DE DATOS (de tu archivo types.ts) ---
interface ValueBenefit {
  id: string;
  icon: 'Heart' | 'Sun' | 'Tree';
  title: string;
  description: string;
}

// --- COMPONENTES (de tu carpeta /components) ---
// No necesitas importarlos porque están todos aquí mismo.

const Icon: React.FC<{ name: 'Heart' | 'Sun' | 'Tree', className?: string }> = ({ name, className = "w-8 h-8" }) => {
  switch (name) {
    case 'Heart':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      );
    case 'Sun':
      return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'Tree':
       return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      );
    default:
      return null;
  }
};

const LeadForm: React.FC<{ onSubmit: (name: string, email: string) => void; }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onSubmit(name, email);
      setName('');
      setEmail('');
    } else {
      alert("Por favor, completa ambos campos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex flex-col gap-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu Nombre" className="w-full px-4 py-3 rounded-lg bg-brand-bg-light border border-brand-border text-brand-text-primary placeholder-brand-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu Correo Electrónico" className="w-full px-4 py-3 rounded-lg bg-brand-bg-light border border-brand-border text-brand-text-primary placeholder-brand-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary" required />
        <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-primary-darker transition-colors duration-300 shadow-lg">QUIERO LA GUÍA GRATIS</button>
      </div>
    </form>
  );
};

const HeroSection: React.FC<{ onSubmit: (name: string, email: string) => void }> = ({ onSubmit }) => {
  return (
    <section className="relative text-white py-20 px-4 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE_URL})` }}>
      <div className="absolute inset-0 bg-brand-black-alpha-40"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{GUIDE_TITLE}</h1>
          <p className="text-lg md:text-xl font-medium">{GUIDE_SUBTITLE}</p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md">
                 <h2 className="text-2xl font-bold text-brand-text-primary text-center mb-1">¡Descárgala ahora!</h2>
                 <p className="text-brand-text-secondary text-center mb-6">Recibe la guía directamente en tu correo.</p>
                 <LeadForm onSubmit={onSubmit} />
            </div>
        </div>
      </div>
    </section>
  );
};

const ValuePropositionSection: React.FC<{ benefits: ValueBenefit[] }> = ({ benefits }) => {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-brand-bg-card p-8 rounded-xl shadow-lg text-center border border-brand-border flex flex-col items-center">
            <div className="p-4 bg-brand-primary/10 rounded-full mb-4 text-brand-primary">
                <Icon name={benefit.icon} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-brand-text-primary mb-2">{benefit.title}</h3>
            <p className="text-brand-text-secondary">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutUsSection: React.FC<{ imageUrl: string; hostsName: string; description: string; }> = ({ imageUrl, hostsName, description }) => {
  return (
    <section className="py-16 bg-brand-bg-default">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-2xl shadow-xl border border-brand-border">
          <img src={imageUrl} alt={`Retrato de ${hostsName}`} className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white" onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x200/e0e0e0/777?text=Host'; }} />
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-brand-text-primary mb-2">Sobre los anfitriones</h3>
          <p className="text-lg text-brand-text-secondary mb-1"><span className="font-bold text-brand-primary">{hostsName}</span></p>
           <p className="text-brand-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
};

const FinalCtaSection: React.FC<{ onSubmit: (name: string, email: string) => void }> = ({ onSubmit }) => {
  return (
    <section className="py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary mb-4">¿Listo para dar el primer paso?</h2>
        <p className="text-brand-text-secondary mb-8 text-lg">No dejes pasar la oportunidad de transformar tu bienestar. Ingresa tus datos y recibe tu guía gratuita al instante.</p>
        <div className="max-w-sm mx-auto"><LeadForm onSubmit={onSubmit} /></div>
      </div>
    </section>
  );
};


// --- APLICACIÓN PRINCIPAL (App.tsx) ---
// Esta es la parte principal que une todo.
const App: React.FC = () => {
  const handleFormSubmit = (name: string, email: string) => {
    console.log(`Form submitted:`, { name, email });
    alert(`¡Gracias ${name}! Revisa tu correo ${email} para descargar la guía. (Simulación)`);
  };

  const valueBenefits: ValueBenefit[] = [
    { id: '1', icon: 'Heart', title: 'Conciencia Emocional', description: 'Aprende a identificar y comprender tus emociones, allanando el camino para respuestas más saludables.' },
    { id: '2', icon: 'Sun', title: 'Técnicas de Mindfulness', description: 'Explora prácticas que te anclan en el momento presente, reduciendo el estrés y mejorando el enfoque.' },
    { id: '3', icon: 'Tree', title: 'El Poder Sanador de la Naturaleza', description: 'Descubre cómo conectar con la naturaleza puede calmar tu alma y promover la paz interior.' }
  ];

  return (
    <div className="font-sans antialiased text-brand-text-primary bg-brand-bg-default min-h-screen">
      <main className="flex flex-col grow">
        <HeroSection onSubmit={handleFormSubmit} />
        <div className="px-4 md:px-10 lg:px-20 py-5">
          <div className="max-w-6xl mx-auto">
            <p className="text-brand-text-primary text-lg font-normal leading-relaxed pb-8 pt-8 px-4 text-center max-w-4xl mx-auto">
              ¿Estás listo para embarcarte en un viaje de autodescubrimiento y sanación? Esta guía ofrece siete poderosas herramientas para ayudarte a comenzar tu camino hacia el bienestar emocional. Cada herramienta está diseñada para brindar claridad y apoyo mientras navegas por tu paisaje interior.
            </p>
            <ValuePropositionSection benefits={valueBenefits} />
            <AboutUsSection imageUrl={HOST_IMAGE_URL} hostsName="Javi y Jesús" description="Anfitriones del podcast 'El Arte de Reprogramarte', dedicados a guiarte en tu viaje hacia el bienestar emocional." />
            <FinalCtaSection onSubmit={handleFormSubmit} />
            <p className="text-brand-text-secondary text-sm font-normal leading-normal pb-8 pt-1 px-4 text-center">Respetamos tu privacidad. Tu información se mantendrá confidencial.</p>
          </div>
        </div>
      </main>
       <footer className="bg-slate-100 py-6">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>&copy; 2024 El Arte de Reprogramarte. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;