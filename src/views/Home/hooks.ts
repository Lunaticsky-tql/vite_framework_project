// src/views/Home/hooks.ts
import { Message } from "@utils"

const useIduxMessage = (): void => {
  Message?.success("hello, idux")
}

export { useIduxMessage }
