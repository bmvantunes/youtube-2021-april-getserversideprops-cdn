import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <Link href="/filters?name=Bruno&born=PT&home=UK&youtube=https://www.youtube.com/BrunoAntunesPT">
        Go to /filters with query params
      </Link>
    </>
  );
}
