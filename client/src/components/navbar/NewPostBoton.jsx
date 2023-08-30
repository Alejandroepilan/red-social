import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { usePosts } from "../../context/PostsContext";

const NewPostBoton = () => {
  const { register, handleSubmit } = useForm();
  const { newPost } = usePosts();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const createPost = handleSubmit((data) => {
    newPost(data);
    closeModal();
  });

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center px-3 h-full bg-yellow-400 rounded-2xl hover:bg-yellow-500 "
      >
        <PlusIcon className="h-6 w-6" />
        <a className="pl-1 font-medium">Crear</a>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-1000" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Escribe lo que quieras:
                  </Dialog.Title>
                  <form onSubmit={createPost}>
                    <div className="mt-2">
                      <textarea
                        required
                        type="text"
                        {...register("text", { required: true })}
                        className="text-black outline-none w-full h-auto overflow-hidden resize-none"
                      ></textarea>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2"
                      >
                        Publicar
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewPostBoton;
