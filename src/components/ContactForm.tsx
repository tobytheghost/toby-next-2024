"use client";

import { useForm } from "react-hook-form";
import { YellowClickyButton, YellowClickyLink } from "./buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { env } from "~/env";

export const ContactForm = () => {
  type FormValues = z.infer<typeof formSchema>;

  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const formSchema = z.object({
    name: z
      .string()
      .min(3, "Name must contain at least 3 characters")
      .max(100, "Name must contain less than 100 characters"),
    email: z.string().email(),
    subject: z.string().min(3).max(100),
    message: z.string().min(3).max(1000),
  });

  const form = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = () => {
    return form.handleSubmit(async (data) => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const response = await fetch(env.NEXT_PUBLIC_CONTACT_FORM_URL, {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(data),
      });

      if (response.ok) return setSent(true);

      return setServerError("Something went wrong, please try again later.");
    });
  };

  if (serverError.length > 0)
    return (
      <div className="m-auto flex w-full max-w-3xl flex-col rounded-md bg-white p-4 py-12 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">Whoops!</h2>
        <p className="mb-4 text-center">{serverError}</p>
        <div className="max-w-1/2 flex justify-center">
          <YellowClickyLink href="/">Back to home</YellowClickyLink>
        </div>
      </div>
    );

  if (sent)
    return (
      <div className="m-auto flex w-full max-w-3xl flex-col rounded-md bg-white p-4 py-12 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Thanks for getting in touch!
        </h2>
        <p className="mb-4 text-center">
          I'll get back to you as soon as I can.
        </p>
        <div className="max-w-1/2 flex justify-center">
          <YellowClickyLink href="/">Back to home</YellowClickyLink>
        </div>
      </div>
    );

  return (
    <form
      method="POST"
      className="m-auto flex w-full max-w-3xl flex-col rounded-md bg-white p-4 shadow-md"
      onSubmit={handleSubmit()}
    >
      <label className="group">
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </span>
        <div className="relative mt-2">
          <input
            type="text"
            className="mb-4 block w-full rounded-md border-2 border-gray-200 px-2 py-1.5 text-black shadow-sm sm:text-sm"
            {...form.register("name")}
          />
          {form.formState.errors.name && (
            <p className="mb-4 text-red-500">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>
      </label>
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </span>
        <div className="relative mt-2">
          <input
            type="email"
            className="mb-4 block w-full rounded-md border-2 border-gray-200 px-2 py-1.5 text-black shadow-sm sm:text-sm"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="mb-4 text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </label>
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Subject
        </span>
        <div className="relative mt-2">
          <input
            type="text"
            className="mb-4 block w-full rounded-md border-2 border-gray-200 px-2 py-1.5 text-black shadow-sm sm:text-sm"
            {...form.register("subject")}
          />
          {form.formState.errors.subject && (
            <p className="mb-4 text-red-500">
              {form.formState.errors.subject.message}
            </p>
          )}
        </div>
      </label>
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </span>
        <div className="relative mt-2">
          <textarea
            rows={8}
            className="mb-4 block w-full resize-none rounded-md border-2 border-gray-200 px-2 py-1.5 text-black shadow-sm sm:text-sm"
            {...form.register("message")}
          />
          {form.formState.errors.message && (
            <p className="mb-4 text-red-500">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>
      </label>
      <YellowClickyButton type="submit">Submit</YellowClickyButton>
    </form>
  );
};
