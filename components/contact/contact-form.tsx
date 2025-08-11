"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { Send } from "lucide-react";


const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const loadingToast = toast.loading("Sending message...");

    try {
      const result = await sendContactEmail(data);

      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong.");
    }
  };

  return (
   <form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 
             p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 transition-colors duration-300 
             space-y-5 w-full"
>

  {/* Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Full Name
    </label>
    <input
      type="text"
      {...register("name")}
      disabled={isSubmitting}
      placeholder="Your full name"
      className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
    />
    {errors.name && (
      <p className="mt-1 text-xs text-red-600 dark:text-red-400">
        {errors.name.message}
      </p>
    )}
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Email Address
    </label>
    <input
      type="email"
      {...register("email")}
      disabled={isSubmitting}
      placeholder="your.email@example.com"
      className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400"
    />
    {errors.email && (
      <p className="mt-1 text-xs text-red-600 dark:text-red-400">
        {errors.email.message}
      </p>
    )}
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Message
    </label>
    <textarea
      {...register("message")}
      rows={5}
      disabled={isSubmitting}
      placeholder="Tell me about your project or just say hello..."
      className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
    />
    {errors.message && (
      <p className="mt-1 text-xs text-red-600 dark:text-red-400">
        {errors.message.message}
      </p>
    )}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium py-2.5 px-5 text-sm rounded-lg hover:shadow-lg dark:hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
  >
    {isSubmitting ? (
      <span>Sending...</span>
    ) : (
      <>
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </>
    )}
  </button>
</form>

  );
}
