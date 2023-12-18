import { YellowClickyButton } from "./buttons";

export const ContactForm = () => {
  return (
    <form className="m-auto flex w-full max-w-3xl flex-col rounded-md bg-white p-4 shadow-md">
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </span>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="name"
            className="mb-4 block w-full rounded-md border-2 border-gray-200 px-2 py-1.5 text-black sm:text-sm"
          />
        </div>
      </label>
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </span>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            className="mb-4 block w-full rounded-md border-2 border-gray-200 px-2 py-1.5 text-black sm:text-sm"
          />
        </div>
      </label>
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Subject
        </span>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="subject"
            className="mb-4 block w-full rounded-md border-2 border-gray-200 px-2 py-1.5 text-black sm:text-sm"
          />
        </div>
      </label>
      <label>
        <span className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </span>
        <div className="relative mt-2 rounded-md shadow-sm">
          <textarea
            name="message"
            rows={8}
            className="mb-4 block w-full resize-none rounded-md border-2 border-gray-200 px-2 py-1.5 text-black sm:text-sm"
          />
        </div>
      </label>
      <YellowClickyButton type="submit">Submit</YellowClickyButton>
    </form>
  );
};
