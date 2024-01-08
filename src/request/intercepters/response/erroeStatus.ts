// src/request/interceptors/response/errorStatus.ts

// 专门处理失败状态码的拦截器
import type { AxiosError } from "axios"
import { showErrorMessage } from "@utils"

const errorStatusReject = (error: AxiosError): Promise<AxiosError> => {
  showErrorMessage(error)
  return Promise.reject(error)
}

export default errorStatusReject
