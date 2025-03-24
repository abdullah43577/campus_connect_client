import { toast, ToastOptions } from "react-toastify";
import { CheckCircle, XCircle, AlertCircle, Info, X as CloseIcon } from "lucide-react";

type ToastType = "error" | "success" | "warning" | "info";

interface CustomToastProps {
  heading: string;
  description: string;
  type: ToastType;
}

const CustomToast = ({ heading, description, type }: CustomToastProps) => {
  const variants = {
    success: {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      container: "bg-primary-50 border-green-500",
      text: "text-dark-500",
    },
    error: {
      icon: <XCircle className="h-5 w-5 text-error-500" />,
      container: "bg-error-100/30 border-error-500",
      text: "text-dark-500",
    },
    warning: {
      icon: <AlertCircle className="h-5 w-5 text-orange-400" />,
      container: "bg-secondary-50 border-orange-400",
      text: "text-dark-500",
    },
    info: {
      icon: <Info className="h-5 w-5 text-primary-500" />,
      container: "bg-primary-50 border-primary-500",
      text: "text-dark-500",
    },
  };

  return (
    <div className={`flex max-w-[300px] items-start gap-4 rounded-lg border p-4 shadow-containerShadow backdrop-blur-sm transition-all duration-200 ${variants[type].container}`}>
      <div className="mt-1 flex-shrink-0">{variants[type].icon}</div>

      <div className="min-w-0 flex-grow">
        {heading && <h3 className={`mb-1 text-sm font-semibold ${variants[type].text}`}>{heading}</h3>}
        <p className={`text-sm font-normal ${variants[type].text} opacity-90`}>{description}</p>
      </div>

      <button onClick={() => toast.dismiss()} className="-mr-1 -mt-1 flex-shrink-0 rounded-md p-1 transition-colors duration-150 hover:bg-black/5">
        <CloseIcon className="h-4 w-4 text-gray-10" />
      </button>
    </div>
  );
};

// Toast utility function - maintaining original export
export const showToast = (type: ToastType, heading: string, description: string) => {
  const options: ToastOptions = {
    progressClassName: `!h-1 ${type === "error" ? "!bg-error-500" : type === "success" ? "!bg-green-500" : type === "warning" ? "!bg-orange-400" : "!bg-primary-500"}`,
  };

  switch (type) {
    case "error":
      toast(<CustomToast type="error" description={description} heading={heading} />, options);
      break;
    case "success":
      toast(<CustomToast type="success" description={description} heading={heading} />, options);
      break;
    case "warning":
      toast(<CustomToast type="warning" description={description} heading={heading} />, options);
      break;
    case "info":
      toast(<CustomToast type="info" description={description} heading={heading} />, options);
      break;
    default:
      toast(<CustomToast type="info" description={description} heading={heading} />, options);
  }
};
