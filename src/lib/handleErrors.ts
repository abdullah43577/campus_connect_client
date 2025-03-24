import { showToast } from "./showToast";

export function useHandleErrors() {
  const handleAxiosErrors = function (error: any) {
    let errorMessage = "An unexpected error occurred. Please try again later.";

    if (error.message) {
      errorMessage = error.message;
      if (error.response?.data?.message) {
        errorMessage = error.response?.data?.message;
      }
    }

    showToast("error", "Error", errorMessage);
  };

  return handleAxiosErrors;
}
