import Link from "next/link";
import React from "react";
import { IoCall, IoMail } from "react-icons/io5";

export default function ContactPage() {

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Nous contacter
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {"Si vous avez des questions, n'hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais."}
            </p>
            <div className="mt-10 space-y-4 text-base leading-7">
              <div className="flex gap-x-4">
                <IoMail className="h-7 w-6 text-[var(--palette-1)]" />
                <p>
                  <Link className="hover:text-gray-900" href="mailto:nyota.skincare@gmail.com">
                    nyota.skincare@gmail.com
                  </Link>
                </p>
              </div>
              <div className="flex gap-x-4">
                <IoCall className="h-7 w-6 text-[var(--palette-1)]" />
                <p>+243 85694412</p>
              </div>
            </div>
          </div>
        </div>
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nom complet
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="firstName"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="email"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Numéro de téléphone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="phone"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="w-max  rounded-2xl border-2 border-gray-300 bg-[var(--palette-1)]  px-5 py-1.5 text-md font-semibold text-white transition-colors duration-150 ease-in-out hover:border-[var(--palette-1)] hover:bg-[var(--palette-4)]"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
