interface ErrorAndLoadingProps {
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string;
  }
  
  const ErrorAndLoading: React.FC<ErrorAndLoadingProps> = ({ isLoading, isError, errorMessage }) => {
    if (isLoading) {
      return (
        <div className="text-center">
          <p>Loading products...</p>
          {/* You can add a loading spinner or animation here */}
        </div>
      );
    }
  
    if (isError) {
      return (
        <div className="text-center text-red-500">
          <p>{errorMessage || "Something went wrong. Please try again later."}</p>
        </div>
      );
    }
  
    return null;
  };
  
  export default ErrorAndLoading;
  