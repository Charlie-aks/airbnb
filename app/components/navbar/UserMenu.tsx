'use client';
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../ui/Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal"; // 1. Import hook

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onLogin = useCallback(() => {
     setIsOpen(false); 
     loginModal.onOpen(); 
  }, [loginModal]);

  // Hàm xử lý mở Register modal
  const onRegister = useCallback(() => {
     setIsOpen(false);
     registerModal.onOpen();
  }, [registerModal]);

  return (
    <div className="relative z-100">
      <div className="flex flex-row items-center gap-3">
        <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
            Airbnb your home
        </div>
        <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
            <AiOutlineMenu/>
            <div className="hidden md:block">
                <Avatar/>
            </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="
            absolute 
            rounded-xl 
            shadow-md 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            w-[90vw]    
            md:w-[200px]  
            cursor-pointer
        ">
            <div className="flex flex-col cursor-pointer">
                <>
                   {/* 3. Gán sự kiện onLogin */}
                   <MenuItem onClick={onLogin} label="Login" />
                   {/* 4. Cập nhật onRegister cho gọn code */}
                   <MenuItem onClick={onRegister} label="Sign up" />
                </>
            </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu