import { GetServerSideProps } from 'next';

export default function Filters(props) {
  return (
    <>
      This page has a delay of 2.5 seconds to simulate a very very slow database query :)
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    's-maxage=20, stale-while-revalidate=60'
  );

  // add a fake timeout of 2.5 seconds
  await new Promise<void>((res) => setTimeout(res, 2500));

  return {
    props: {
      query: context.query,
      'rendered on the server at (UTC)': new Date()
        .toISOString()
        .replace('T', ' ')
        .replace('Z', ''),
    },
  };
};
