import React from 'react';
import './ThemeSwitch.css';

function ThemeSwitch(props: {
  darkMode?: boolean;
  onChange?: (value: boolean) => void;
}) {
  function handleCheckbox(ev: { target: { checked: boolean } }) {
    props.onChange?.(ev.target.checked);
  }

  return (
    <label className='theme-switch flex items-center cursor-pointer'>
      {/* Toggle */}
      <div className='relative'>
        {/* input */}
        <input
          type='checkbox'
          className='sr-only'
          checked={props.darkMode}
          onChange={handleCheckbox}
        />
        {/* line */}
        <div
          className='block bg-cover bg-center bg-no-repeat bg-blue-500 w-14 h-8 rounded-full'
          style={{
            backgroundImage: `url(assets/images/theme-switcher/${
              props.darkMode ? 'dark' : 'light'
            }-bg.png)`,
          }}
        ></div>
        {/* dot */}
        <div
          className='dot absolute right-1 top-1 drop-shadow-md bg-white bg-cover bg-center bg-no-repeat w-6 h-6 rounded-full transition'
          style={{
            backgroundImage: `url(assets/images/theme-switcher/${
              props.darkMode ? 'dark' : 'light'
            }-fg.png)`,
          }}
        ></div>
      </div>
    </label>
  );
}

export default ThemeSwitch;
