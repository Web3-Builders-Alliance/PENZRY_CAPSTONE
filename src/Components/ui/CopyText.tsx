import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";

interface CopyLinkButtonProps {
  linkToCopy: string;
  linkText: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({
  linkToCopy,
  linkText,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = linkToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div className="flex items-center gap-1 cursor-pointer">
        <p className=" text-primary text-body-xs md:text-body-sm flex items-center">
          {linkText}
        </p>
        <AiOutlineCopy onClick={handleCopyClick} className="text-body-lg" />
      </div>
      <p className="text-error text-body-xs mt-0.5">
        {isCopied ? "Link Copied!" : ""}
      </p>
    </div>
  );
};

export default CopyLinkButton;
