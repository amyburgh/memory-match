export default function Footer({ restart }) {
  const handleRestart = () => {
    restart();
  };

  return (
    <footer className='p-8 pt-0 flex justify-center'>
      <button
        type='button'
        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-m font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
        onClick={handleRestart}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
          />
        </svg>

        <span className='pl-2'>Restart</span>
      </button>
    </footer>
  );
}
