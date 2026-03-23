'use client';

import { createContext, useContext, useRef, useState, type ReactNode } from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

const GREETING: ChatMessage = {
  role: 'model',
  content:
    "Hi! I'm Hawoon's AI assistant. Ask me anything about his work, projects, or background.",
};

interface ChatContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  input: string;
  setInput: (input: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const ChatContext = createContext<ChatContextValue>({
  isOpen: false,
  setIsOpen: () => {},
  messages: [GREETING],
  setMessages: () => {},
  input: '',
  setInput: () => {},
  isLoading: false,
  setIsLoading: () => {},
  inputRef: { current: null },
});

export const useChatContext = () => useContext(ChatContext);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <ChatContext.Provider
      value={{ isOpen, setIsOpen, messages, setMessages, input, setInput, isLoading, setIsLoading, inputRef }}
    >
      {children}
    </ChatContext.Provider>
  );
}
