import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export interface CareersInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileSelect?: (file: File | null) => void; // Optional callback for parent component
}

const CareersInput = React.forwardRef<HTMLInputElement, CareersInputProps>(
  ({ className, type, onFileSelect, ...props }, ref) => {
    const [fileName, setFileName] = React.useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0];
        setFileName(selectedFile.name); // Update state with file name
        if (onFileSelect) {
          onFileSelect(selectedFile); // Optionally call a parent callback
        }
      }
    };

    return (
      <div className="relative">
        {/* Hidden File Input */}
        <input
          type={type}
          className="hidden"
          ref={ref}
          onChange={handleFileChange}
          {...props}
        />

        {/* Animated Label (acting as the 'Choose File' button) */}
        <motion.label
          htmlFor={props.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
            className
          )}
        >
          Choose File
        </motion.label>

        {/* Display selected file name */}
        {fileName && (
          <p className="mt-2 text-sm text-neutral-500">{fileName}</p>
        )}
      </div>
    );
  }
);
CareersInput.displayName = "CareersInput";

export { CareersInput };
