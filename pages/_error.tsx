import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error | Saalim Shaikh Portfolio</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-600 mb-4">
            {statusCode ? `${statusCode}` : 'Error'}
          </h1>
          <p className="text-xl mb-8">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </p>
          <Link 
            href="/" 
            className="bg-slate-600 hover:bg-slate-700 text-rose-100 px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 