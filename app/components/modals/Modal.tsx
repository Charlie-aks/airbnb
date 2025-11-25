'use client';
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../ui/Button";

interface ModalProps {
 isOpen: boolean;
 onClose: () => void;
 onSubmit: () => void;
 title?: string;
 body?: React.ReactNode;
 footer?: React.ReactNode;
 disabled?: boolean;
 actionLabel: string;
 secondaryAction?: () => void;
 secondaryActionLabel?: string;   
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    disabled,
    actionLabel,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) return;
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit();
    }, [disabled, onSubmit]);
    
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;
        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
       <>
        <div 
            // 1. Sửa z-999 thành z-[999] (cú pháp đúng)
            className="fixed inset-0 z-999 flex justify-center items-center overflow-x-hidden overflow-y-auto bg-neutral-800/70"
            >
            <div 
                className={`
                    relative 
                    w-full
                    md:w-3/5      /* Tablet: 60% */
                    lg:w-2/5      /* PC nhỏ: 40% */
                    xl:w-[500px]  /* PC lớn: Cố định 500px cho gọn */
                    my-auto       /* 2. Căn giữa dọc: quan trọng để nút đóng không bị mất */
                    mx-auto 
                    h-full        
                    md:h-auto     
                    transform 
                    duration-300
                    ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                `}
            >
                {/* 3. Thêm h-full md:h-auto để modal co giãn tốt hơn */}
                <div className="
                    translate
                    h-full
                    md:h-auto
                    border-0 
                    rounded-lg 
                    shadow-lg 
                    relative 
                    flex 
                    flex-col 
                    w-full 
                    bg-white 
                    outline-none 
                    focus:outline-none
                ">
                    {/* Header */}
                    <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                        <button 
                            className="absolute left-9 p-1 border-0 hover:opacity-70 transition" 
                            onClick={handleClose}
                        >
                            <IoMdClose size={18}/>
                        </button>
                        <div className="text-lg font-semibold">{title}</div>
                    </div>

                    {/* Body */}
                    <div className="relative p-6 flex-auto">{body}</div>

                    {/* Footer */}
                    <div className="flex flex-col gap-2 p-6">
                        <div className="flex flex-row items-center gap-4 w-full">
                            {secondaryAction && secondaryActionLabel && (
                            <Button
                                outline
                                disabled={disabled}
                                label={secondaryActionLabel}
                                onClick={handleSecondaryAction}
                            />
                            )}
                            <Button
                                disabled={disabled}
                                label={actionLabel}
                                onClick={handleSubmit}
                            />
                        </div>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default Modal;