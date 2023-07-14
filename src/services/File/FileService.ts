import client from "@/client/api";
import {
  UploadBuildData,
  UploadBuildParams,
  UploadFileData,
  UploadFileParams,
} from "./FileType";

const uploadFile = ({ file, type }: UploadFileParams) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", type);

  return client.post<UploadFileData>("/api/files/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const uploadBuild = ({ file, operatingSystem, version }: UploadBuildParams) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("operatingSystem", operatingSystem);
  formData.append("version", version);

  return client.post<UploadBuildData>("/api/files/upload/build", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const FileService = {
  uploadFile,
  uploadBuild,
};
