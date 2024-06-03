'use client'
import { useCallback, useState, useEffect } from "react";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "../ui/button";
import Image from "next/image";

export default function UploadImage({ imagesToDelete, onUpload, onDelete, setVariant, variant }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesToDelete);
  }, [imagesToDelete]);

  const handleSuccess = useCallback(
    async (result) => {
      console.log('Upload result:', result);  // Log the result object
      if (result && result.info && result.info.secure_url) {
        const imageUrl = result.info.secure_url;
        console.log('Image URL:', imageUrl);
        if (onUpload) {
          onUpload(imageUrl);
        }
      } else {
        console.log('Upload failed or result structure is unexpected.');
      }
    },
    [onUpload]
  );

  const handleDelete = (index) => {
    const newImages = variant.images.filter((_, i) => i !== index);
    setImages(newImages);
    if (onDelete) {
      onDelete(newImages);
    }
  };

  return (
    <div className="h-full">
      <h3 className="font-bold flex justify-center items-center"> העלאת תמונות</h3>
      <div className="flex flex-col justify-center items-center mb-4">
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onSuccess={handleSuccess}
          uploadPreset="emporium"
          className="bg-black text-white p-2 rounded-lg m-2"
        >
          תבחר תמונה
        </CldUploadButton>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {variant.images?.map((imageUrl, index) => (
          <div key={index} className="relative mb-4">
            <Image
              src={imageUrl}
              alt={`Image ${index}`}
              width={100}
              height={100}
              className="object-cover rounded-lg"
            />
            <button
              className="absolute top-0 right-0 text-red-600 p-1 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              onClick={() => onDelete(index)} // Call onDelete with the index
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
