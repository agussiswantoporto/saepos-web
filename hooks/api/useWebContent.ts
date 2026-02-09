import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

export interface WebContent {
  hero: any;
  features: any[];
  pricing: any[];
  company: any;
  navigation: any[];
}

export function useWebContent() {
  return useQuery({
    queryKey: ["web-content"],
    queryFn: async (): Promise<WebContent> => {
      const response = await axiosInstance.get("/public/web-content");
      return response.data.data;
    },
  });
}
