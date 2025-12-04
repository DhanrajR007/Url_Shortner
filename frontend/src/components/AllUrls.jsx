import { useQuery } from "@tanstack/react-query";
import { getAllUrls } from "../api/user.api";
import { useDispatch } from "react-redux";
import { updateUrls } from "../store/slice/userSlice";
import { useEffect } from "react";

const AllUrls = () => {
  const dispatch = useDispatch();
  const {
    data: urls = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["urls"],
    queryFn: getAllUrls,
    refetchInterval: 30000, // Refetch every 30 seconds to update click counts
    staleTime: 0, // Consider data stale immediately so it refetches when invalidated
  });
  useEffect(() => {
    dispatch(updateUrls(urls));
  }, [urls]);
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {urls.map((url) => (
          <div key={url._id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div className="truncate w-full">
                <p className="text-gray-500 text-sm">Original URL</p>
                <a
                  href={url.full_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline truncate block"
                >
                  {url.full_url}
                </a>
              </div>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full text-green-800 bg-green-200`}
              >
                Active
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Short URL</p>
              <a
                href={`${
                  import.meta.env.VITE_API_URL || "http://localhost:3000/"
                }${url.short_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {url.short_url}
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Clicks</p>
              <p className="text-2xl font-bold text-gray-800">{url.clicks}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllUrls;
