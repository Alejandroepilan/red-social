import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import {
  FaceSmileIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePosts } from "../../context/PostsContext";
import { useAuth } from "../../context/AuthContext";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const NewPostBoton = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const { newPost } = usePosts();
  const [isOpen, setIsOpen] = useState(false);
  const [emojiSelector, setEmojiSelector] = useState(false);

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

  const handleEmojiSelector = () => {
    setEmojiSelector(!emojiSelector);
  };

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
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-2/5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="grid grid-cols-2">
                      <div className="flex text-base">
                        <div className=" w-10">
                          <img
                            src={
                              "https://api.multiavatar.com/" +
                              user.username +
                              ".svg"
                            }
                          />
                        </div>
                        <div className=" flex items-center pl-2">
                          <span className="font-medium mr-1">
                            @{user.username}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={closeModal}
                          className="flex justify-center items-center cursor-pointer hover:bg-gray-50 w-8 h-8 rounded-full"
                        >
                          <XMarkIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </Dialog.Title>
                  <form onSubmit={createPost}>
                    <div className="py-6">
                      <textarea
                        required
                        type="text"
                        placeholder="Escribe lo que quieras..."
                        {...register("text", { required: true })}
                        className="text-black outline-none w-full h-40 overflow-hidden resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2">
                        <div className="flex  items-center">
                          <button
                            onClick={handleEmojiSelector}
                            className="flex justify-center items-center cursor-pointer text-yellow-400 hover:bg-gray-50 w-8 h-8 rounded-full"
                          >
                            <FaceSmileIcon className="w-6 h-6" />
                          </button>
                          {emojiSelector ? (
                            <div className="absolute">
                              <Picker data={data} onEmojiSelect={console.log} />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="text-right">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-2xl border border-transparent bg-yellow-400 px-3 py-2 text-sm font-medium text-black hover:bg-yellow-500 outline-none"
                          >
                            <PencilIcon className="h-5 w-5" />
                            <span className="ml-2">Postear</span>
                          </button>
                        </div>
                      </div>
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
