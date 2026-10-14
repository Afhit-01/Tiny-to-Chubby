import React, { useState } from 'react';
import { Sparkles, Edit2, Check } from 'lucide-react';
import { birthdayAudio } from '../utils/audio';

interface AppreciationItem {
  id: number;
  numeral: string;
  statement: string;
  reflection: string;
}

export const AppreciationSection: React.FC = () => {
  const [items, setItems] = useState<AppreciationItem[]>([
    {
      id: 1,
      numeral: 'I',
      statement: 'For the laughter you bring.',
      reflection: 'The spontaneous joy that brightens the longest days. May Allah keep your heart light, your spirit peaceful, and your smile radiant.',
    },
    {
      id: 2,
      numeral: 'II',
      statement: 'For the little things that make you uniquely you.',
      reflection: 'Your expressions, your sharp humor, your genuine sincerity, and the quiet ways you show you care. May Allah preserve your noble character.',
    },
    {
      id: 3,
      numeral: 'III',
      statement: 'For the memories still waiting to happen.',
      reflection: 'The conversations, the milestones, and every laugh ahead. May Allah fill the years before you with barakah and ease.',
    },
    {
      id: 4,
      numeral: 'IV',
      statement: 'For being someone worth celebrating.',
      reflection: 'Not just on your 20th birthday, but every single day. Having you in life is a genuine blessing to thank Allah for.',
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [tempStatement, setTempStatement] = useState('');
  const [tempReflection, setTempReflection] = useState('');

  const startEdit = (item: AppreciationItem) => {
    setEditingId(item.id);
    setTempStatement(item.statement);
    setTempReflection(item.reflection);
    birthdayAudio.playSoftTick();
  };

  const saveEdit = (id: number) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, statement: tempStatement, reflection: tempReflection } : it))
    );
    setEditingId(null);
    birthdayAudio.playChime(784, 1.2, 0.18);
  };

  return (
    <section
      id="appreciation"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#21102e] text-[#FFFAF4] overflow-hidden border-t border-white/[0.04]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Asymmetrical 2-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Curatorial Essay & Headline (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D8BC86]/80 mb-3 font-medium">
              03 · Honoring Character
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFAF4] tracking-tight leading-tight mb-5">
              A Little <br />
              <span className="italic font-serif gold-gradient-text">Appreciation</span>
            </h2>
            <p className="text-sm sm:text-base text-[#E8DDF5]/80 font-light leading-relaxed mb-8">
              Beyond the candles and the milestone number, this is about celebrating the person
              you are to everyone lucky enough to know you.
            </p>

            {/* Sincere Islamic Du'ā Pull-Quote */}
            <div className="p-6 rounded-2xl bg-[#180a22]/80 border border-white/[0.08] relative">
              <span className="text-[11px] uppercase tracking-widest text-[#D7A1AA] font-medium block mb-2">
                A Du'ā of Gratitude
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#F0E3CB] leading-relaxed">
                “May Allah fill your life with barakah and surround you with His rahmah today and always.”
              </p>
            </div>
          </div>

          {/* Right Column: Clean Hairline Editorial List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {items.map((item) => {
              const isEditing = editingId === item.id;

              return (
                <div
                  key={item.id}
                  className="py-7 first:pt-0 last:pb-0 group transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-serif text-[#D8BC86]/70 tracking-widest font-normal">
                        {item.numeral}
                      </span>
                      {isEditing ? (
                        <input
                          type="text"
                          value={tempStatement}
                          onChange={(e) => setTempStatement(e.target.value)}
                          className="bg-[#180a22] border border-[#D8BC86]/50 rounded px-2 py-1 text-base font-serif text-[#FFFAF4] focus:outline-none"
                        />
                      ) : (
                        <h3 className="text-xl sm:text-2xl font-serif text-[#FFFAF4] group-hover:text-[#F0E3CB] transition-colors leading-snug">
                          {item.statement}
                        </h3>
                      )}
                    </div>

                    <button
                      onClick={() => (isEditing ? saveEdit(item.id) : startEdit(item))}
                      aria-label="Customize appreciation note"
                      className="text-[#806782] hover:text-[#D8BC86] transition-colors p-1 cursor-pointer shrink-0"
                      title={isEditing ? 'Save note' : 'Personalize note'}
                    >
                      {isEditing ? <Check className="w-4 h-4 text-[#D8BC86]" /> : <Edit2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {isEditing ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <textarea
                        value={tempReflection}
                        onChange={(e) => setTempReflection(e.target.value)}
                        rows={2}
                        className="w-full bg-[#180a22] border border-white/[0.15] rounded p-2 text-xs text-[#E8DDF5] focus:outline-none"
                      />
                      <button
                        onClick={() => saveEdit(item.id)}
                        className="self-end px-3 py-1 rounded bg-[#D8BC86] text-[#180a22] text-xs font-semibold cursor-pointer"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-[#E8DDF5]/75 font-light leading-relaxed pl-6">
                      {item.reflection}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
