import React, { FormEvent, useEffect, useState } from 'react';

import ThemeSwitch from './components/inputs/ThemeSwitch';
import BurgerIcon from './components/icons/BurgerIcon';
import RadioItem from './components/inputs/RadioItem';

import './App.css';

import LogoLight from './assets/logo-light.png';
import LogoDark from './assets/logo-dark.png';
import SandwichViewer from './components/sandwich-viewer/SandwichViewer';

const THEME_STORAGE_KEY = 'cys-theme';
const PART_ITEM_SELECTED_STORAGE_KEY = 'cys-part-item-selected';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const sandwichPart = [
    { name: 'bread', title: 'Pan' },
    { name: 'filling', title: 'Relleno' },
    { name: 'flag', title: 'Bandera' },
  ];
  const [partSelected, setPartSelected] = useState('bread');

  const sandwichPartItems: Record<string, string[]> = {
    bread: ['sliced', 'buns', 'baguette'],
    filling: ['beef', 'salmon', 'ham'],
    flag: ['#E36666', '#F1C76D', '#9BBB79', '#5F8E8D', '#427D9D'],
  };
  const [partItemSelected, setPartItemSelected] = useState<
    Record<string, string>
  >({
    bread: 'sliced',
    filling: 'beef',
    flag: '#E36666',
  });

  useEffect(() => {
    // Cargamos lo que hay guardado en el storage
    const theme = localStorage.getItem(THEME_STORAGE_KEY);
    setDarkMode(theme == 'dark');

    const strSelected = localStorage.getItem(PART_ITEM_SELECTED_STORAGE_KEY);
    if (!strSelected) return;
    setPartItemSelected(JSON.parse(strSelected));
  }, []);

  useEffect(() => {
    // Guardamos en local storage cada vez que cambie el valor
    localStorage.setItem(THEME_STORAGE_KEY, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    // Guardamos en local storage cada vez que cambie el valor
    localStorage.setItem(
      PART_ITEM_SELECTED_STORAGE_KEY,
      JSON.stringify(partItemSelected),
    );
  }, [partItemSelected]);

  function handleChangePart(ev: FormEvent<HTMLDivElement>) {
    const { value } = ev.target as HTMLInputElement;
    setPartSelected(value);
  }

  function handleChangePartItem(ev: FormEvent<HTMLDivElement>) {
    const { value } = ev.target as HTMLInputElement;

    setPartItemSelected({
      ...partItemSelected,
      [partSelected]: value,
    });
  }

  return (
    <div className={`h-screen w-full ${darkMode && 'dark'}`}>
      <div className='flex flex-col h-full w-full bg-neutral-100 dark:bg-[#101010] transition-colors duration-150'>
        {/*  App bar */}
        <div className='absolute inset-x-0 flex flex-row px-5 py-3 md:px-10 md:py-6 place-content-between'>
          {/* Logo */}
          <img
            className='object-contain max-h-8'
            src={darkMode ? LogoDark : LogoLight}
            alt='logo'
          />
          {/* Dark/Light Switch */}
          <div>
            <ThemeSwitch
              darkMode={darkMode}
              onChange={(ev) => setDarkMode(ev)}
            />
          </div>
        </div>

        {/* Body */}
        <div className='flex flex-col h-full w-full md:w-[30rem] mx-auto pt-10 md:pt-0 md:my-10 bg-gray-100 dark:bg-[#222222] md:rounded-lg md:border border-slate-300 overflow-hidden'>
          {/* Title */}
          <div className='shrink font-sans font-bold text-2xl text-neutral-600 text-center py-5 dark:text-white'>
            Personaliza tu sandwich
          </div>

          {/* Sandwich Viewer js */}
          <div className='grow w-full'>
            <SandwichViewer
              partItemSelected={partItemSelected}
              onClick={setPartSelected}
            />
          </div>

          {/* Sandwich Part Selector */}
          <div
            className='flex flex-row shrink bg-gray-200 px-3 py-5 gap-3 border-y border-slate-300 dark:bg-[#474747]'
            onChange={handleChangePart}
          >
            {sandwichPart.map((x) => (
              <RadioItem
                name='sandwichPart'
                value={x.name}
                key={x.name}
                checked={x.name == partSelected}
                className='dark:bg-[#3E3E3E] peer-checked:border-[#F8832E] dark:peer-checked:text-white text-[#717171]'
              >
                <BurgerIcon className='mb-1' element={x.name} />
                <span className='my-auto'>{x.title}</span>
              </RadioItem>
            ))}
          </div>

          {/* Sandwich Part Item Selector */}
          <div
            className='flex flex-row shrink bg-white px-3 py-5 gap-3 border-slate-300 dark:bg-[#292929]'
            onChange={handleChangePartItem}
          >
            {sandwichPartItems[partSelected].map((x) => (
              <RadioItem
                name='sandwichPartItem'
                className={`px-0 py-0 border-2 ${
                  partSelected == 'flag'
                    ? 'peer-checked:border-[#33CEFF]'
                    : 'peer-checked:border-[#F8832E] dark:bg-[#292929]'
                }`}
                value={x}
                checked={x == partItemSelected[partSelected]}
                key={partSelected + '-' + x}
              >
                {partSelected != 'flag' ? (
                  <img
                    src={`./assets/images/sandwich/${
                      partSelected + '-' + x
                    }.png`}
                  />
                ) : (
                  <div
                    className='h-24 md:h-32 w-full'
                    style={{
                      backgroundColor: x,
                    }}
                  />
                )}
              </RadioItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
