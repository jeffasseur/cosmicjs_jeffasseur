import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center shadow-xl p-12 rounded-2xl">
        <h1 className=" text-9xl">404</h1>
        <p className="text-2xl text-center">
          The page you are looking for does not exist.
        </p>
        <Link className="btn" href="/">
          Go back homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
