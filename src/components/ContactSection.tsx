import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Send, Check } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { openWhatsApp } from '../utils/whatsapp';
import { SectionHeader } from './SectionHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    modality: 'Musculação',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá Professor da Academia Thanos!
Meu nome é ${formData.name}.
Telefone: ${formData.phone}
Interesse: ${formData.modality}
Mensagem: ${formData.message || 'Gostaria de agendar uma visita e saber mais sobre os planos.'}`;
    
    openWhatsApp(text);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-black border-b border-purple-950/40">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <SectionHeader title="ENTRE EM CONTATO" />

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct info & social buttons in Purple & White */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Vamos treinar juntos!
            </h3>
            
            <p className="text-zinc-200 opacity-90 font-light leading-relaxed">
              Interessado em começar na musculação ou personal training? Quer conhecer a estrutura e os equipamentos? Entre em contato diretamente com nossa equipe.
            </p>

            <p className="text-zinc-300 opacity-90 font-light leading-relaxed">
              Atendimento rápido via WhatsApp direto com o professor credenciado responsável pelo salão.
            </p>

            <div className="space-y-3 pt-2 text-sm text-zinc-300 font-light">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Rua Francisco Monteiro Dias, 380 - Guaranésia, MG</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>WhatsApp: {GYM_INFO.whatsapp.formattedNumber}</span>
              </div>
            </div>

            {/* Social Icons in Purple & White */}
            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href={`https://wa.me/${GYM_INFO.whatsapp.cleanNumber}?text=${encodeURIComponent(GYM_INFO.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-[#181326] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-purple-600 hover:scale-110 shadow-md shadow-purple-950 border border-purple-900/50"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-purple-300" />
              </a>

              <a
                href={GYM_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-[#181326] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-purple-600 hover:scale-110 shadow-md shadow-purple-950 border border-purple-900/50"
                aria-label="Localização no Google Maps"
              >
                <MapPin className="w-5 h-5 text-purple-300" />
              </a>

              <a
                href={`tel:${GYM_INFO.whatsapp.cleanNumber}`}
                className="w-12 h-12 bg-[#181326] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-purple-600 hover:scale-110 shadow-md shadow-purple-950 border border-purple-900/50"
                aria-label="Ligar para a Academia"
              >
                <Phone className="w-5 h-5 text-purple-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form in Purple & White */}
          <div className="flex-1 bg-[#100c1c] p-6 sm:p-8 rounded-2xl border border-purple-950/60 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ex: João da Silva"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-[#181326] border border-purple-950 rounded-xl text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Ex: (35) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-[#181326] border border-purple-950 rounded-xl text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="modality" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  Modalidade de Interesse
                </label>
                <select
                  id="modality"
                  name="modality"
                  value={formData.modality}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-[#181326] border border-purple-950 rounded-xl text-base sm:text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
                >
                  <option value="Musculação & Hipertrofia">Musculação & Hipertrofia</option>
                  <option value="Personal Trainer">Personal Trainer Dedicado</option>
                  <option value="Plano Mensal (R$ 80,00)">Plano Mensal (R$ 80,00)</option>
                  <option value="Plano Thanos VIP (R$ 90,00)">Plano Thanos VIP (R$ 90,00)</option>
                  <option value="Aula Experimental Grátis">Aula Experimental Grátis</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  Mensagem ou Dúvida (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Conte um pouco sobre sua rotina ou objetivo..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-[#181326] border border-purple-950 rounded-xl text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-950 border border-purple-400/40"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Abrindo WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
