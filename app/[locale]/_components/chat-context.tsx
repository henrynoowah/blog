'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface ChatContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChatContext = createContext<ChatContextValue>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useChatContext = () => useContext(ChatContext);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return <ChatContext.Provider value={{ isOpen, setIsOpen }}>{children}</ChatContext.Provider>;
}
