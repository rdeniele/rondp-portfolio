import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;           // Controls if the modal is visible
  onClose: () => void;       // Function to close the modal
  title: string;             // Project title
  description: string;       // Project description
  image_url: string;         // Image URL for the project
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  image_url,
}: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      {/* The Dialog component provides accessible modal semantics */}
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay with fade-in/out animation */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Semi-transparent dark background with blur */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        {/* Container that centers the modal content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Modal panel with scale and opacity animation */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Modal content box */}
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-xl transition-all">
                {/* Project image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src={image_url}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project title */}
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-white mb-2"
                >
                  {title}
                </Dialog.Title>

                {/* Project description */}
                <div className="mt-2">
                  <p className="text-gray-300">{description}</p>
                </div>

                {/* Close button */}
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
