'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import Button from '../Button';

interface Params {
  pageCount: number;
}

const Pagination: FC<Params> = ({ pageCount }) => {
  const router = useRouter();
  const onClickHandler = (page: number) => {
    router.push(`/posts?page=${page}`);
  };

  return (
    <div className="w-full flex justify-center gap-3">
      {Array.from({ length: pageCount }).map((_, idx) => (
        <Button onClick={() => onClickHandler(idx + 1)} type="button" key={idx}>
          {idx + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
