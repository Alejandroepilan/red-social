import React, { useEffect, useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Sidebar } from "../components/Sidebar";
import { useMessage } from "../context/MessageContext";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faHeart,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const HomePage = () => {
  const { messages, verMessages, newPost } = useMessage();
  const { register, handleSubmit } = useForm();

  var avatarUrl = "https://api.multiavatar.com/";

  useEffect(() => {
    verMessages();
  }, []);

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
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex justify-center text-black w-5/6 ml-auto">
        <div className="fixed bottom-10 right-10">
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-black px-5 py-2 text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <FontAwesomeIcon icon={faPen} className="text-white" />
          </button>
        </div>

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
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

        <div className="my-24 max-w-sm">
          {messages.map((message) => (
            <div
              className="ring-1 ring-gray-50 shadow-md rounded-lg py-10 mb-10"
              key={message._id}
            >
              <div className="w-10">
                <img src={avatarUrl + message.user + ".svg"} />
              </div>
              <div className="font-bold">
                {message.user}
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-cyan-400 ml-1"
                />
              </div>
              <div>{message.text}</div>
              <div className="mt-2">
                {message.likes}

                {message.liked ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-500 ml-1"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeartRegular}
                    className="text-red-500 ml-1"
                  />
                )}
              </div>
              <div className="mt-5 text-xs">{message.createdAt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

/*
        
        
        
        */
