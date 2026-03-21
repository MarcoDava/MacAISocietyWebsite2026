import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F0F4F4] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading text-8xl font-bold text-[#1800AD] mb-4">404</h1>
      <h2 className="font-heading text-2xl font-bold text-[#1800AD] mb-4">Page Not Found</h2>
      <p className="text-[#4A5568] mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-cta px-8 py-3">
        Back to Home
      </Link>
    </div>
  );
}
