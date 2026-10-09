import React, { useState } from 'react';
import { MapPin, Phone, Send, Check, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { SectionHeader } from './SectionHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    modality: 'Musculação & Hipertrofia',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-black border-b border-purple-950/40 w-full max-w-full overflow-hidden">
      <div className="w-[94%] max-w-[1200px] mx-auto px-2 sm:px-4">
        <SectionHeader 
          title="ENTRE EM CONTATO" 
          subtitle="Tire dúvidas, conheça nossa estrutura e saiba como começar seus treinos na Academia Thanos em Guaranésia."
        />

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct info in Purple & White */}
          <div className="flex-1 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Venha treinar com a gente!
            </h3>
            
            <p className="text-zinc-200 opacity-90 text-sm sm:text-base font-light leading-relaxed break-words">
              Interessado em começar na musculação ou ter acompanhamento de personal trainer? Conheça a Academia Thanos na Rua Francisco Monteiro Dias Nº 380 em Guaranésia - MG.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-300 font-light">
              <div className="flex items-start sm:items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
                <span className="break-words">Rua Francisco Monteiro Dias, 380 - Guaranésia, MG</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Telefone Geral: {GYM_INFO.contact.phone}</span>
              </div>
            </div>

            {/* WhatsApp Direto dos Professores */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-zinc-300 uppercase tracking-tight mb-2">
                WhatsApp Direto dos Professores:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/5535991359857?text=${encodeURIComponent('Olá Professor Vinicius! Estive no site da Academia Thanos e gostaria de falar com você.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#140c24] hover:bg-emerald-700/80 border border-purple-900/60 hover:border-emerald-500 text-white transition-all text-xs font-medium shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Prof. Vinicius: (35) 99135-9857</span>
                </a>

                <a
                  href={`https://wa.me/5535997757577?text=${encodeURIComponent('Olá Professor Presley! Estive no site da Academia Thanos e gostaria de falar com você.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#140c24] hover:bg-emerald-700/80 border border-purple-900/60 hover:border-emerald-500 text-white transition-all text-xs font-medium shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Prof. Presley: (35) 99775-7577</span>
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-3 pt-2 flex-wrap">
              <a
                href={GYM_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#140c24] hover:bg-purple-600 text-white px-4 py-2.5 rounded-xl transition-all duration-300 border border-purple-900/60 text-xs font-semibold"
                aria-label="Localização no Google Maps"
              >
                <MapPin className="w-4 h-4 text-purple-300" />
                <span>Ver no Google Maps</span>
              </a>

              <a
                href={`tel:${GYM_INFO.whatsapp.cleanNumber}`}
                className="inline-flex items-center gap-2 bg-[#140c24] hover:bg-purple-600 text-white px-4 py-2.5 rounded-xl transition-all duration-300 border border-purple-900/60 text-xs font-semibold"
                aria-label="Ligar para a Academia"
              >
                <Phone className="w-4 h-4 text-purple-300" />
                <span>Ligar para a Academia</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form in Purple & White (Sem WhatsApp) */}
          <div className="flex-1 bg-[#110a20] p-5 sm:p-8 rounded-2xl border border-purple-950/60 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5">
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
                  className="w-full p-3 sm:p-3.5 bg-[#18112a] border border-purple-950 focus:border-purple-400 rounded-xl text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  Telefone / Celular com DDD
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Ex: (35) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-3.5 bg-[#18112a] border border-purple-950 focus:border-purple-400 rounded-xl text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modality" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  Assunto ou Plano
                </label>
                <select
                  id="modality"
                  name="modality"
                  value={formData.modality}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-3.5 bg-[#18112a] border border-purple-950 focus:border-purple-400 rounded-xl text-base sm:text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Musculação & Hipertrofia">Musculação & Hipertrofia</option>
                  <option value="Personal Trainer Dedicado">Personal Trainer Dedicado</option>
                  <option value="Plano Mensal (R$ 80,00)">Plano Mensal (R$ 80,00)</option>
                  <option value="Plano Thanos VIP (R$ 90,00)">Plano Thanos VIP (R$ 90,00)</option>
                  <option value="Dúvidas & Informações">Dúvidas & Informações</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-white uppercase tracking-wider">
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Conte um pouco sobre seu objetivo ou horário preferido..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-3.5 bg-[#18112a] border border-purple-950 focus:border-purple-400 rounded-xl text-base sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-950 border border-purple-400/40"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Mensagem Enviada com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>

              {sent && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-xs text-emerald-300 text-center animate-fadeIn">
                  Recebemos seus dados! Nossa equipe entrará em contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
