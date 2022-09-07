import React, { ChangeEvent } from 'react';

function RadioItem(props: {
  value: string;
  name: string;
  className?: string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (
    ev: ChangeEvent<HTMLInputElement>,
  ) => void;
}) {
  return (
    <label className='basis-full cursor-pointer'>
      <input
        type='radio'
        value={props.value}
        name={props.name}
        checked={props.checked}
        className='sr-only peer'
        onChange={(ev) => props.onChange?.(ev)}
      />
      <div
        className={
          props.className +
          ' flex flex-row align-center justify-center gap-x-2 select-none' +
          ' bg-white rounded-lg border border-neutral-300  overflow-hidden' +
          ' text-sm text-center text-neutral-300 peer-checked:text-neutral-700 font-bold' +
          ' transition-colors duration-150'
        }
      >
        {props.children}
      </div>
    </label>
  );
}

export default RadioItem;
