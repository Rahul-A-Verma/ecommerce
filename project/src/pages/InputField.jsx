/**
 * This code was generated by Builder.io.
 */
import React from "react";

function InputField({ label, type, showPasswordToggle }) {
  return (
    <div className="flex flex-col pb-2 mt-8 w-full whitespace-nowrap border-b border-solid border-b-gray-200 min-h-[40px] text-zinc-500 max-md:max-w-full">
      <div className="flex gap-4 items-center pb-2 w-full border-b border-solid border-b-gray-200 max-md:max-w-full">
        <div className="flex flex-1 shrink gap-5 justify-between self-stretch py-0.5 my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <label className="sr-only" htmlFor={`input-${label}`}>
            {label}
          </label>
          <input
            type={type}
            id={`input-${label}`}
            placeholder={label}
            className="w-full bg-transparent border-none outline-none"
          />
          {showPasswordToggle && (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/369086b02f61284272a21da3d0cf8b2b5d89b087e327822e61b5748e8aff1a91?placeholderIfAbsent=true&apiKey=553755d898d94809aa76715ffb4c295b"
              alt="Toggle password visibility"
              className="object-contain shrink-0 self-start mt-1 w-6 aspect-square"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default InputField;
