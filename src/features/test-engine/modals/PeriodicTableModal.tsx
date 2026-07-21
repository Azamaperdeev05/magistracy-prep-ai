import React, { useMemo, useState } from 'react';
import { X, Atom, Search, Grid, LayoutGrid } from 'lucide-react';

interface PeriodicTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ElementData {
  number: number;
  symbol: string;
  nameKk: string;
  nameRu: string;
  mass: number;
  category: 'alkali' | 'alkaline' | 'transition' | 'post-transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble' | 'lanthanide' | 'actinide';
  period: number;
  group: number;
}

// Full 118 Elements with Kazakh & Russian names
const elements: ElementData[] = [
  // Period 1
  { number: 1, symbol: 'H', nameKk: 'Сутегі', nameRu: 'Водород', mass: 1.008, category: 'nonmetal', period: 1, group: 1 },
  { number: 2, symbol: 'He', nameKk: 'Гелий', nameRu: 'Гелий', mass: 4.003, category: 'noble', period: 1, group: 18 },

  // Period 2
  { number: 3, symbol: 'Li', nameKk: 'Литий', nameRu: 'Литий', mass: 6.94, category: 'alkali', period: 2, group: 1 },
  { number: 4, symbol: 'Be', nameKk: 'Бериллий', nameRu: 'Бериллий', mass: 9.012, category: 'alkaline', period: 2, group: 2 },
  { number: 5, symbol: 'B', nameKk: 'Бор', nameRu: 'Бор', mass: 10.81, category: 'metalloid', period: 2, group: 13 },
  { number: 6, symbol: 'C', nameKk: 'Көміртек', nameRu: 'Углерод', mass: 12.01, category: 'nonmetal', period: 2, group: 14 },
  { number: 7, symbol: 'N', nameKk: 'Азот', nameRu: 'Азот', mass: 14.01, category: 'nonmetal', period: 2, group: 15 },
  { number: 8, symbol: 'O', nameKk: 'Оттегі', nameRu: 'Кислород', mass: 16.00, category: 'nonmetal', period: 2, group: 16 },
  { number: 9, symbol: 'F', nameKk: 'Фтор', nameRu: 'Фтор', mass: 19.00, category: 'halogen', period: 2, group: 17 },
  { number: 10, symbol: 'Ne', nameKk: 'Неон', nameRu: 'Неон', mass: 20.18, category: 'noble', period: 2, group: 18 },

  // Period 3
  { number: 11, symbol: 'Na', nameKk: 'Натрий', nameRu: 'Натрий', mass: 22.99, category: 'alkali', period: 3, group: 1 },
  { number: 12, symbol: 'Mg', nameKk: 'Магний', nameRu: 'Магний', mass: 24.31, category: 'alkaline', period: 3, group: 2 },
  { number: 13, symbol: 'Al', nameKk: 'Алюминий', nameRu: 'Алюминий', mass: 26.98, category: 'post-transition', period: 3, group: 13 },
  { number: 14, symbol: 'Si', nameKk: 'Кремний', nameRu: 'Кремний', mass: 28.09, category: 'metalloid', period: 3, group: 14 },
  { number: 15, symbol: 'P', nameKk: 'Фосфор', nameRu: 'Фосфор', mass: 30.97, category: 'nonmetal', period: 3, group: 15 },
  { number: 16, symbol: 'S', nameKk: 'Күкірт', nameRu: 'Сера', mass: 32.07, category: 'nonmetal', period: 3, group: 16 },
  { number: 17, symbol: 'Cl', nameKk: 'Хлор', nameRu: 'Хлор', mass: 35.45, category: 'halogen', period: 3, group: 17 },
  { number: 18, symbol: 'Ar', nameKk: 'Аргон', nameRu: 'Аргон', mass: 39.95, category: 'noble', period: 3, group: 18 },

  // Period 4
  { number: 19, symbol: 'K', nameKk: 'Калий', nameRu: 'Калий', mass: 39.10, category: 'alkali', period: 4, group: 1 },
  { number: 20, symbol: 'Ca', nameKk: 'Кальций', nameRu: 'Кальций', mass: 40.08, category: 'alkaline', period: 4, group: 2 },
  { number: 21, symbol: 'Sc', nameKk: 'Скандий', nameRu: 'Скандий', mass: 44.96, category: 'transition', period: 4, group: 3 },
  { number: 22, symbol: 'Ti', nameKk: 'Титан', nameRu: 'Титан', mass: 47.87, category: 'transition', period: 4, group: 4 },
  { number: 23, symbol: 'V', nameKk: 'Ванадий', nameRu: 'Ванадий', mass: 50.94, category: 'transition', period: 4, group: 5 },
  { number: 24, symbol: 'Cr', nameKk: 'Хром', nameRu: 'Хром', mass: 52.00, category: 'transition', period: 4, group: 6 },
  { number: 25, symbol: 'Mn', nameKk: 'Марганец', nameRu: 'Марганец', mass: 54.94, category: 'transition', period: 4, group: 7 },
  { number: 26, symbol: 'Fe', nameKk: 'Темір', nameRu: 'Железо', mass: 55.85, category: 'transition', period: 4, group: 8 },
  { number: 27, symbol: 'Co', nameKk: 'Кобальт', nameRu: 'Кобальт', mass: 58.93, category: 'transition', period: 4, group: 9 },
  { number: 28, symbol: 'Ni', nameKk: 'Никель', nameRu: 'Никель', mass: 58.69, category: 'transition', period: 4, group: 10 },
  { number: 29, symbol: 'Cu', nameKk: 'Мыс', nameRu: 'Медь', mass: 63.55, category: 'transition', period: 4, group: 11 },
  { number: 30, symbol: 'Zn', nameKk: 'Мырыш', nameRu: 'Цинк', mass: 65.38, category: 'transition', period: 4, group: 12 },
  { number: 31, symbol: 'Ga', nameKk: 'Галлий', nameRu: 'Галлий', mass: 69.72, category: 'post-transition', period: 4, group: 13 },
  { number: 32, symbol: 'Ge', nameKk: 'Германий', nameRu: 'Германий', mass: 72.63, category: 'metalloid', period: 4, group: 14 },
  { number: 33, symbol: 'As', nameKk: 'Мышьяк', nameRu: 'Мышьяк', mass: 74.92, category: 'metalloid', period: 4, group: 15 },
  { number: 34, symbol: 'Se', nameKk: 'Селен', nameRu: 'Селен', mass: 78.97, category: 'nonmetal', period: 4, group: 16 },
  { number: 35, symbol: 'Br', nameKk: 'Бром', nameRu: 'Бром', mass: 79.90, category: 'halogen', period: 4, group: 17 },
  { number: 36, symbol: 'Kr', nameKk: 'Криптон', nameRu: 'Криптон', mass: 83.80, category: 'noble', period: 4, group: 18 },

  // Period 5
  { number: 37, symbol: 'Rb', nameKk: 'Рубидий', nameRu: 'Рубидий', mass: 85.47, category: 'alkali', period: 5, group: 1 },
  { number: 38, symbol: 'Sr', nameKk: 'Стронций', nameRu: 'Стронций', mass: 87.62, category: 'alkaline', period: 5, group: 2 },
  { number: 39, symbol: 'Y', nameKk: 'Иттрий', nameRu: 'Иттрий', mass: 88.91, category: 'transition', period: 5, group: 3 },
  { number: 40, symbol: 'Zr', nameKk: 'Цирконий', nameRu: 'Цирконий', mass: 91.22, category: 'transition', period: 5, group: 4 },
  { number: 41, symbol: 'Nb', nameKk: 'Ниобий', nameRu: 'Ниобий', mass: 92.91, category: 'transition', period: 5, group: 5 },
  { number: 42, symbol: 'Mo', nameKk: 'Молибден', nameRu: 'Молибден', mass: 95.95, category: 'transition', period: 5, group: 6 },
  { number: 43, symbol: 'Tc', nameKk: 'Технеций', nameRu: 'Технеций', mass: 98.00, category: 'transition', period: 5, group: 7 },
  { number: 44, symbol: 'Ru', nameKk: 'Рутений', nameRu: 'Рутений', mass: 101.07, category: 'transition', period: 5, group: 8 },
  { number: 45, symbol: 'Rh', nameKk: 'Родий', nameRu: 'Родий', mass: 102.91, category: 'transition', period: 5, group: 9 },
  { number: 46, symbol: 'Pd', nameKk: 'Палладий', nameRu: 'Палладий', mass: 106.42, category: 'transition', period: 5, group: 10 },
  { number: 47, symbol: 'Ag', nameKk: 'Күміс', nameRu: 'Серебро', mass: 107.87, category: 'transition', period: 5, group: 11 },
  { number: 48, symbol: 'Cd', nameKk: 'Кадмий', nameRu: 'Кадмий', mass: 112.41, category: 'transition', period: 5, group: 12 },
  { number: 49, symbol: 'In', nameKk: 'Индий', nameRu: 'Индий', mass: 114.82, category: 'post-transition', period: 5, group: 13 },
  { number: 50, symbol: 'Sn', nameKk: 'Қалайы', nameRu: 'Олово', mass: 118.71, category: 'post-transition', period: 5, group: 14 },
  { number: 51, symbol: 'Sb', nameKk: 'Сурьма', nameRu: 'Сурьма', mass: 121.76, category: 'metalloid', period: 5, group: 15 },
  { number: 52, symbol: 'Te', nameKk: 'Теллур', nameRu: 'Теллур', mass: 127.60, category: 'metalloid', period: 5, group: 16 },
  { number: 53, symbol: 'I', nameKk: 'Йод', nameRu: 'Иод', mass: 126.90, category: 'halogen', period: 5, group: 17 },
  { number: 54, symbol: 'Xe', nameKk: 'Ксенон', nameRu: 'Ксенон', mass: 131.29, category: 'noble', period: 5, group: 18 },

  // Period 6
  { number: 55, symbol: 'Cs', nameKk: 'Цезий', nameRu: 'Цезий', mass: 132.91, category: 'alkali', period: 6, group: 1 },
  { number: 56, symbol: 'Ba', nameKk: 'Барий', nameRu: 'Барий', mass: 137.33, category: 'alkaline', period: 6, group: 2 },
  { number: 57, symbol: 'La', nameKk: 'Лантан', nameRu: 'Лантан', mass: 138.91, category: 'lanthanide', period: 6, group: 3 },
  { number: 72, symbol: 'Hf', nameKk: 'Гафний', nameRu: 'Гафний', mass: 178.49, category: 'transition', period: 6, group: 4 },
  { number: 73, symbol: 'Ta', nameKk: 'Тантал', nameRu: 'Тантал', mass: 180.95, category: 'transition', period: 6, group: 5 },
  { number: 74, symbol: 'W', nameKk: 'Вольфрам', nameRu: 'Вольфрам', mass: 183.84, category: 'transition', period: 6, group: 6 },
  { number: 75, symbol: 'Re', nameKk: 'Рений', nameRu: 'Рений', mass: 186.21, category: 'transition', period: 6, group: 7 },
  { number: 76, symbol: 'Os', nameKk: 'Осмий', nameRu: 'Осмий', mass: 190.23, category: 'transition', period: 6, group: 8 },
  { number: 77, symbol: 'Ir', nameKk: 'Иридий', nameRu: 'Иридий', mass: 192.22, category: 'transition', period: 6, group: 9 },
  { number: 78, symbol: 'Pt', nameKk: 'Платина', nameRu: 'Платина', mass: 195.08, category: 'transition', period: 6, group: 10 },
  { number: 79, symbol: 'Au', nameKk: 'Алтын', nameRu: 'Золото', mass: 196.97, category: 'transition', period: 6, group: 11 },
  { number: 80, symbol: 'Hg', nameKk: 'Сынап', nameRu: 'Ртуть', mass: 200.59, category: 'transition', period: 6, group: 12 },
  { number: 81, symbol: 'Tl', nameKk: 'Таллий', nameRu: 'Таллий', mass: 204.38, category: 'post-transition', period: 6, group: 13 },
  { number: 82, symbol: 'Pb', nameKk: 'Қорғасын', nameRu: 'Свинец', mass: 207.20, category: 'post-transition', period: 6, group: 14 },
  { number: 83, symbol: 'Bi', nameKk: 'Висмут', nameRu: 'Висмут', mass: 208.98, category: 'post-transition', period: 6, group: 15 },
  { number: 84, symbol: 'Po', nameKk: 'Полоний', nameRu: 'Полоний', mass: 209.00, category: 'post-transition', period: 6, group: 16 },
  { number: 85, symbol: 'At', nameKk: 'Астат', nameRu: 'Астат', mass: 210.00, category: 'halogen', period: 6, group: 17 },
  { number: 86, symbol: 'Rn', nameKk: 'Радон', nameRu: 'Радон', mass: 222.00, category: 'noble', period: 6, group: 18 },

  // Lanthanides (58-71)
  { number: 58, symbol: 'Ce', nameKk: 'Церий', nameRu: 'Церий', mass: 140.12, category: 'lanthanide', period: 8, group: 4 },
  { number: 59, symbol: 'Pr', nameKk: 'Празеодим', nameRu: 'Празеодим', mass: 140.91, category: 'lanthanide', period: 8, group: 5 },
  { number: 60, symbol: 'Nd', nameKk: 'Неодим', nameRu: 'Неодим', mass: 144.24, category: 'lanthanide', period: 8, group: 6 },
  { number: 61, symbol: 'Pm', nameKk: 'Прометий', nameRu: 'Прометий', mass: 145.00, category: 'lanthanide', period: 8, group: 7 },
  { number: 62, symbol: 'Sm', nameKk: 'Самарий', nameRu: 'Самарий', mass: 150.36, category: 'lanthanide', period: 8, group: 8 },
  { number: 63, symbol: 'Eu', nameKk: 'Европий', nameRu: 'Европий', mass: 151.96, category: 'lanthanide', period: 8, group: 9 },
  { number: 64, symbol: 'Gd', nameKk: 'Гадолиний', nameRu: 'Гадолиний', mass: 157.25, category: 'lanthanide', period: 8, group: 10 },
  { number: 65, symbol: 'Tb', nameKk: 'Тербий', nameRu: 'Тербий', mass: 158.93, category: 'lanthanide', period: 8, group: 11 },
  { number: 66, symbol: 'Dy', nameKk: 'Диспрозий', nameRu: 'Диспрозий', mass: 162.50, category: 'lanthanide', period: 8, group: 12 },
  { number: 67, symbol: 'Ho', nameKk: 'Гольмий', nameRu: 'Гольмий', mass: 164.93, category: 'lanthanide', period: 8, group: 13 },
  { number: 68, symbol: 'Er', nameKk: 'Эрбий', nameRu: 'Эрбий', mass: 167.26, category: 'lanthanide', period: 8, group: 14 },
  { number: 69, symbol: 'Tm', nameKk: 'Тулий', nameRu: 'Тулий', mass: 168.93, category: 'lanthanide', period: 8, group: 15 },
  { number: 70, symbol: 'Yb', nameKk: 'Иттербий', nameRu: 'Иттербий', mass: 173.05, category: 'lanthanide', period: 8, group: 16 },
  { number: 71, symbol: 'Lu', nameKk: 'Лютеций', nameRu: 'Лютеций', mass: 174.97, category: 'lanthanide', period: 8, group: 17 },

  // Period 7
  { number: 87, symbol: 'Fr', nameKk: 'Франций', nameRu: 'Франций', mass: 223.00, category: 'alkali', period: 7, group: 1 },
  { number: 88, symbol: 'Ra', nameKk: 'Радий', nameRu: 'Радий', mass: 226.00, category: 'alkaline', period: 7, group: 2 },
  { number: 89, symbol: 'Ac', nameKk: 'Актиний', nameRu: 'Актиний', mass: 227.00, category: 'actinide', period: 7, group: 3 },
  { number: 104, symbol: 'Rf', nameKk: 'Резерфордий', nameRu: 'Резерфордий', mass: 267.00, category: 'transition', period: 7, group: 4 },
  { number: 105, symbol: 'Db', nameKk: 'Дубний', nameRu: 'Дубний', mass: 268.00, category: 'transition', period: 7, group: 5 },
  { number: 106, symbol: 'Sg', nameKk: 'Сиборгий', nameRu: 'Сиборгий', mass: 269.00, category: 'transition', period: 7, group: 6 },
  { number: 107, symbol: 'Bh', nameKk: 'Борий', nameRu: 'Борий', mass: 270.00, category: 'transition', period: 7, group: 7 },
  { number: 108, symbol: 'Hs', nameKk: 'Хассий', nameRu: 'Хассий', mass: 277.00, category: 'transition', period: 7, group: 8 },
  { number: 109, symbol: 'Mt', nameKk: 'Майтнерий', nameRu: 'Майтнерий', mass: 278.00, category: 'transition', period: 7, group: 9 },
  { number: 110, symbol: 'Ds', nameKk: 'Дармштадтий', nameRu: 'Дармштадтий', mass: 281.00, category: 'transition', period: 7, group: 10 },
  { number: 111, symbol: 'Rg', nameKk: 'Рентгений', nameRu: 'Рентгений', mass: 282.00, category: 'transition', period: 7, group: 11 },
  { number: 112, symbol: 'Cn', nameKk: 'Коперниций', nameRu: 'Коперниций', mass: 285.00, category: 'transition', period: 7, group: 12 },
  { number: 113, symbol: 'Nh', nameKk: 'Нихоний', nameRu: 'Нихоний', mass: 286.00, category: 'post-transition', period: 7, group: 13 },
  { number: 114, symbol: 'Fl', nameKk: 'Флеровий', nameRu: 'Флеровий', mass: 289.00, category: 'post-transition', period: 7, group: 14 },
  { number: 115, symbol: 'Mc', nameKk: 'Московий', nameRu: 'Московий', mass: 290.00, category: 'post-transition', period: 7, group: 15 },
  { number: 116, symbol: 'Lv', nameKk: 'Ливерморий', nameRu: 'Ливерморий', mass: 293.00, category: 'post-transition', period: 7, group: 16 },
  { number: 117, symbol: 'Ts', nameKk: 'Теннессин', nameRu: 'Теннессин', mass: 294.00, category: 'halogen', period: 7, group: 17 },
  { number: 118, symbol: 'Og', nameKk: 'Оганесон', nameRu: 'Оганесон', mass: 294.00, category: 'noble', period: 7, group: 18 },

  // Actinides (90-103)
  { number: 90, symbol: 'Th', nameKk: 'Торий', nameRu: 'Торий', mass: 232.04, category: 'actinide', period: 9, group: 4 },
  { number: 91, symbol: 'Pa', nameKk: 'Протактиний', nameRu: 'Протактиний', mass: 231.04, category: 'actinide', period: 9, group: 5 },
  { number: 92, symbol: 'U', nameKk: 'Уран', nameRu: 'Уран', mass: 238.03, category: 'actinide', period: 9, group: 6 },
  { number: 93, symbol: 'Np', nameKk: 'Нептуний', nameRu: 'Нептуний', mass: 237.00, category: 'actinide', period: 9, group: 7 },
  { number: 94, symbol: 'Pu', nameKk: 'Плутоний', nameRu: 'Плутоний', mass: 244.00, category: 'actinide', period: 9, group: 8 },
  { number: 95, symbol: 'Am', nameKk: 'Америций', nameRu: 'Америций', mass: 243.00, category: 'actinide', period: 9, group: 9 },
  { number: 96, symbol: 'Cm', nameKk: 'Кюрий', nameRu: 'Кюрий', mass: 247.00, category: 'actinide', period: 9, group: 10 },
  { number: 97, symbol: 'Bk', nameKk: 'Берклий', nameRu: 'Берклий', mass: 247.00, category: 'actinide', period: 9, group: 11 },
  { number: 98, symbol: 'Cf', nameKk: 'Калифорний', nameRu: 'Калифорний', mass: 251.00, category: 'actinide', period: 9, group: 12 },
  { number: 99, symbol: 'Es', nameKk: 'Эйнштейний', nameRu: 'Эйнштейний', mass: 252.00, category: 'actinide', period: 9, group: 13 },
  { number: 100, symbol: 'Fm', nameKk: 'Фермий', nameRu: 'Фермий', mass: 257.00, category: 'actinide', period: 9, group: 14 },
  { number: 101, symbol: 'Md', nameKk: 'Менделевий', nameRu: 'Менделевий', mass: 258.00, category: 'actinide', period: 9, group: 15 },
  { number: 102, symbol: 'No', nameKk: 'Нобелий', nameRu: 'Нобелий', mass: 259.00, category: 'actinide', period: 9, group: 16 },
  { number: 103, symbol: 'Lr', nameKk: 'Лоуренсий', nameRu: 'Лоуренсий', mass: 266.00, category: 'actinide', period: 9, group: 17 },
];

const categoryMeta: Record<string, { labelKk: string; labelRu: string; badgeBg: string; cellBg: string; textColor: string }> = {
  'alkali': {
    labelKk: 'Сілтілік',
    labelRu: 'Щелочные',
    badgeBg: 'bg-rose-100 text-rose-700',
    cellBg: 'bg-rose-100/80 hover:bg-rose-200 text-rose-900 border-rose-200',
    textColor: 'text-rose-700',
  },
  'alkaline': {
    labelKk: 'Сілтілік-жер',
    labelRu: 'Щелочнозем.',
    badgeBg: 'bg-orange-100 text-orange-700',
    cellBg: 'bg-orange-100/80 hover:bg-orange-200 text-orange-900 border-orange-200',
    textColor: 'text-orange-700',
  },
  'transition': {
    labelKk: 'Өтпелі',
    labelRu: 'Переходные',
    badgeBg: 'bg-amber-100 text-amber-800',
    cellBg: 'bg-amber-100/80 hover:bg-amber-200 text-amber-900 border-amber-200',
    textColor: 'text-amber-700',
  },
  'lanthanide': {
    labelKk: 'Лантаноид',
    labelRu: 'Лантаноиды',
    badgeBg: 'bg-pink-100 text-pink-700',
    cellBg: 'bg-pink-100/80 hover:bg-pink-200 text-pink-900 border-pink-200',
    textColor: 'text-pink-700',
  },
  'actinide': {
    labelKk: 'Актиноид',
    labelRu: 'Актиноиды',
    badgeBg: 'bg-purple-100 text-purple-700',
    cellBg: 'bg-purple-100/80 hover:bg-purple-200 text-purple-900 border-purple-200',
    textColor: 'text-purple-700',
  },
  'post-transition': {
    labelKk: 'Пост-өтпелі',
    labelRu: 'Постпереходные',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    cellBg: 'bg-emerald-100/80 hover:bg-emerald-200 text-emerald-900 border-emerald-200',
    textColor: 'text-emerald-700',
  },
  'metalloid': {
    labelKk: 'Металлоид',
    labelRu: 'Полуметаллы',
    badgeBg: 'bg-teal-100 text-teal-700',
    cellBg: 'bg-teal-100/80 hover:bg-teal-200 text-teal-900 border-teal-200',
    textColor: 'text-teal-700',
  },
  'nonmetal': {
    labelKk: 'Бейметалл',
    labelRu: 'Неметаллы',
    badgeBg: 'bg-green-100 text-green-700',
    cellBg: 'bg-green-100/80 hover:bg-green-200 text-green-900 border-green-200',
    textColor: 'text-green-700',
  },
  'halogen': {
    labelKk: 'Галоген',
    labelRu: 'Галогены',
    badgeBg: 'bg-sky-100 text-sky-700',
    cellBg: 'bg-sky-100/80 hover:bg-sky-200 text-sky-900 border-sky-200',
    textColor: 'text-sky-700',
  },
  'noble': {
    labelKk: 'Инертті газ',
    labelRu: 'Инертные газы',
    badgeBg: 'bg-indigo-100 text-indigo-700',
    cellBg: 'bg-indigo-100/80 hover:bg-indigo-200 text-indigo-900 border-indigo-200',
    textColor: 'text-indigo-700',
  },
};

const groupsHeader = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII',
  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
];

const PeriodicTableModal: React.FC<PeriodicTableModalProps> = ({ isOpen, onClose }) => {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(elements[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [lang, setLang] = useState<'kk' | 'ru'>('kk');

  const filteredElements = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return elements;

    return elements.filter(el =>
      el.symbol.toLowerCase().includes(normalizedSearch) ||
      el.nameKk.toLowerCase().includes(normalizedSearch) ||
      el.nameRu.toLowerCase().includes(normalizedSearch) ||
      el.number.toString().includes(normalizedSearch)
    );
  }, [searchTerm]);

  // Fast matrix map: period (1..9) x group (1..18)
  const elementMap = useMemo(() => {
    const map: Record<string, ElementData> = {};
    elements.forEach(el => {
      map[`${el.period}-${el.group}`] = el;
    });
    return map;
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[100] p-0 sm:p-4" onClick={onClose}>
      <div 
        className="bg-white w-full h-full sm:h-auto sm:max-h-[92vh] sm:w-[98%] sm:max-w-7xl sm:rounded-2xl rounded-none shadow-2xl overflow-hidden animate-fade-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#2c3240] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                {lang === 'kk' ? 'Менделеев кестесі' : 'Таблица Менделеева'}
              </h2>
              <span className="text-[10px] text-slate-400 sm:hidden">
                118 {lang === 'kk' ? 'Элемент' : 'Элементов'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs font-bold">
              <button
                onClick={() => setLang('kk')}
                className={`px-2.5 py-1 rounded transition ${
                  lang === 'kk' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                ҚАЗ
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-2.5 py-1 rounded transition ${
                  lang === 'ru' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                РУС
              </button>
            </div>

            {/* View Mode Switcher for Mobile */}
            <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('table')}
                className={`px-2 py-1 rounded flex items-center gap-1 font-bold ${
                  viewMode === 'table' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
                title={lang === 'kk' ? 'Кесте режимі' : 'Режим таблицы'}
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{lang === 'kk' ? 'Кесте' : 'Таблица'}</span>
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2 py-1 rounded flex items-center gap-1 font-bold ${
                  viewMode === 'cards' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
                title={lang === 'kk' ? 'Плитка режимі' : 'Режим плитки'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{lang === 'kk' ? 'Плитка' : 'Плитка'}</span>
              </button>
            </div>

            <button onClick={onClose} className="hover:bg-white/20 p-1.5 rounded-lg transition text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Legend & Search Subheader */}
        <div className="px-4 sm:px-6 py-2.5 bg-gray-50 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs shrink-0">
          {/* Search Input */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input
              type="text"
              placeholder={lang === 'kk' ? 'Элемент іздеу (H, Na, 11)...' : 'Поиск элемента (H, Na, 11)...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg pl-8 pr-3 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Category Badges (Scrollable on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-[10px]">
            {Object.entries(categoryMeta).map(([key, meta]) => (
              <div key={key} className={`px-2 py-0.5 rounded font-bold shrink-0 ${meta.badgeBg}`}>
                {lang === 'kk' ? meta.labelKk : meta.labelRu}
              </div>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="p-2 sm:p-4 overflow-auto touch-pan-x flex-1 scrollbar-thin">
          {viewMode === 'cards' || searchTerm.trim() ? (
            /* Search / Cards Grid View */
            <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
              {filteredElements.map(el => {
                const meta = categoryMeta[el.category] || categoryMeta['nonmetal'];
                const isSelected = selectedElement?.number === el.number;
                const elName = lang === 'kk' ? el.nameKk : el.nameRu;

                return (
                  <button
                    key={el.number}
                    onClick={() => setSelectedElement(el)}
                    className={`p-1.5 rounded-lg border text-center transition-all ${meta.cellBg} ${
                      isSelected ? 'ring-2 ring-slate-900 font-bold scale-105 shadow-md' : ''
                    }`}
                  >
                    <div className="text-[9px] font-bold text-slate-500">{el.number}</div>
                    <div className="text-base sm:text-xl font-black text-slate-900 leading-tight">{el.symbol}</div>
                    <div className="text-[9px] font-bold truncate text-slate-800">{elName}</div>
                    <div className="text-[8px] text-slate-500 font-semibold">{el.mass}</div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Real 2D HTML Table */
            <table className="w-full border-collapse text-xs select-none min-w-[950px] sm:min-w-[1100px]">
              <thead>
                <tr>
                  <th className="sticky left-0 top-0 z-30 bg-[#2c3240] text-white p-1.5 sm:p-2.5 border border-slate-700 min-w-[48px] sm:min-w-[70px] text-center font-bold text-[10px] sm:text-xs">
                    {lang === 'kk' ? 'Пер / Топ' : 'Пер / Гр'}
                  </th>
                  {groupsHeader.map((gName, gIdx) => (
                    <th key={gIdx} className="sticky top-0 z-20 bg-[#2c3240] text-white p-1 sm:p-2 border border-slate-700 min-w-[46px] sm:min-w-[58px] text-center font-extrabold text-[10px] sm:text-[11px]">
                      {gName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Periods 1 to 7 */}
                {[1, 2, 3, 4, 5, 6, 7].map(periodNum => (
                  <tr key={periodNum}>
                    {/* Period Header Column */}
                    <td className="sticky left-0 z-20 bg-[#2c3240] text-white p-1 sm:p-2 border border-slate-700 font-black text-center text-xs">
                      {periodNum}
                    </td>

                    {/* 18 Group Columns */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(groupNum => {
                      const el = elementMap[`${periodNum}-${groupNum}`];
                      if (!el) {
                        return <td key={groupNum} className="border border-slate-200 bg-slate-50/50 p-1 min-w-[46px] sm:min-w-[58px]" />;
                      }

                      const meta = categoryMeta[el.category] || categoryMeta['nonmetal'];
                      const isSelected = selectedElement?.number === el.number;
                      const elName = lang === 'kk' ? el.nameKk : el.nameRu;

                      return (
                        <td
                          key={groupNum}
                          onClick={() => setSelectedElement(el)}
                          className={`border border-slate-300 p-0.5 sm:p-1 text-center cursor-pointer transition-all hover:scale-[1.06] hover:z-10 relative min-w-[46px] sm:min-w-[58px] ${meta.cellBg} ${
                            isSelected ? 'ring-2 ring-slate-900 font-bold scale-105 z-10 shadow-md' : ''
                          }`}
                        >
                          <div className="flex justify-between items-start text-[8px] sm:text-[9px] font-bold text-slate-500 leading-none">
                            <span>{el.number}</span>
                          </div>
                          <div className="text-sm sm:text-lg font-black text-slate-900 leading-none my-0.5">
                            {el.symbol}
                          </div>
                          <div className="text-[8px] sm:text-[9px] font-bold truncate text-slate-800 leading-tight">
                            {elName}
                          </div>
                          <div className="hidden sm:block text-[8px] font-semibold text-slate-600 leading-none">
                            {el.mass}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Spacer Row */}
                <tr>
                  <td colSpan={19} className="h-3 sm:h-4 bg-white border-none" />
                </tr>

                {/* Lanthanides Row (Period 8) */}
                <tr>
                  <td className="sticky left-0 z-20 bg-[#2c3240] text-pink-300 p-1 sm:p-2 border border-slate-700 font-black text-center text-[9px] sm:text-[10px]">
                    {lang === 'kk' ? 'Лант.' : 'Лант.'}
                  </td>
                  <td colSpan={3} className="bg-slate-100 border border-slate-200 text-center text-[9px] sm:text-[10px] font-bold text-slate-500">
                    58-71
                  </td>
                  {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(groupNum => {
                    const el = elementMap[`8-${groupNum}`];
                    if (!el) return <td key={groupNum} className="border border-slate-200 bg-slate-50 p-1" />;

                    const meta = categoryMeta['lanthanide'];
                    const isSelected = selectedElement?.number === el.number;
                    const elName = lang === 'kk' ? el.nameKk : el.nameRu;

                    return (
                      <td
                        key={groupNum}
                        onClick={() => setSelectedElement(el)}
                        className={`border border-slate-300 p-0.5 sm:p-1 text-center cursor-pointer transition-all hover:scale-[1.06] hover:z-10 relative min-w-[46px] sm:min-w-[58px] ${meta.cellBg} ${
                          isSelected ? 'ring-2 ring-slate-900 font-bold scale-105 z-10 shadow-md' : ''
                        }`}
                      >
                        <div className="text-[8px] sm:text-[9px] font-bold text-slate-500 leading-none">{el.number}</div>
                        <div className="text-sm sm:text-base font-black text-slate-900 leading-none my-0.5">{el.symbol}</div>
                        <div className="text-[8px] sm:text-[9px] font-bold truncate text-slate-800 leading-tight">{elName}</div>
                        <div className="hidden sm:block text-[8px] font-semibold text-slate-600 leading-none">{el.mass}</div>
                      </td>
                    );
                  })}
                  <td className="bg-slate-50 border border-slate-200" />
                </tr>

                {/* Actinides Row (Period 9) */}
                <tr>
                  <td className="sticky left-0 z-20 bg-[#2c3240] text-purple-300 p-1 sm:p-2 border border-slate-700 font-black text-center text-[9px] sm:text-[10px]">
                    {lang === 'kk' ? 'Акт.' : 'Акт.'}
                  </td>
                  <td colSpan={3} className="bg-slate-100 border border-slate-200 text-center text-[9px] sm:text-[10px] font-bold text-slate-500">
                    90-103
                  </td>
                  {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(groupNum => {
                    const el = elementMap[`9-${groupNum}`];
                    if (!el) return <td key={groupNum} className="border border-slate-200 bg-slate-50 p-1" />;

                    const meta = categoryMeta['actinide'];
                    const isSelected = selectedElement?.number === el.number;
                    const elName = lang === 'kk' ? el.nameKk : el.nameRu;

                    return (
                      <td
                        key={groupNum}
                        onClick={() => setSelectedElement(el)}
                        className={`border border-slate-300 p-0.5 sm:p-1 text-center cursor-pointer transition-all hover:scale-[1.06] hover:z-10 relative min-w-[46px] sm:min-w-[58px] ${meta.cellBg} ${
                          isSelected ? 'ring-2 ring-slate-900 font-bold scale-105 z-10 shadow-md' : ''
                        }`}
                      >
                        <div className="text-[8px] sm:text-[9px] font-bold text-slate-500 leading-none">{el.number}</div>
                        <div className="text-sm sm:text-base font-black text-slate-900 leading-none my-0.5">{el.symbol}</div>
                        <div className="text-[8px] sm:text-[9px] font-bold truncate text-slate-800 leading-tight">{elName}</div>
                        <div className="hidden sm:block text-[8px] font-semibold text-slate-600 leading-none">{el.mass}</div>
                      </td>
                    );
                  })}
                  <td className="bg-slate-50 border border-slate-200" />
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Selected Element Info Bottom Sheet */}
        {selectedElement && (
          <div className="bg-gray-50 border-t px-4 sm:px-6 py-2.5 sm:py-3 shrink-0 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg flex flex-col items-center justify-center font-bold text-white shadow shrink-0 ${
                categoryMeta[selectedElement.category]?.badgeBg.includes('rose') ? 'bg-rose-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('orange') ? 'bg-orange-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('amber') ? 'bg-amber-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('emerald') ? 'bg-emerald-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('teal') ? 'bg-teal-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('sky') ? 'bg-sky-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('violet') ? 'bg-violet-600' :
                categoryMeta[selectedElement.category]?.badgeBg.includes('pink') ? 'bg-pink-600' : 'bg-purple-600'
              }`}>
                <span className="text-[8px] sm:text-[10px] opacity-80">{selectedElement.number}</span>
                <span className="text-base sm:text-xl leading-none">{selectedElement.symbol}</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                    {lang === 'kk' ? selectedElement.nameKk : selectedElement.nameRu}
                  </h3>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold ${categoryMeta[selectedElement.category]?.badgeBg}`}>
                    {lang === 'kk' ? categoryMeta[selectedElement.category]?.labelKk : categoryMeta[selectedElement.category]?.labelRu}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-600 font-medium mt-0.5">
                  {lang === 'kk' ? 'Массасы' : 'Масса'}: <strong className="text-gray-900">{selectedElement.mass}</strong> | {lang === 'kk' ? 'Период' : 'Период'}: <strong className="text-gray-900">{selectedElement.period}</strong> | {lang === 'kk' ? 'Топ' : 'Группа'}: <strong className="text-gray-900">{selectedElement.group}</strong>
                </p>
              </div>
            </div>

            <button 
              onClick={onClose} 
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow transition shrink-0"
            >
              {lang === 'kk' ? 'Дайын' : 'Готово'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeriodicTableModal;
