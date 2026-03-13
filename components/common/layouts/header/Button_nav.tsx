import { MouseEventHandler, useRef, useState } from 'react';

interface Params {
  onChange: (isNavOpened: boolean) => void;
}

const Button_nav = ({ onChange }: Params) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsNavOpened(!isNavOpened);
    onChange && onChange(!isNavOpened);
  };

  return (
    <button
      type="button"
      onClick={onClickHandler}
      ref={ref}
      className="size-9 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
    >
      <div className="w-4 h-3 relative flex flex-col justify-between">
        <span
          className={`block w-full h-px bg-current transition-all duration-300 ease-out origin-center ${
            isNavOpened ? 'translate-y-[5px] rotate-45' : ''
          }`}
        />
        <span
          className={`block w-full h-px bg-current transition-all duration-200 ease-out ${
            isNavOpened ? 'opacity-0 scale-x-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-full h-px bg-current transition-all duration-300 ease-out origin-center ${
            isNavOpened ? '-translate-y-[7px] -rotate-45' : ''
          }`}
        />
      </div>
    </button>
  );
};

export default Button_nav;
