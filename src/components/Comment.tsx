/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";
import Spinner from "./Spinner";

const Comment = ({ comment, postId }: { comment: any; postId: string }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const token = Cookies.get("token");
  const { setChange } = useAppContext(); // Ensure this is imported correctly

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setIsUploading(true);
      const uploadedImages: string[] = [];
      const fileArray = Array.from(files);

      for (const file of fileArray) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "bakehaven");

        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dxbeayp6k/image/upload`,
            {
              method: "POST",
              body: formData,
            },
          );
          if (response.ok) {
            const data = await response.json();
            uploadedImages.push(data.secure_url);
          } else {
            console.error("Failed to upload image:", await response.text());
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }

      setIsUploading(false);
      setImages((prevImages) => [...prevImages, ...uploadedImages]);
    }
  };

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = (url: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== url));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://simple-backend2.vercel.app/api/comments`,
        {
          message,
          postId,
          image: images, // Only sending the first image if there are multiple
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 201) {
        // Trigger context update after successful comment creation
        setChange("comment");
      } else {
        console.error("Failed to create comment:", response.data);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios errors
        console.error(
          "Error creating comment:",
          error.response?.data || error.message,
        );
      } else if (error instanceof Error) {
        // Handle general errors
        console.error("Error creating comment:", error.message);
      } else {
        // Handle any errors
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="relative rounded border border-border bg-account p-4">
      <textarea
        className="w-full bg-account pb-32"
        placeholder={`Leave a comment for ${comment.name}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="mb-2 flex flex-wrap items-center gap-1">
        {images.map((image) => (
          <div key={image} className="relative h-24 w-24 border border-grey">
            <img
              src={image}
              alt="comment"
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => removeImage(image)}
              className="text-red-500 absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-bgGray p-1"
            >
              ×
            </button>
          </div>
        ))}
        {isUploading && (
          <div className="flex h-24 items-center">
            <Spinner />
          </div>
        )}
        <label className="text-primary border-primary bg-transpparent hidden h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-sm text-center text-sm">
          <input
            type="file"
            ref={fileInputRef}
            onChange={uploadImage}
            className="hidden"
            multiple
          />
        </label>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <MdOutlineAttachment
          size={20}
          onClick={handleAttachmentClick}
          className="cursor-pointer"
        />
        <div
          className="flex cursor-pointer items-center justify-center rounded-full bg-btn"
          onClick={handleSubmit}
        >
          <BsArrowUpShort size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
