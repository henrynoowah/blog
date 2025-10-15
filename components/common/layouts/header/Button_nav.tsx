import { MouseEventHandler, useRef, useState } from 'react';

interface Params {
  onChange: (isNaOpened: boolean) => void;
}

const Button_nav = ({ onChange }: Params) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  const onClickhandler: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    setIsNavOpened(!isNavOpened);
    onChange && onChange(!isNavOpened);
  };

  return (
    <button
      type="button"
      onClick={onClickhandler}
      ref={ref}
      className={`size-9 flex justify-center items-center rounded-full bg-primary text-primary-foreground ${
        isNavOpened ? 'rotate-225' : 'rotate-0'
      }  transition duration-300 ease-out`}
    >
      <div
        className={`size-3.5 relative flex flex-col justify-center group cursor-pointer transition duration-300 ease-linear hover:`}
      >
        <span
          className={`absolute w-full h-0.5 top-0 bg-primary-foreground transition duration-300 ease-linear ${
            isNavOpened ? 'translate-y-1.5' : ''
          }`}
        />
        <span
          className={`absolute w-full h-0.5 bg-primary-foreground transition duration-300 ease-linear opacity-100 ${
            isNavOpened ? 'rotate-90' : ''
          }`}
        />
        <span
          className={`absolute w-full h-0.5 bottom-0 bg-primary-foreground transition duration-300 ease-linear ${
            isNavOpened ? '-translate-y-1.5' : ''
          }`}
        />
      </div>
    </button>
  );
};

export default Button_nav;
