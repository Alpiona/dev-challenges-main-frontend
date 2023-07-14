import { useToast } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";

type ResponseData<T extends (...args: any[]) => Promise<AxiosResponse<any>>> =
  ReturnType<T> extends Promise<AxiosResponse<infer D>> ? D : never;

export const useApi = <
  T extends (...args: any[]) => Promise<AxiosResponse<any>>
>(
  apiFunc: T
) => {
  const [data, setData] = useState<ResponseData<T>>();
  const [success, setSuccess] = useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const [cookie, , removeCookie] = useCookies(["token"]);
  const toast = useToast();
  const router = useRouter();

  const request = async (...args: Parameters<typeof apiFunc>) => {
    setLoading(true);
    setSuccess(false);

    try {
      const result = await apiFunc(...args, cookie.token);
      setData(result.data.data || result.data);
      setSuccess(true);
    } catch (err: any) {
      console.log("err", err.response);
      if (err?.response?.data?.errors[0]?.message === "Access unauthorized") {
        removeCookie("token");
        router.push("/");
      }

      toast({
        title: "Error",
        description: err.response.data.errors[0].message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    request,
    success,
  };
};
